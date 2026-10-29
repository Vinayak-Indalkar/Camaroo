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
        trackCode: 'TRK-FZ-2026-501',
        trackId: 'TRK-FZ-2026-501',
        productionDate: '2026-10-06',
        arrivalDate: '2026-10-06',
        batchNumber: 'BATCH-FZ-2026-001',
        supc: 'SUPC-VM-3140-IQF',
        product: 'Vannamei HLSO IQF',
        variety: 'Vannamei (VM)',
        productionPlant: 'DFL UNIT-5 (JPT)',
        group: 'Group A',
        shift: 'Shift A (Day)',
        startTimer: '08:30 AM',
        endTimer: '09:20 AM',
        poNumber: 'PO-2026-8810',
        grade: '31/40',
        packingStyle: '10 x 1 Kg Pouch',
        packingType: 'IQF Polybag',
        productCategory: 'Raw Frozen',
        abStatus: 'TESTED NEGATIVE',
        prodWeight: '450.0 Kgs',
        productionSlabs: 225,
        slabs: 225,
        rejectionWeight: '3.5 Kgs',
        tubNumber: 'Tub-04',
        tubNo: 'Tub-04',
        lineNumber: 'Line #1',
        freezingType: 'IQF Tunnel',
        glazePct: '8%',
        treatment: 'Non-Phosphate',
        remarks: 'Export grade blast IQF, zero clump formation verified by QC',
        status: 'COMPLETED'
      },
      {
        sNo: 2,
        id: 'TRK-FZ-2026-502',
        trackCode: 'TRK-FZ-2026-502',
        trackId: 'TRK-FZ-2026-502',
        productionDate: '2026-10-06',
        arrivalDate: '2026-10-06',
        batchNumber: 'BATCH-FZ-2026-002',
        supc: 'SUPC-BT-1620-BLK',
        product: 'Black Tiger Block Frozen',
        variety: 'Black Tiger (BT)',
        productionPlant: 'DFL UNIT-3 (PSP)',
        group: 'Group B',
        shift: 'Shift A (Day)',
        startTimer: '09:00 AM',
        endTimer: '10:30 AM',
        poNumber: 'PO-2026-8812',
        grade: '16/20',
        packingStyle: '6 x 2 Kg Block',
        packingType: 'Block Frozen Carton',
        productCategory: 'Raw Frozen',
        abStatus: 'TESTED NEGATIVE',
        prodWeight: '600.0 Kgs',
        productionSlabs: 300,
        slabs: 300,
        rejectionWeight: '4.2 Kgs',
        tubNumber: 'Tub-07',
        tubNo: 'Tub-07',
        lineNumber: 'Line #2',
        freezingType: 'Plate Freezer (Block Frozen)',
        glazePct: '6%',
        treatment: 'Food Grade STPP',
        remarks: 'Block frozen 2 KG slabs, core temperature achieved -24.1°C',
        status: 'ACTIVE'
      },
      {
        sNo: 3,
        id: 'TRK-FZ-2026-503',
        trackCode: 'TRK-FZ-2026-503',
        trackId: 'TRK-FZ-2026-503',
        productionDate: '2026-10-07',
        arrivalDate: '2026-10-06',
        batchNumber: 'BATCH-FZ-2026-003',
        supc: 'SUPC-VM-2125-CKD',
        product: 'Cooked Peeled Vannamei',
        variety: 'Vannamei (VM)',
        productionPlant: 'DFL UNIT-4 (PND)',
        group: 'Group A',
        shift: 'Shift B (Evening)',
        startTimer: '14:15 PM',
        endTimer: '15:10 PM',
        poNumber: 'PO-2026-8815',
        grade: '21/25',
        packingStyle: '10 x 1 Kg Pouch',
        packingType: 'Pouch Pack',
        productCategory: 'Cooked Peeled',
        abStatus: 'CLEARED',
        prodWeight: '520.0 Kgs',
        productionSlabs: 260,
        slabs: 260,
        rejectionWeight: '2.8 Kgs',
        tubNumber: 'Tub-02',
        tubNo: 'Tub-02',
        lineNumber: 'Line #1',
        freezingType: 'Spiral Freezer (IQF)',
        glazePct: '10%',
        treatment: 'Fresh Raw',
        remarks: 'Cooked peeled prawns, rapid chill blast compliant and approved',
        status: 'ACTIVE'
      },
      {
        sNo: 4,
        id: 'TRK-FZ-2026-504',
        trackCode: 'TRK-FZ-2026-504',
        trackId: 'TRK-FZ-2026-504',
        productionDate: '2026-10-07',
        arrivalDate: '2026-10-07',
        batchNumber: 'BATCH-FZ-2026-004',
        supc: 'SUPC-SW-4150-IQF',
        product: 'Sea White Fillets IQF',
        variety: 'Sea White',
        productionPlant: 'DFL UNIT-1 (VSP)',
        group: 'Group C',
        shift: 'Shift A (Day)',
        startTimer: '07:45 AM',
        endTimer: '08:35 AM',
        poNumber: 'PO-2026-8819',
        grade: '41/50',
        packingStyle: 'Master Carton 10 Kg',
        packingType: 'Bulk Pack',
        productCategory: 'Value Added',
        abStatus: 'CLEARED',
        prodWeight: '380.0 Kgs',
        productionSlabs: 190,
        slabs: 190,
        rejectionWeight: '2.0 Kgs',
        tubNumber: 'Tub-11',
        tubNo: 'Tub-11',
        lineNumber: 'Line #3',
        freezingType: 'IQF Tunnel',
        glazePct: '5%',
        treatment: 'Citric Acid & Salt',
        remarks: 'Export grade Seabass fillets packed into master cartons',
        status: 'COMPLETED'
      },
      {
        sNo: 5,
        id: 'TRK-FZ-2026-505',
        trackCode: 'TRK-FZ-2026-505',
        trackId: 'TRK-FZ-2026-505',
        productionDate: '2026-10-07',
        arrivalDate: '2026-10-07',
        batchNumber: 'BATCH-FZ-2026-005',
        supc: 'SUPC-SC-1115-BLK',
        product: 'Scampi Block Frozen',
        variety: 'Scampi',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        group: 'Group B',
        shift: 'Shift C (Night)',
        startTimer: '23:00 PM',
        endTimer: '00:45 AM',
        poNumber: 'PO-2026-8822',
        grade: '11/15',
        packingStyle: '5 x 2 Kg Block',
        packingType: 'Block Frozen Carton',
        productCategory: 'Raw Frozen',
        abStatus: 'TESTED NEGATIVE',
        prodWeight: '410.0 Kgs',
        productionSlabs: 205,
        slabs: 205,
        rejectionWeight: '3.1 Kgs',
        tubNumber: 'Tub-09',
        tubNo: 'Tub-09',
        lineNumber: 'Line #4',
        freezingType: 'Plate Freezer (Block Frozen)',
        glazePct: '7%',
        treatment: 'Non-Phosphate',
        remarks: 'Night run block batches transferred to Coldstore Chamber #1',
        status: 'ACTIVE'
      },
      {
        sNo: 6,
        id: 'TRK-FZ-2026-506',
        trackCode: 'TRK-FZ-2026-506',
        trackId: 'TRK-FZ-2026-506',
        productionDate: '2026-10-08',
        arrivalDate: '2026-10-08',
        batchNumber: 'BATCH-FZ-2026-006',
        supc: 'SUPC-VM-3140-BLN',
        product: 'Blanched Vannamei IQF',
        variety: 'Vannamei (VM)',
        productionPlant: 'DFL UNIT-2 (KKD)',
        group: 'Group A',
        shift: 'Shift A (Day)',
        startTimer: '08:15 AM',
        endTimer: '09:05 AM',
        poNumber: 'PO-2026-8825',
        grade: '31/40',
        packingStyle: '10 x 1 Kg Pouch',
        packingType: 'IQF Polybag',
        productCategory: 'Blanched',
        abStatus: 'PENDING LAB',
        prodWeight: '490.0 Kgs',
        productionSlabs: 245,
        slabs: 245,
        rejectionWeight: '3.8 Kgs',
        tubNumber: 'Tub-05',
        tubNo: 'Tub-05',
        lineNumber: 'Line #1',
        freezingType: 'IQF Tunnel',
        glazePct: '8%',
        treatment: 'Non-Phosphate',
        remarks: 'Staging in ante-room, waiting for final blast tunnel completion',
        status: 'PENDING'
      }
    ],

    standardYields: [
      {
        sNo: 1,
        id: 'SY-2026-001',
        species: 'Vannamei',
        typeProduct: 'HLSO',
        variety: 'Aquaculture',
        grade: '31/40',
        count: '31-40 pcs/lb',
        freezingType: 'IQF',
        treatment: 'Non-Phosphate',
        typeOfMaterial: 'Headless Shell-On',
        yield: '66.5%',
        status: 'Active',
        remarks: 'Export standard benchmark cleared by Devi Fisheries QC'
      },
      {
        sNo: 2,
        id: 'SY-2026-002',
        species: 'Vannamei',
        typeProduct: 'PD',
        variety: 'Aquaculture',
        grade: '26/30',
        count: '26-30 pcs/lb',
        freezingType: 'Block Frozen',
        treatment: 'Food Grade STPP',
        typeOfMaterial: 'Peeled Undeveined',
        yield: '61.0%',
        status: 'Active',
        remarks: 'Peeled tails verified with automated count sizing'
      },
      {
        sNo: 3,
        id: 'SY-2026-003',
        species: 'Vannamei',
        typeProduct: 'PDTO',
        variety: 'Aquaculture',
        grade: '21/25',
        count: '21-25 pcs/lb',
        freezingType: 'IQF',
        treatment: 'Non-Phosphate',
        typeOfMaterial: 'Peeled Deveined Tail-On',
        yield: '63.5%',
        status: 'Active',
        remarks: 'Premium IQF retail pouch benchmark specification'
      },
      {
        sNo: 4,
        id: 'SY-2026-004',
        species: 'Black Tiger',
        typeProduct: 'HOSO',
        variety: 'Sea Caught',
        grade: '16/20',
        count: '16-20 pcs/lb',
        freezingType: 'Semi-IQF',
        treatment: 'Fresh Raw (Untreated)',
        typeOfMaterial: 'Head-On Shell-On',
        yield: '96.5%',
        status: 'Active',
        remarks: 'Direct farm intake sizing, high recovery intact cephalothorax'
      },
      {
        sNo: 5,
        id: 'SY-2026-005',
        species: 'Asian Seabass',
        typeProduct: 'Fillet',
        variety: 'Aquaculture',
        grade: '300/500g',
        count: '2-3 pcs/kg',
        freezingType: 'IQF',
        treatment: 'Salt Treated',
        typeOfMaterial: 'Skin-On Boneless Fillet',
        yield: '49.5%',
        status: 'Active',
        remarks: 'Pinbone out, precision manual filleting recovery rate'
      },
      {
        sNo: 6,
        id: 'SY-2026-006',
        species: 'Scampi',
        typeProduct: 'Easy Peel',
        variety: 'Freshwater',
        grade: '11/15',
        count: '11-15 pcs/lb',
        freezingType: 'IQF',
        treatment: 'Non-Phosphate',
        typeOfMaterial: 'Split & Deveined',
        yield: '58.0%',
        status: 'Pending Review',
        remarks: 'Trial seasonal recovery calculation for EU supermarket order'
      }
    ],

    soakingOperations: [
      {
        sNo: 1,
        id: 'LOT-SK-2026-101',
        arrivalDate: '2026-10-06',
        arrivalLotCode: 'LOT-SK-2026-101',
        productionPlant: 'DFL UNIT-5 (JPT)',
        sourceStation: 'Receiving Bay #2',
        transactionDate: '2026-10-06',
        shift: 'Shift A (Day)',
        startTime: '08:30',
        timePeriod: '45 Mins',
        saltPerKg: '10.0',
        chemicalQuantity: '15.0',
        remarks: 'Pre-chill water maintained at 1.8°C, optimal absorption',
        variety: 'Vannamei (VM)',
        tubNumber: 'Tub-01',
        sourceCount: '31/40',
        inCount: '35',
        inQuantity: '450.0 Kgs',
        outCount: '32',
        outQuantity: '472.5 Kgs',
        status: 'COMPLETED'
      },
      {
        sNo: 2,
        id: 'LOT-SK-2026-102',
        arrivalDate: '2026-10-06',
        arrivalLotCode: 'LOT-SK-2026-102',
        productionPlant: 'DFL UNIT-3 (PSP)',
        sourceStation: 'Dock A Intake',
        transactionDate: '2026-10-06',
        shift: 'Shift A (Day)',
        startTime: '09:15',
        timePeriod: '50 Mins',
        saltPerKg: '12.0',
        chemicalQuantity: '18.5',
        remarks: 'Controlled phosphate soaking for US market compliance',
        variety: 'Black Tiger (BT)',
        tubNumber: 'Tub-04',
        sourceCount: '16/20',
        inCount: '18',
        inQuantity: '620.0 Kgs',
        outCount: '16',
        outQuantity: '651.0 Kgs',
        status: 'COMPLETED'
      },
      {
        sNo: 3,
        id: 'LOT-SK-2026-103',
        arrivalDate: '2026-10-07',
        arrivalLotCode: 'LOT-SK-2026-103',
        productionPlant: 'DFL UNIT-4 (PND)',
        sourceStation: 'Bay #1 Chill',
        transactionDate: '2026-10-07',
        shift: 'Shift B (Evening)',
        startTime: '14:00',
        timePeriod: '30 Mins',
        saltPerKg: '15.0',
        chemicalQuantity: '0.0',
        remarks: 'Chemical-free natural chilled brine soak',
        variety: 'Vannamei (VM)',
        tubNumber: 'Tub-07',
        sourceCount: '21/25',
        inCount: '23',
        inQuantity: '450.0 Kgs',
        outCount: '21',
        outQuantity: '463.5 Kgs',
        status: 'SOAKING'
      },
      {
        sNo: 4,
        id: 'LOT-SK-2026-104',
        arrivalDate: '2026-10-07',
        arrivalLotCode: 'LOT-SK-2026-104',
        productionPlant: 'DFL UNIT-1 (VSP)',
        sourceStation: 'Direct Pier Station',
        transactionDate: '2026-10-07',
        shift: 'Shift A (Day)',
        startTime: '10:00',
        timePeriod: '40 Mins',
        saltPerKg: '9.0',
        chemicalQuantity: '11.0',
        remarks: 'EU compliance blend, organoleptic test passed',
        variety: 'Sea White',
        tubNumber: 'Tub-02',
        sourceCount: '41/50',
        inCount: '45',
        inQuantity: '380.0 Kgs',
        outCount: '42',
        outQuantity: '395.2 Kgs',
        status: 'COMPLETED'
      },
      {
        sNo: 5,
        id: 'LOT-SK-2026-105',
        arrivalDate: '2026-10-07',
        arrivalLotCode: 'LOT-SK-2026-105',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        sourceStation: 'Station #3 Primary',
        transactionDate: '2026-10-07',
        shift: 'Shift B (Evening)',
        startTime: '16:30',
        timePeriod: '45 Mins',
        saltPerKg: '7.5',
        chemicalQuantity: '9.5',
        remarks: 'Scampi delicate tail soak, texture monitored',
        variety: 'Scampi',
        tubNumber: 'Tub-09',
        sourceCount: '11/15',
        inCount: '13',
        inQuantity: '320.0 Kgs',
        outCount: '12',
        outQuantity: '334.4 Kgs',
        status: 'COMPLETED'
      },
      {
        sNo: 6,
        id: 'LOT-SK-2026-106',
        arrivalDate: '2026-10-08',
        arrivalLotCode: 'LOT-SK-2026-106',
        productionPlant: 'DFL UNIT-2 (KKD)',
        sourceStation: 'Inland Bay #4',
        transactionDate: '2026-10-08',
        shift: 'Shift C (Night)',
        startTime: '22:15',
        timePeriod: '35 Mins',
        saltPerKg: '11.0',
        chemicalQuantity: '14.0',
        remarks: 'Night shift processing trial run',
        variety: 'Vannamei (VM)',
        tubNumber: 'Tub-11',
        sourceCount: '31/40',
        inCount: '36',
        inQuantity: '480.0 Kgs',
        outCount: '33',
        outQuantity: '501.6 Kgs',
        status: 'TRANSFERRED'
      }
    ],

    soakingV2Lots: [
      {
        sNo: 1,
        id: 1,
        lot: 'LOT-SK2-001',
        lotCode: 'LOT-SK2-001',
        station: 'Station #1',
        productionPlant: 'DFL UNIT-5 (JPT)',
        rmDate: '2026-10-06',
        date: '2026-10-06',
        type: 'HLSO',
        inQty: '1200.0',
        shift: 'Shift A (Day)',
        tankPitNo: 'Pit #3 (2000L)',
        variety: 'Vannamei (VM)',
        inwardWeight: '1200.0 Kgs',
        chemicalFormulation: 'STPP & Citric Buffer',
        dosingRatio: '2.5%',
        bathTemp: '1.5°C',
        phLevel: '7.2 pH',
        outwardWeight: '1256.4 Kgs',
        netGainPct: '4.7%',
        qcClearance: 'PASSED',
        supervisor: 'S. K. Murthy',
        remarks: 'Automated chiller pump circulation active, zero thermal rise',
        status: 'APPROVED'
      },
      {
        sNo: 2,
        id: 2,
        lot: 'LOT-SK2-002',
        lotCode: 'LOT-SK2-002',
        station: 'Station #2',
        productionPlant: 'DFL UNIT-3 (PSP)',
        rmDate: '2026-10-06',
        date: '2026-10-06',
        type: 'PD',
        inQty: '980.0',
        shift: 'Shift A (Day)',
        tankPitNo: 'Pit #1 (1500L)',
        variety: 'Black Tiger (BT)',
        inwardWeight: '980.0 Kgs',
        chemicalFormulation: 'Non-Phosphate Organic Blend',
        dosingRatio: '3.0%',
        bathTemp: '1.4°C',
        phLevel: '7.0 pH',
        outwardWeight: '1027.0 Kgs',
        netGainPct: '4.8%',
        qcClearance: 'PASSED',
        supervisor: 'B. Subrahmanyam',
        remarks: 'High purity RO water circulation maintained',
        status: 'APPROVED'
      },
      {
        sNo: 3,
        id: 3,
        lot: 'LOT-SK2-003',
        lotCode: 'LOT-SK2-003',
        station: 'Station #3',
        productionPlant: 'DFL UNIT-4 (PND)',
        rmDate: '2026-10-07',
        date: '2026-10-07',
        type: 'PDTO',
        inQty: '850.0',
        shift: 'Shift B (Evening)',
        tankPitNo: 'Pit #2 (1500L)',
        variety: 'Vannamei (VM)',
        inwardWeight: '850.0 Kgs',
        chemicalFormulation: 'STPP Controlled Release',
        dosingRatio: '2.8%',
        bathTemp: '1.8°C',
        phLevel: '7.4 pH',
        outwardWeight: '891.7 Kgs',
        netGainPct: '4.9%',
        qcClearance: 'PASSED',
        supervisor: 'K. Somaraju',
        remarks: 'Texture index test verified on automated shear press',
        status: 'APPROVED'
      },
      {
        sNo: 4,
        id: 4,
        lot: 'LOT-SK2-004',
        lotCode: 'LOT-SK2-004',
        station: 'Station #1',
        productionPlant: 'DFL UNIT-1 (VSP)',
        rmDate: '2026-10-07',
        date: '2026-10-07',
        type: 'HOSO',
        inQty: '1100.0',
        shift: 'Shift A (Day)',
        tankPitNo: 'Pit #4 (2000L)',
        variety: 'Sea White',
        inwardWeight: '1100.0 Kgs',
        chemicalFormulation: 'Citric Acid & Marine Salt',
        dosingRatio: '2.0%',
        bathTemp: '2.1°C',
        phLevel: '6.8 pH',
        outwardWeight: '1142.9 Kgs',
        netGainPct: '3.9%',
        qcClearance: 'PASSED',
        supervisor: 'M. Jagannadham',
        remarks: 'Low sodium formulation cleared for European retailer specs',
        status: 'APPROVED'
      },
      {
        sNo: 5,
        id: 5,
        lot: 'LOT-SK2-005',
        lotCode: 'LOT-SK2-005',
        station: 'Station #4',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        rmDate: '2026-10-07',
        date: '2026-10-07',
        type: 'EZ Peel',
        inQty: '750.0',
        shift: 'Shift C (Night)',
        tankPitNo: 'Pit #1 (1500L)',
        variety: 'Scampi',
        inwardWeight: '750.0 Kgs',
        chemicalFormulation: 'Non-Phosphate Hydration Compound',
        dosingRatio: '2.6%',
        bathTemp: '1.7°C',
        phLevel: '7.1 pH',
        outwardWeight: '784.5 Kgs',
        netGainPct: '4.6%',
        qcClearance: 'PENDING',
        supervisor: 'V. Rajesh',
        remarks: 'Sample drawn for final residual phosphate analysis',
        status: 'IN_PROCESS'
      },
      {
        sNo: 6,
        id: 6,
        lot: 'LOT-SK2-006',
        lotCode: 'LOT-SK2-006',
        station: 'Station #2',
        productionPlant: 'DFL UNIT-2 (KKD)',
        rmDate: '2026-10-08',
        date: '2026-10-08',
        type: 'HLSO',
        inQty: '1350.0',
        shift: 'Shift A (Day)',
        tankPitNo: 'Pit #2 (1500L)',
        variety: 'Vannamei (VM)',
        inwardWeight: '1350.0 Kgs',
        chemicalFormulation: 'STPP & Salt Mix',
        dosingRatio: '2.5%',
        bathTemp: '1.6°C',
        phLevel: '7.3 pH',
        outwardWeight: '1414.8 Kgs',
        netGainPct: '4.8%',
        qcClearance: 'PASSED',
        supervisor: 'T. Nageswara Rao',
        remarks: 'Bath agitation cycle running at 15 RPM',
        status: 'IN_PROCESS'
      },
      {
        sNo: 7,
        id: 7,
        lot: 'LOT-SK2-007',
        lotCode: 'LOT-SK2-007',
        station: 'Station #5',
        productionPlant: 'DFL UNIT-5 (JPT)',
        rmDate: '2026-10-09',
        date: '2026-10-09',
        type: 'PUD',
        inQty: '1050.0',
        shift: 'Shift B (Evening)',
        tankPitNo: 'Pit #3 (2000L)',
        variety: 'Vannamei (VM)',
        inwardWeight: '1050.0 Kgs',
        chemicalFormulation: 'STPP & Citric Buffer',
        dosingRatio: '2.4%',
        bathTemp: '1.6°C',
        phLevel: '7.2 pH',
        outwardWeight: '1098.3 Kgs',
        netGainPct: '4.6%',
        qcClearance: 'PASSED',
        supervisor: 'S. K. Murthy',
        remarks: 'Uniform absorption and weight gain certified',
        status: 'APPROVED'
      },
      {
        sNo: 8,
        id: 8,
        lot: 'LOT-SK2-008',
        lotCode: 'LOT-SK2-008',
        station: 'Station #3',
        productionPlant: 'DFL UNIT-3 (PSP)',
        rmDate: '2026-10-10',
        date: '2026-10-10',
        type: 'PDTO',
        inQty: '920.0',
        shift: 'Shift A (Day)',
        tankPitNo: 'Pit #1 (1500L)',
        variety: 'Black Tiger (BT)',
        inwardWeight: '920.0 Kgs',
        chemicalFormulation: 'Non-Phosphate Organic Blend',
        dosingRatio: '2.8%',
        bathTemp: '1.5°C',
        phLevel: '7.1 pH',
        outwardWeight: '963.2 Kgs',
        netGainPct: '4.7%',
        qcClearance: 'PASSED',
        supervisor: 'B. Subrahmanyam',
        remarks: 'Temperature sensor calibration logged at 08:30 AM',
        status: 'APPROVED'
      }
    ],

    freezingStoreReports: [
      {
        sNo: 1,
        id: 'LOT-FZ-2026-301',
        lotNo: 'LOT-FZ-2026-301',
        batchNo: 'LOT-FZ-2026-301',
        productionDate: '2026-10-06',
        reportDate: '2026-10-06',
        stationName: 'Station #1',
        cartonType: 'Master Cartons',
        poNumber: 'PO-2026-4401',
        variety: 'Vannamei (VM)',
        freezingType: 'IQF',
        group: 'Group A',
        tubNo: 'TUB-101',
        brand: 'Devi Gold',
        count: '31/40',
        noOfCartons: '48',
        mcs: '48',
        grade: '31/40',
        packingStyle: '10x1kg Net',
        netWeight: '480.0 Kgs',
        looseBoxes: '0',
        shift: 'Shift A (Day)',
        category: 'Raw',
        lineNumber: 'Line #1',
        lineRemarks: 'Glaze uniform 8%, exit temp -22.4°C verified by Coldstore intake',
        status: 'STORED'
      },
      {
        sNo: 2,
        id: 'LOT-FZ-2026-302',
        lotNo: 'LOT-FZ-2026-302',
        batchNo: 'LOT-FZ-2026-302',
        productionDate: '2026-10-06',
        reportDate: '2026-10-06',
        stationName: 'Station #2',
        cartonType: 'Master Cartons',
        poNumber: 'PO-2026-4402',
        variety: 'Black Tiger (BT)',
        freezingType: 'Block Frozen',
        group: 'Group B',
        tubNo: 'TUB-204',
        brand: 'Ocean Crown',
        count: '16/20',
        noOfCartons: '60',
        mcs: '60',
        grade: '16/20',
        packingStyle: '6x2kg Block',
        netWeight: '720.0 Kgs',
        looseBoxes: '2',
        shift: 'Shift A (Day)',
        category: 'Raw',
        lineNumber: 'Line #2',
        lineRemarks: 'Solid blocks palletized, stretch wrapped, and chamber stacked',
        status: 'STORED'
      },
      {
        sNo: 3,
        id: 'LOT-FZ-2026-303',
        lotNo: 'LOT-FZ-2026-303',
        batchNo: 'LOT-FZ-2026-303',
        productionDate: '2026-10-07',
        reportDate: '2026-10-07',
        stationName: 'Station #3',
        cartonType: 'Master Cartons',
        poNumber: 'PO-2026-4403',
        variety: 'Vannamei (VM)',
        freezingType: 'IQF',
        group: 'Group A',
        tubNo: 'TUB-115',
        brand: 'Blue Wave',
        count: '21/25',
        noOfCartons: '52',
        mcs: '52',
        grade: '21/25',
        packingStyle: '5x2kg IQF Poly',
        netWeight: '520.0 Kgs',
        looseBoxes: '0',
        shift: 'Shift B (Evening)',
        category: 'Cooked',
        lineNumber: 'Line #3',
        lineRemarks: 'Double-glazed individually quick frozen prawns transferred',
        status: 'TRANSFERRED'
      },
      {
        sNo: 4,
        id: 'LOT-FZ-2026-304',
        lotNo: 'LOT-FZ-2026-304',
        batchNo: 'LOT-FZ-2026-304',
        productionDate: '2026-10-07',
        reportDate: '2026-10-07',
        stationName: 'Station #1',
        cartonType: 'Master Cartons',
        poNumber: 'PO-2026-4404',
        variety: 'Sea White',
        freezingType: 'IQF',
        group: 'Group C',
        tubNo: 'TUB-308',
        brand: 'Sea Pearl',
        count: '41/50',
        noOfCartons: '38',
        mcs: '38',
        grade: '41/50',
        packingStyle: '10x1kg Net',
        netWeight: '380.0 Kgs',
        looseBoxes: '1',
        shift: 'Shift A (Day)',
        category: 'Raw',
        lineNumber: 'Line #1',
        lineRemarks: 'Export grade Seabass fillets packed into master cartons',
        status: 'STORED'
      },
      {
        sNo: 5,
        id: 'LOT-FZ-2026-305',
        lotNo: 'LOT-FZ-2026-305',
        batchNo: 'LOT-FZ-2026-305',
        productionDate: '2026-10-07',
        reportDate: '2026-10-07',
        stationName: 'Station #4',
        cartonType: 'Dummy Cartons',
        poNumber: 'PO-2026-4405',
        variety: 'Scampi',
        freezingType: 'Block Frozen',
        group: 'Group B',
        tubNo: 'TUB-412',
        brand: 'Royal Harvest',
        count: '11/15',
        noOfCartons: '41',
        mcs: '41',
        grade: '11/15',
        packingStyle: '6x2kg Block',
        netWeight: '492.0 Kgs',
        looseBoxes: '0',
        shift: 'Shift C (Night)',
        category: 'Raw',
        lineNumber: 'Line #4',
        lineRemarks: 'Plate freezing completed in 110 minutes, core temperature passed',
        status: 'STORED'
      },
      {
        sNo: 6,
        id: 'LOT-FZ-2026-306',
        lotNo: 'LOT-FZ-2026-306',
        batchNo: 'LOT-FZ-2026-306',
        productionDate: '2026-10-08',
        reportDate: '2026-10-08',
        stationName: 'Station #2',
        cartonType: 'Master Cartons',
        poNumber: 'PO-2026-4406',
        variety: 'Vannamei (VM)',
        freezingType: 'Semi-IQF',
        group: 'Group D',
        tubNo: 'TUB-220',
        brand: 'Devi Gold',
        count: '31/40',
        noOfCartons: '49',
        mcs: '49',
        grade: '31/40',
        packingStyle: '10x2lb Pouch',
        netWeight: '444.5 Kgs',
        looseBoxes: '3',
        shift: 'Shift A (Day)',
        category: 'Blanched',
        lineNumber: 'Line #2',
        lineRemarks: 'Final QA temperature and glaze melt test sample under evaluation',
        status: 'IN_INSPECTION'
      }
    ]
  },

  render(containerId, subPage = 'dashboard', activeHash = '#/production/dashboard/dashboard') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div id="production-tab-bar-container"></div>
      <div id="production-subpage-content"></div>
    `;

    TabBar.render('production-tab-bar-container', activeHash);
    const subContainer = document.getElementById('production-subpage-content');
    if (!subContainer) return;

    if (subPage === 'dashboard' || subPage === 'overview') {
      this.renderProductionDashboard(subContainer);
      return;
    }

    if (subPage === 'soaking-trackid') {
      this.renderSoakingTrackIdScreen(subContainer);
      return;
    }

    if (subPage === 'freezing-trackid') {
      this.renderFreezingTrackIdScreen(subContainer);
      return;
    }

    if (subPage === 'production-standard-yields') {
      this.renderProductionStandardYieldsScreen(subContainer);
      return;
    }

    if (subPage === 'soaking') {
      this.renderSoakingScreen(subContainer);
      return;
    }

    if (subPage === 'soaking-v2') {
      this.renderSoakingV2Screen(subContainer);
      return;
    }

    if (subPage === 'freezing-store') {
      this.renderFreezingStoreScreen(subContainer);
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
  // SUB MENU: DASHBOARD -> PRODUCTION OPERATIONS DASHBOARD
  // =========================================================================
  renderProductionDashboard(container) {
    const totalFloorProd = '42,850';
    const avgYield = '84.8%';
    const tunnelOutput = '28,400';
    const activeBatchesCount = this.state.freezingTrackIds.length + this.state.soakingTrackIds.length;

    // Floor lines data
    const lines = [
      { id: 1, name: 'Line #1 — IQF Tunnel 1', product: 'Vannamei PD IQF 31/40', output: '7,420 Kgs', temp: '-22.5°C', glaze: '10%', status: 'RUNNING', badgeCls: 'bg-[#E3FCEF] text-[#006644]' },
      { id: 2, name: 'Line #2 — IQF Tunnel 2', product: 'Black Tiger HOSO IQF 16/20', output: '6,850 Kgs', temp: '-23.1°C', glaze: '12%', status: 'RUNNING', badgeCls: 'bg-[#E3FCEF] text-[#006644]' },
      { id: 3, name: 'Line #3 — Plate Freezer', product: 'Vannamei HLSO Block 26/30', output: '8,200 Kgs', temp: '-26.0°C', glaze: 'None', status: 'COMPLETED', badgeCls: 'bg-[#DEEBFF] text-[#0747A6]' },
      { id: 4, name: 'Line #4 — Blast Freezer', product: 'Sea Pearl Cooked PDTO', output: '5,930 Kgs', temp: '-24.8°C', glaze: '5%', status: 'STAGED', badgeCls: 'bg-[#FFF0B3] text-[#172B4D]' }
    ];

    // Quick Action modules
    const modules = [
      { title: 'Soaking Track ID', desc: 'Pre-chill parameters, chemical dosing & soaking lot IDs', hash: '#/production/pre-processing/soaking-trackid', count: `${this.state.soakingTrackIds.length} Lots`, color: '#0284C7' },
      { title: 'Freezing Track ID', desc: 'Freezer timer, slab output & floor rejection tracking', hash: '#/production/pre-processing/freezing-trackid', count: `${this.state.freezingTrackIds.length} Runs`, color: '#00875A' },
      { title: 'Standard Yields', desc: 'Enterprise standard yield benchmarks by species & grade', hash: '#/production/operations/production-standard-yields', count: `${this.state.standardYields.length} Targets`, color: '#6554C0' },
      { title: 'Soaking Operations', desc: 'Live tub weights, salt & chemical solution batch logs', hash: '#/production/operations/soaking', count: `${this.state.soakingBatches.length} Batches`, color: '#FFAB00' },
      { title: 'Freezing-Store Intake', desc: 'IQF carton packing reports & coldstore chamber staging', hash: '#/production/operations/freezing-store', count: `${this.state.freezingStoreReports.length} Reports`, color: '#00B8D9' }
    ];

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Header & Live Status -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-1">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] flex items-center gap-2">
              <span>Production Operations Dashboard</span>
            </h1>
            <p class="text-xs text-[#6B778C] mt-0.5">Real-time floor line tracking, tunnel freezing telemetry, soaking batches & yield analytics</p>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3FCEF] text-[#006644] text-xs font-bold border border-[#ABF5D1]">
              <span class="w-2 h-2 rounded-full bg-[#00875A] animate-pulse"></span>
              Shift A (Day) • Floor Running
            </span>
            <span class="px-3 py-1 rounded-full bg-white text-[#172B4D] text-xs font-semibold border border-[#DFE1E6] shadow-2xs">
              Plant: <strong>DFL UNIT-5 (JPT)</strong>
            </span>
          </div>
        </div>

        <!-- 4 Top KPI Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Today's Floor Production</div>
            <div class="text-2xl font-black text-[#172B4D] mt-1.5">${totalFloorProd} <span class="text-xs font-bold text-[#6B778C]">Kgs</span></div>
            <div class="text-[11px] font-semibold text-[#00875A] mt-1">+12.4% vs Shift Target • 4 Active Lines</div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Average Process Yield</div>
            <div class="text-2xl font-black text-[#00875A] mt-1.5">${avgYield}</div>
            <div class="text-[11px] font-semibold text-[#00875A] mt-1">Target: 82.0% • +2.8% Positive Variance</div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Tunnel Freezing Output</div>
            <div class="text-2xl font-black text-[#0284C7] mt-1.5">${tunnelOutput} <span class="text-xs font-bold text-[#6B778C]">Kgs</span></div>
            <div class="text-[11px] font-semibold text-[#5E6C84] mt-1">IQF: 18.2 MT • Plate Block: 10.2 MT</div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Active Batches In-Process</div>
            <div class="text-2xl font-black text-[#6554C0] mt-1.5">${activeBatchesCount} <span class="text-xs font-bold text-[#6B778C]">Batches</span></div>
            <div class="text-[11px] font-semibold text-[#6554C0] mt-1">${this.state.soakingTrackIds.length} Soaking • ${this.state.freezingTrackIds.length} Freezing Runs</div>
          </div>
        </div>

        <!-- 4 Freezing Tunnels & Lines Telemetry Status -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          ${lines.map(line => `
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-xs flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between pb-2 border-b border-[#F4F5F7]">
                  <h4 class="text-xs font-bold text-[#172B4D] truncate">${line.name}</h4>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold ${line.badgeCls}">${line.status}</span>
                </div>
                <div class="mt-2.5 text-xs">
                  <div class="text-[#172B4D] font-semibold truncate">${line.product}</div>
                  <div class="flex items-center justify-between mt-2 text-[11px] text-[#5E6C84]">
                    <span>Output: <strong class="text-[#172B4D]">${line.output}</strong></span>
                    <span>Glaze: <strong class="text-[#172B4D]">${line.glaze}</strong></span>
                  </div>
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-[#F4F5F7] flex items-center justify-between text-xs">
                <span class="text-[11px] font-bold text-[#5E6C84] uppercase">Exit Temp</span>
                <span class="font-mono font-bold text-[#0284C7]">${line.temp}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Quick Navigation / Production Sections -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Production Operations Sections</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            ${modules.map(m => `
              <a href="${m.hash}" class="bg-white border border-[#DFE1E6] hover:border-[#0284C7] rounded-xl p-3.5 shadow-xs transition-all hover:shadow-sm group flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-[#172B4D] group-hover:text-[#0284C7] transition-colors truncate">${m.title}</span>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F4F5F7] text-[#5E6C84]">${m.count}</span>
                  </div>
                  <p class="text-[11px] text-[#6B778C] mt-1.5 leading-snug line-clamp-2">${m.desc}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-[#F4F5F7] text-[11px] font-bold text-[#0284C7] flex items-center justify-between">
                  <span>Open Section</span>
                  <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </div>
              </a>
            `).join('')}
          </div>
        </div>

        <!-- Live Floor Runs & Track Code Registry Table -->
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
          <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
            <div>
              <h3 class="text-sm font-bold text-[#172B4D]">Recent Production Floor Runs & Batches</h3>
              <p class="text-xs text-[#6B778C]">Click any row to open full batch parameters and quality sign-offs</p>
            </div>
          </div>
          <div id="prod-dashboard-table"></div>
        </div>
      </div>
    `;

    // Unified Floor Runs Data
    const runsData = [
      ...this.state.freezingTrackIds.slice(0, 4).map(r => ({
        trackCode: r.trackCode,
        stage: 'Freezing Tunnel',
        plant: r.plant || r.productionPlant || 'DFL UNIT-5 (JPT)',
        variety: r.variety || 'Vannamei (VM)',
        grade: r.grade || '31/40',
        shift: r.shift || 'Shift A (Day)',
        output: `${r.productionSlabs || 400} Slabs (${r.prodWeight || '800.0 Kgs'})`,
        yieldPct: '85.2%',
        status: r.abStatus || 'ACTIVE',
        type: 'freezing',
        raw: r
      })),
      ...this.state.soakingTrackIds.slice(0, 4).map(r => ({
        trackCode: r.trackCode,
        stage: 'Soaking Floor',
        plant: r.plant || r.productionPlant || 'DFL UNIT-5 (JPT)',
        variety: r.variety || 'Vannamei (VM)',
        grade: r.grade || '21/25',
        shift: r.shift || 'Shift A (Day)',
        output: `${r.inQuantity || 1200} Kg In / ${r.outQuantity || 1240} Kg Out`,
        yieldPct: '103.3%',
        status: 'COMPLETED',
        type: 'soaking',
        raw: r
      }))
    ];

    new DataTable({
      containerId: 'prod-dashboard-table',
      searchable: true,
      exportable: true,
      pageSize: 8,
      onRowClick: (row) => {
        if (row.type === 'freezing') {
          this.showFreezingDetails(row.raw);
        } else {
          this.showSoakingDetails(row.raw);
        }
      },
      columns: [
        { key: 'trackCode', label: 'Track Code', sortable: true, render: v => `<span class="font-mono font-bold text-[#0284C7]">${v}</span>` },
        { key: 'stage', label: 'Operation Stage', render: v => `<span class="px-2 py-0.5 rounded text-[10px] font-bold ${v.includes('Freezing') ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#DEEBFF] text-[#0747A6]'}">${v}</span>` },
        { key: 'plant', label: 'Production Plant' },
        { key: 'variety', label: 'Variety' },
        { key: 'grade', label: 'Grade' },
        { key: 'shift', label: 'Shift' },
        { key: 'output', label: 'Output / Throughput', render: v => `<span class="font-mono font-bold text-[#172B4D]">${v}</span>` },
        { key: 'yieldPct', label: 'Yield', render: v => `<span class="font-mono font-bold text-[#00875A]">${v}</span>` },
        { key: 'status', label: 'Status', render: v => `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${v === 'ACTIVE' || v === 'COMPLETED' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${v}</span>` }
      ],
      data: runsData
    });
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
      size: 'xl',
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
      size: 'xl',
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
  // TAB 2: FREEZING TRACK ID SCREEN (UPDATED PER EXACT USER SPECIFICATION)
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

        <!-- Filter Card: Standard Responsive Filter UI with Search Button -->
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
              <label for="fz-filter-trackcode" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE</label>
              <input type="text" id="fz-filter-trackcode" placeholder="e.g. TRK-FZ-2026" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <div>
              <label for="fz-filter-prod-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE</label>
              <input type="date" id="fz-filter-prod-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
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
              <label for="fz-filter-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP</label>
              <select id="fz-filter-group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Groups</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
                <option value="Group C">Group C</option>
              </select>
            </div>

            <div>
              <label for="fz-filter-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY</label>
              <select id="fz-filter-category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Categories</option>
                <option value="Raw Frozen">Raw Frozen</option>
                <option value="Blanched">Blanched</option>
                <option value="Cooked Peeled">Cooked Peeled</option>
                <option value="Value Added">Value Added</option>
              </select>
            </div>

            <div>
              <label for="fz-filter-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE NUMBER</label>
              <select id="fz-filter-line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Lines</option>
                <option value="Line #1">Line #1</option>
                <option value="Line #2">Line #2</option>
                <option value="Line #3">Line #3</option>
                <option value="Line #4">Line #4</option>
              </select>
            </div>

            <div>
              <label for="fz-filter-ab" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">AB STATUS</label>
              <select id="fz-filter-ab" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All AB Statuses</option>
                <option value="TESTED NEGATIVE">TESTED NEGATIVE</option>
                <option value="CLEARED">CLEARED</option>
                <option value="PENDING LAB">PENDING LAB</option>
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
      const code = (document.getElementById('fz-filter-trackcode')?.value || '').trim().toLowerCase();
      const pDate = document.getElementById('fz-filter-prod-date')?.value || '';
      const shift = document.getElementById('fz-filter-shift')?.value || 'ALL';
      const group = document.getElementById('fz-filter-group')?.value || 'ALL';
      const cat = document.getElementById('fz-filter-category')?.value || 'ALL';
      const line = document.getElementById('fz-filter-line')?.value || 'ALL';
      const ab = document.getElementById('fz-filter-ab')?.value || 'ALL';

      const filtered = this.state.freezingTrackIds.filter(row => {
        if (plant !== 'ALL' && row.productionPlant !== plant) return false;
        if (code && !String(row.trackCode || row.trackId || '').toLowerCase().includes(code)) return false;
        if (pDate && row.productionDate !== pDate) return false;
        if (shift !== 'ALL' && row.shift !== shift) return false;
        if (group !== 'ALL' && row.group !== group) return false;
        if (cat !== 'ALL' && row.productCategory !== cat) return false;
        if (line !== 'ALL' && !String(row.lineNumber || row.line || '').includes(line)) return false;
        if (ab !== 'ALL' && row.abStatus !== ab) return false;
        return true;
      });

      renderTable(filtered);
    };

    ['fz-filter-plant', 'fz-filter-shift', 'fz-filter-group', 'fz-filter-category', 'fz-filter-line', 'fz-filter-ab'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    ['fz-filter-trackcode', 'fz-filter-prod-date'].forEach(id => {
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
      if (document.getElementById('fz-filter-trackcode')) document.getElementById('fz-filter-trackcode').value = '';
      if (document.getElementById('fz-filter-prod-date')) document.getElementById('fz-filter-prod-date').value = '';
      if (document.getElementById('fz-filter-shift')) document.getElementById('fz-filter-shift').value = 'ALL';
      if (document.getElementById('fz-filter-group')) document.getElementById('fz-filter-group').value = 'ALL';
      if (document.getElementById('fz-filter-category')) document.getElementById('fz-filter-category').value = 'ALL';
      if (document.getElementById('fz-filter-line')) document.getElementById('fz-filter-line').value = 'ALL';
      if (document.getElementById('fz-filter-ab')) document.getElementById('fz-filter-ab').value = 'ALL';
      renderTable(this.state.freezingTrackIds);
      Toast.show('Filters reset', 'info');
    });

    // DataTable Rendering (Exact 23 Table Columns + Actions, NO eye icon, row-click details)
    const renderTable = (data) => {
      new DataTable({
        containerId: 'freeze-trackid-table-container',
        data: data,
        keyField: 'trackCode',
        tableTitle: 'Freezing Track ID Registry',
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
          // 2. Production Date
          {
            field: 'productionDate',
            header: 'Production Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v ? String(v).split('-').reverse().join('-') : '-'}</span>`
          },
          // 3. Track Code (Clickable)
          {
            field: 'trackCode',
            header: 'Track Code',
            render: (v, row) => `<span class="font-mono font-bold text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap cursor-pointer hover:underline">${this.escape(v || row.trackId || '-')}</span>`
          },
          // 4. Batch Number
          {
            field: 'batchNumber',
            header: 'Batch Number',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 5. SUPC
          {
            field: 'supc',
            header: 'SUPC',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#00A4B7] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 6. Product
          {
            field: 'product',
            header: 'Product',
            render: (v, row) => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${this.escape(v || row.variety || '-')}</span>`
          },
          // 7. Production Plant
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 8. Group
          {
            field: 'group',
            header: 'Group',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 9. Shift
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 10. Start Timer
          {
            field: 'startTimer',
            header: 'Start Timer',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 11. End Timer
          {
            field: 'endTimer',
            header: 'End Timer',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 12. Po Number
          {
            field: 'poNumber',
            header: 'Po Number',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 13. Grade
          {
            field: 'grade',
            header: 'Grade',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 14. Packing Style
          {
            field: 'packingStyle',
            header: 'Packing Style',
            render: (v) => `<span class="text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 15. Packing Type
          {
            field: 'packingType',
            header: 'Packing Type',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 16. Product Category
          {
            field: 'productCategory',
            header: 'Product Category',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 17. Ab Status
          {
            field: 'abStatus',
            header: 'Ab Status',
            render: (v) => {
              const ok = v === 'TESTED NEGATIVE' || v === 'CLEARED';
              return `<span class="px-2 py-0.5 rounded text-[11px] font-bold ${
                ok ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]' : 'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
              } whitespace-nowrap">${this.escape(v || '-')}</span>`;
            }
          },
          // 18. Prod Weight
          {
            field: 'prodWeight',
            header: 'Prod Weight',
            render: (v) => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          // 19. Slabs
          {
            field: 'slabs',
            header: 'Slabs',
            render: (v, row) => `<span class="font-mono font-bold text-[#00875A] whitespace-nowrap">${v || row.productionSlabs || '-'}</span>`
          },
          // 20. Rejection Weight
          {
            field: 'rejectionWeight',
            header: 'Rejection Weight',
            render: (v) => `<span class="font-mono font-semibold text-[#DE350B] whitespace-nowrap">${this.escape(v || '0.0 Kgs')}</span>`
          },
          // 21. Tub No
          {
            field: 'tubNo',
            header: 'Tub No',
            render: (v, row) => `<span class="font-mono text-xs font-semibold text-[#00A4B7] whitespace-nowrap">${this.escape(v || row.tubNumber || '-')}</span>`
          },
          // 22. Line Number
          {
            field: 'lineNumber',
            header: 'Line Number',
            render: (v, row) => `<span class="text-xs font-medium text-[#172B4D] whitespace-nowrap">${this.escape(v || row.line || '-')}</span>`
          },
          // 23. Remarks
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[180px] block" title="${this.escape(v || '')}">${this.escape(v || '-')}</span>`
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

  // =========================================================================
  // GENERATE FREEZING TRACK ID MODAL (EXACT 23 FORM FIELDS)
  // =========================================================================
  showGenerateFreezingModal(container) {
    const nextSeq = this.state.freezingTrackIds.length + 1;
    const defaultTrackCode = `TRK-FZ-2026-${500 + nextSeq}`;
    const today = new Date().toISOString().slice(0, 10);

    Modal.open({
      title: 'Generate Freezing Track ID',
      size: 'xl',
      content: `
        <form id="form-gen-freezing-track" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <!-- 1. PRODUCTION PLANT * -->
          <div>
            <label for="gft-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
            <select id="gft-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
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
            <label for="gft-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
            <input id="gft-arrival-date" name="arrivalDate" type="date" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <!-- 3. TRACK CODE * -->
          <div>
            <label for="gft-trackcode" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE <span class="text-[#DE350B]">*</span></label>
            <input id="gft-trackcode" name="trackCode" type="text" value="${defaultTrackCode}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 4. PRODUCTION DATE * -->
          <div>
            <label for="gft-prod-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE <span class="text-[#DE350B]">*</span></label>
            <input id="gft-prod-date" name="productionDate" type="date" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <!-- 5. TUB NUMBER * -->
          <div>
            <label for="gft-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NUMBER <span class="text-[#DE350B]">*</span></label>
            <input id="gft-tub" name="tubNumber" type="text" value="Tub-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 6. GROUP * -->
          <div>
            <label for="gft-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP <span class="text-[#DE350B]">*</span></label>
            <select id="gft-group" name="group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Group A" selected>Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
            </select>
          </div>

          <!-- 7. SHIFT * -->
          <div>
            <label for="gft-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
            <select id="gft-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Shift A (Day)" selected>Shift A (Day)</option>
              <option value="Shift B (Evening)">Shift B (Evening)</option>
              <option value="Shift C (Night)">Shift C (Night)</option>
            </select>
          </div>

          <!-- 8. START TIMER -->
          <div>
            <label for="gft-start-timer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START TIMER</label>
            <input id="gft-start-timer" name="startTimer" type="text" value="08:00 AM" placeholder="e.g. 08:00 AM" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 9. END TIMER -->
          <div>
            <label for="gft-end-timer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">END TIMER</label>
            <input id="gft-end-timer" name="endTimer" type="text" value="08:50 AM" placeholder="e.g. 08:50 AM" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 10. PO NUMBER -->
          <div>
            <label for="gft-po-number" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NUMBER</label>
            <input id="gft-po-number" name="poNumber" type="text" value="PO-2026-8830" placeholder="e.g. PO-2026-8830" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 11. VARIETY * -->
          <div>
            <label for="gft-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <select id="gft-variety" name="variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Vannamei (VM)" selected>Vannamei (VM)</option>
              <option value="Black Tiger (BT)">Black Tiger (BT)</option>
              <option value="Sea White">Sea White</option>
              <option value="Scampi">Scampi</option>
            </select>
          </div>

          <!-- 12. PACKING TYPE * -->
          <div>
            <label for="gft-pack-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="gft-pack-type" name="packingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="IQF Polybag" selected>IQF Polybag</option>
              <option value="Block Frozen Carton">Block Frozen Carton</option>
              <option value="Pouch Pack">Pouch Pack</option>
              <option value="Bulk Pack">Bulk Pack</option>
            </select>
          </div>

          <!-- 13. PACKING STYLE * -->
          <div>
            <label for="gft-pack-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE <span class="text-[#DE350B]">*</span></label>
            <select id="gft-pack-style" name="packingStyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="10 x 1 Kg Pouch" selected>10 x 1 Kg Pouch</option>
              <option value="6 x 2 Kg Block">6 x 2 Kg Block</option>
              <option value="5 x 2 Kg Block">5 x 2 Kg Block</option>
              <option value="Master Carton 10 Kg">Master Carton 10 Kg</option>
            </select>
          </div>

          <!-- 14. GRADE -->
          <div>
            <label for="gft-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
            <input id="gft-grade" name="grade" type="text" value="31/40" placeholder="e.g. 31/40" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 15. FREEZING TYPE -->
          <div>
            <label for="gft-freeze-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
            <select id="gft-freeze-type" name="freezingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              <option value="IQF Tunnel" selected>IQF Tunnel</option>
              <option value="Plate Freezer (Block Frozen)">Plate Freezer (Block Frozen)</option>
              <option value="Spiral Freezer (IQF)">Spiral Freezer (IQF)</option>
              <option value="Blast Freezer">Blast Freezer</option>
            </select>
          </div>

          <!-- 16. GLAZE(%) -->
          <div>
            <label for="gft-glaze" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GLAZE(%)</label>
            <input id="gft-glaze" name="glazePct" type="text" value="8%" placeholder="e.g. 8%" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 17. TREATMENT -->
          <div>
            <label for="gft-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TREATMENT</label>
            <select id="gft-treatment" name="treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              <option value="Non-Phosphate" selected>Non-Phosphate</option>
              <option value="Food Grade STPP">Food Grade STPP</option>
              <option value="Fresh Raw">Fresh Raw</option>
              <option value="Citric Acid & Salt">Citric Acid & Salt</option>
            </select>
          </div>

          <!-- 18. PRODUCT CATEGORY * -->
          <div>
            <label for="gft-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY <span class="text-[#DE350B]">*</span></label>
            <select id="gft-category" name="productCategory" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Raw Frozen" selected>Raw Frozen</option>
              <option value="Blanched">Blanched</option>
              <option value="Cooked Peeled">Cooked Peeled</option>
              <option value="Value Added">Value Added</option>
            </select>
          </div>

          <!-- 19. AB STATUS * -->
          <div>
            <label for="gft-ab" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">AB STATUS <span class="text-[#DE350B]">*</span></label>
            <select id="gft-ab" name="abStatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="TESTED NEGATIVE" selected>TESTED NEGATIVE</option>
              <option value="CLEARED">CLEARED</option>
              <option value="PENDING LAB">PENDING LAB</option>
            </select>
          </div>

          <!-- 20. LINE NUMBER * -->
          <div>
            <label for="gft-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE NUMBER <span class="text-[#DE350B]">*</span></label>
            <select id="gft-line" name="lineNumber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Line #1" selected>Line #1</option>
              <option value="Line #2">Line #2</option>
              <option value="Line #3">Line #3</option>
              <option value="Line #4">Line #4</option>
            </select>
          </div>

          <!-- 21. PRODUCTION SLABS * -->
          <div>
            <label for="gft-slabs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION SLABS <span class="text-[#DE350B]">*</span></label>
            <input id="gft-slabs" name="productionSlabs" type="number" value="200" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 22. REJECTION WEIGHT -->
          <div>
            <label for="gft-rejection" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REJECTION WEIGHT</label>
            <input id="gft-rejection" name="rejectionWeight" type="text" value="3.0 Kgs" placeholder="e.g. 3.0 Kgs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono text-[#DE350B] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 23. REMARKS -->
          <div class="sm:col-span-2">
            <label for="gft-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input id="gft-remarks" name="remarks" type="text" value="Batch frozen compliant with operational SOP" placeholder="Operational notes, blast times or yield checks" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
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
              message: `Are you sure you want to generate Freezing Track ID "${values.trackCode}" for ${values.productionPlant}?`,
              confirmLabel: 'Confirm & Save',
              type: 'primary',
              onConfirm: () => {
                const slabsNum = Number(values.productionSlabs || 0);
                const newRow = {
                  sNo: this.state.freezingTrackIds.length + 1,
                  id: values.trackCode,
                  trackCode: values.trackCode,
                  trackId: values.trackCode,
                  productionDate: values.productionDate,
                  arrivalDate: values.arrivalDate,
                  batchNumber: `BATCH-FZ-2026-${String(this.state.freezingTrackIds.length + 1).padStart(3, '0')}`,
                  supc: `SUPC-${(values.variety || 'SHRIMP').slice(0, 2).toUpperCase()}-${values.grade || '3140'}-FZ`,
                  product: `${values.variety} ${values.productCategory || 'Frozen'}`,
                  variety: values.variety,
                  productionPlant: values.productionPlant,
                  group: values.group,
                  shift: values.shift,
                  startTimer: values.startTimer || '-',
                  endTimer: values.endTimer || '-',
                  poNumber: values.poNumber || '-',
                  grade: values.grade || '-',
                  packingStyle: values.packingStyle,
                  packingType: values.packingType,
                  productCategory: values.productCategory,
                  abStatus: values.abStatus,
                  prodWeight: `${(slabsNum * 2).toFixed(1)} Kgs`,
                  productionSlabs: slabsNum,
                  slabs: slabsNum,
                  rejectionWeight: values.rejectionWeight || '0.0 Kgs',
                  tubNumber: values.tubNumber,
                  tubNo: values.tubNumber,
                  lineNumber: values.lineNumber,
                  line: values.lineNumber,
                  freezingType: values.freezingType || 'IQF Tunnel',
                  glazePct: values.glazePct || '8%',
                  treatment: values.treatment || 'Non-Phosphate',
                  remarks: values.remarks || 'Standard freezing run completed and recorded',
                  status: 'COMPLETED'
                };

                this.state.freezingTrackIds.unshift(newRow);
                Modal.close();
                this.renderFreezingTrackIdScreen(container);
                Toast.show(`Freezing Track ID ${newRow.trackCode} generated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // EDIT FREEZING TRACK ID MODAL (EXACT 23 FORM FIELDS)
  // =========================================================================
  showEditFreezingModal(row, container) {
    Modal.open({
      title: `Edit Freezing Track ID: ${row.trackCode || row.trackId}`,
      size: 'xl',
      content: `
        <form id="form-edit-freezing-track" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <!-- 1. PRODUCTION PLANT * -->
          <div>
            <label for="eft-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
            <select id="eft-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['DFL UNIT-5 (JPT)', 'DFL UNIT-3 (PSP)', 'DFL UNIT-4 (PND)', 'DFL UNIT-1 (VSP)', 'DFL UNIT-6 (JPT-II)', 'DFL UNIT-2 (KKD)'].map(p => `<option value="${p}" ${p === row.productionPlant ? 'selected' : ''}>${p}</option>`).join('')}
            </select>
          </div>

          <!-- 2. ARRIVAL DATE * -->
          <div>
            <label for="eft-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
            <input id="eft-arrival-date" name="arrivalDate" type="date" value="${row.arrivalDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <!-- 3. TRACK CODE * -->
          <div>
            <label for="eft-trackcode" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE <span class="text-[#DE350B]">*</span></label>
            <input id="eft-trackcode" name="trackCode" type="text" value="${this.escape(row.trackCode || row.trackId || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 4. PRODUCTION DATE * -->
          <div>
            <label for="eft-prod-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE <span class="text-[#DE350B]">*</span></label>
            <input id="eft-prod-date" name="productionDate" type="date" value="${row.productionDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <!-- 5. TUB NUMBER * -->
          <div>
            <label for="eft-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NUMBER <span class="text-[#DE350B]">*</span></label>
            <input id="eft-tub" name="tubNumber" type="text" value="${this.escape(row.tubNumber || row.tubNo || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 6. GROUP * -->
          <div>
            <label for="eft-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP <span class="text-[#DE350B]">*</span></label>
            <select id="eft-group" name="group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Group A', 'Group B', 'Group C'].map(g => `<option value="${g}" ${g === row.group ? 'selected' : ''}>${g}</option>`).join('')}
            </select>
          </div>

          <!-- 7. SHIFT * -->
          <div>
            <label for="eft-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
            <select id="eft-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Shift A (Day)', 'Shift B (Evening)', 'Shift C (Night)'].map(s => `<option value="${s}" ${s === row.shift ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <!-- 8. START TIMER -->
          <div>
            <label for="eft-start-timer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START TIMER</label>
            <input id="eft-start-timer" name="startTimer" type="text" value="${this.escape(row.startTimer || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 9. END TIMER -->
          <div>
            <label for="eft-end-timer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">END TIMER</label>
            <input id="eft-end-timer" name="endTimer" type="text" value="${this.escape(row.endTimer || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 10. PO NUMBER -->
          <div>
            <label for="eft-po-number" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NUMBER</label>
            <input id="eft-po-number" name="poNumber" type="text" value="${this.escape(row.poNumber || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 11. VARIETY * -->
          <div>
            <label for="eft-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <select id="eft-variety" name="variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Vannamei (VM)', 'Black Tiger (BT)', 'Sea White', 'Scampi'].map(v => `<option value="${v}" ${v === row.variety ? 'selected' : ''}>${v}</option>`).join('')}
            </select>
          </div>

          <!-- 12. PACKING TYPE * -->
          <div>
            <label for="eft-pack-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="eft-pack-type" name="packingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['IQF Polybag', 'Block Frozen Carton', 'Pouch Pack', 'Bulk Pack'].map(pt => `<option value="${pt}" ${pt === row.packingType ? 'selected' : ''}>${pt}</option>`).join('')}
            </select>
          </div>

          <!-- 13. PACKING STYLE * -->
          <div>
            <label for="eft-pack-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE <span class="text-[#DE350B]">*</span></label>
            <select id="eft-pack-style" name="packingStyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['10 x 1 Kg Pouch', '6 x 2 Kg Block', '5 x 2 Kg Block', 'Master Carton 10 Kg'].map(ps => `<option value="${ps}" ${ps === row.packingStyle ? 'selected' : ''}>${ps}</option>`).join('')}
            </select>
          </div>

          <!-- 14. GRADE -->
          <div>
            <label for="eft-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
            <input id="eft-grade" name="grade" type="text" value="${this.escape(row.grade || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 15. FREEZING TYPE -->
          <div>
            <label for="eft-freeze-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
            <select id="eft-freeze-type" name="freezingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              ${['IQF Tunnel', 'Plate Freezer (Block Frozen)', 'Spiral Freezer (IQF)', 'Blast Freezer'].map(ft => `<option value="${ft}" ${ft === row.freezingType ? 'selected' : ''}>${ft}</option>`).join('')}
            </select>
          </div>

          <!-- 16. GLAZE(%) -->
          <div>
            <label for="eft-glaze" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GLAZE(%)</label>
            <input id="eft-glaze" name="glazePct" type="text" value="${this.escape(row.glazePct || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 17. TREATMENT -->
          <div>
            <label for="eft-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TREATMENT</label>
            <select id="eft-treatment" name="treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
              ${['Non-Phosphate', 'Food Grade STPP', 'Fresh Raw', 'Citric Acid & Salt'].map(t => `<option value="${t}" ${t === row.treatment ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
          </div>

          <!-- 18. PRODUCT CATEGORY * -->
          <div>
            <label for="eft-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCT CATEGORY <span class="text-[#DE350B]">*</span></label>
            <select id="eft-category" name="productCategory" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Raw Frozen', 'Blanched', 'Cooked Peeled', 'Value Added'].map(c => `<option value="${c}" ${c === row.productCategory ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <!-- 19. AB STATUS * -->
          <div>
            <label for="eft-ab" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">AB STATUS <span class="text-[#DE350B]">*</span></label>
            <select id="eft-ab" name="abStatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['TESTED NEGATIVE', 'CLEARED', 'PENDING LAB'].map(a => `<option value="${a}" ${a === row.abStatus ? 'selected' : ''}>${a}</option>`).join('')}
            </select>
          </div>

          <!-- 20. LINE NUMBER * -->
          <div>
            <label for="eft-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE NUMBER <span class="text-[#DE350B]">*</span></label>
            <select id="eft-line" name="lineNumber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Line #1', 'Line #2', 'Line #3', 'Line #4'].map(l => `<option value="${l}" ${l === (row.lineNumber || row.line) ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
          </div>

          <!-- 21. PRODUCTION SLABS * -->
          <div>
            <label for="eft-slabs" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION SLABS <span class="text-[#DE350B]">*</span></label>
            <input id="eft-slabs" name="productionSlabs" type="number" value="${row.productionSlabs || row.slabs || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <!-- 22. REJECTION WEIGHT -->
          <div>
            <label for="eft-rejection" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REJECTION WEIGHT</label>
            <input id="eft-rejection" name="rejectionWeight" type="text" value="${this.escape(row.rejectionWeight || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono text-[#DE350B] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <!-- 23. REMARKS -->
          <div class="sm:col-span-2">
            <label for="eft-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input id="eft-remarks" name="remarks" type="text" value="${this.escape(row.remarks || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
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
              message: `Save changes for Freezing Track ID ${row.trackCode || row.trackId}?`,
              confirmLabel: 'Save',
              type: 'primary',
              onConfirm: () => {
                const slabsNum = Number(values.productionSlabs || 0);
                Object.assign(row, values, {
                  trackCode: values.trackCode,
                  trackId: values.trackCode,
                  tubNo: values.tubNumber,
                  line: values.lineNumber,
                  slabs: slabsNum,
                  productionSlabs: slabsNum,
                  prodWeight: `${(slabsNum * 2).toFixed(1)} Kgs`,
                  product: `${values.variety} ${values.productCategory || 'Frozen'}`
                });
                Modal.close();
                this.renderFreezingTrackIdScreen(container);
                Toast.show(`Track ID ${row.trackCode || row.trackId} updated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // VIEW FREEZING DETAILS MODAL (POLISHED ERP STYLE)
  // =========================================================================
  showFreezingDetails(row) {
    Modal.open({
      title: `Freezing Track ID Details: ${row.trackCode || row.trackId}`,
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
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${this.escape(row.trackCode || row.trackId)}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${
                    row.status === 'COMPLETED' ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]' :
                    row.status === 'ACTIVE' ? 'bg-[#E0F2FE] text-[#0369A1] border border-[#7DD3FC]' :
                    'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                  }">${this.escape(row.status || 'COMPLETED')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">${this.escape(row.productCategory || 'Raw Frozen')}</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Plant: <strong class="text-[#334155]">${this.escape(row.productionPlant)}</strong></span>
                  <span>&bull;</span>
                  <span>Prod Date: <strong class="text-[#334155]">${this.escape(row.productionDate || '-')}</strong></span>
                  <span>&bull;</span>
                  <span>Line: <strong class="text-[#334155]">${this.escape(row.lineNumber || row.line || '-')}</strong> (${this.escape(row.shift || '-')})</span>
                </p>
              </div>
            </div>

            <!-- Quick Metrics Badges -->
            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Prod Weight</span>
                <span class="font-mono font-extrabold text-xs text-[#172B4D]">${this.escape(row.prodWeight || '-')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Slabs</span>
                <span class="font-mono font-extrabold text-xs text-[#00875A]">${row.slabs || row.productionSlabs || '-'}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Glaze %</span>
                <span class="font-mono font-bold text-xs text-[#0284C7]">${this.escape(row.glazePct || '-')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">AB Status</span>
                <span class="font-mono font-bold text-xs ${
                  row.abStatus === 'TESTED NEGATIVE' || row.abStatus === 'CLEARED' ? 'text-[#166534]' : 'text-[#92400E]'
                }">${this.escape(row.abStatus || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Primary Track & Facility Identification -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Batch &amp; Facility Identification</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Track Code</span>
                <span class="font-mono font-bold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.trackCode || row.trackId)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Batch Number</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.batchNumber || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SUPC</span>
                <span class="font-mono font-semibold text-[#00A4B7] text-xs block mt-0.5">${this.escape(row.supc || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Plant</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.productionPlant)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Date</span>
                <span class="font-medium text-[#172B4D] text-xs block mt-0.5">${this.escape(row.productionDate || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Arrival Date</span>
                <span class="font-medium text-[#172B4D] text-xs block mt-0.5">${this.escape(row.arrivalDate || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Production Operations & Timers -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Production Operations, Lines &amp; Timers</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Line Number</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.lineNumber || row.line || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Tub No</span>
                <span class="font-mono font-semibold text-[#00A4B7] text-xs block mt-0.5">${this.escape(row.tubNo || row.tubNumber || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Group</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.group || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Shift</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.shift || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Start Timer</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${this.escape(row.startTimer || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">End Timer</span>
                <span class="font-mono text-[#172B4D] text-xs block mt-0.5">${this.escape(row.endTimer || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PO Number</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.poNumber || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Product & Freezing Specifications -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Product &amp; Freezing Specifications</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Product / Variety</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.product || row.variety || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Product Category</span>
                <span class="font-semibold text-[#0369A1] text-xs block mt-0.5">${this.escape(row.productCategory || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Grade</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.grade || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Freezing Type</span>
                <span class="font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.freezingType || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Glaze (%)</span>
                <span class="font-mono font-bold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.glazePct || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Treatment</span>
                <span class="font-semibold text-[#00875A] text-xs block mt-0.5">${this.escape(row.treatment || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: Packaging, Yield & Quality Audit -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">4</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Packaging, Yield &amp; Quality Audit</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Packing Type</span>
                <span class="font-semibold text-[#403294] text-xs block mt-0.5">${this.escape(row.packingType || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Packing Style</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.packingStyle || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Slabs</span>
                <span class="font-mono font-extrabold text-[#00875A] text-xs block mt-0.5">${row.slabs || row.productionSlabs || '-'}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Weight</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.prodWeight || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Rejection Weight</span>
                <span class="font-mono font-semibold text-[#DE350B] text-xs block mt-0.5">${this.escape(row.rejectionWeight || '0.0 Kgs')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">AB Status</span>
                <span class="font-semibold text-xs block mt-0.5 ${
                  row.abStatus === 'TESTED NEGATIVE' || row.abStatus === 'CLEARED' ? 'text-[#166534]' : 'text-[#92400E]'
                }">${this.escape(row.abStatus || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 5: Operational Remarks & Notes -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">5</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Operational Remarks &amp; Notes</h4>
            </div>
            <div class="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
              <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Remarks</span>
              <span class="text-[#334155] text-xs font-medium block mt-1">${this.escape(row.remarks || 'Standard freezing run compliant with QA parameters.')}</span>
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
      message: `Are you sure you want to permanently delete Freezing Track ID "${row.trackCode || row.trackId}"? This action cannot be undone.`,
      confirmLabel: 'Delete Record',
      type: 'danger',
      onConfirm: () => {
        const idx = this.state.freezingTrackIds.findIndex(item => (item.trackCode === row.trackCode || item.trackId === row.trackId));
        if (idx !== -1) {
          this.state.freezingTrackIds.splice(idx, 1);
          this.renderFreezingTrackIdScreen(container);
          Toast.show(`Track ID ${row.trackCode || row.trackId} deleted successfully`, 'success');
        }
      }
    });
  },

  // =========================================================================
  // OPERATIONS TAB 1: PRODUCTION STANDARD YIELDS
  // =========================================================================
  renderProductionStandardYieldsScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Production Standard Yields</h1>
          </div>
          <div>
            <button type="button" id="btn-set-std-yield" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Set Standard Yield</span>
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
              <button type="button" id="yields-top-reset-btn" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="yields-top-toggle-btn" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 transform transition-transform duration-200" id="yields-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="yields-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <div>
              <label for="yd-filter-species" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SPECIES</label>
              <select id="yd-filter-species" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Species</option>
                <option value="Vannamei">Vannamei</option>
                <option value="Black Tiger">Black Tiger</option>
                <option value="Asian Seabass">Asian Seabass</option>
                <option value="Scampi">Scampi</option>
              </select>
            </div>

            <div>
              <label for="yd-filter-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <input type="text" id="yd-filter-variety" placeholder="e.g. Aquaculture, Sea Caught" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <div>
              <label for="yd-filter-type-product" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE OF PRODUCT</label>
              <select id="yd-filter-type-product" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Product Types</option>
                <option value="HLSO">HLSO</option>
                <option value="PD">PD</option>
                <option value="PDTO">PDTO</option>
                <option value="HOSO">HOSO</option>
                <option value="Fillet">Fillet</option>
                <option value="Easy Peel">Easy Peel</option>
              </select>
            </div>

            <div>
              <label for="yd-filter-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
              <input type="text" id="yd-filter-grade" placeholder="e.g. 31/40, 26/30, 16/20" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <div>
              <label for="yd-filter-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COUNT</label>
              <input type="text" id="yd-filter-count" placeholder="e.g. 31-40 pcs/lb" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <div>
              <label for="yd-filter-freezing" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
              <select id="yd-filter-freezing" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Freezing Types</option>
                <option value="IQF">IQF</option>
                <option value="Block Frozen">Block Frozen</option>
                <option value="Semi-IQF">Semi-IQF</option>
              </select>
            </div>

            <div>
              <label for="yd-filter-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TREATMENT</label>
              <select id="yd-filter-treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Treatments</option>
                <option value="Non-Phosphate">Non-Phosphate</option>
                <option value="Food Grade STPP">Food Grade STPP</option>
                <option value="Fresh Raw">Fresh Raw (Untreated)</option>
                <option value="Salt Treated">Salt Treated</option>
              </select>
            </div>

            <div>
              <label for="yd-filter-material" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE OF MATERIAL</label>
              <input type="text" id="yd-filter-material" placeholder="e.g. Headless Shell-On" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <div>
              <label for="yd-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label>
              <select id="yd-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Pending Review">Pending Review</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label for="yd-filter-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">KEYWORD SEARCH</label>
              <input type="text" id="yd-filter-search" placeholder="Search any column..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- Search Button Slot -->
            <div class="flex items-end sm:col-span-2">
              <button type="button" id="yields-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- DataTable Container -->
        <div id="yields-table-container"></div>
      </div>
    `;

    document.getElementById('btn-set-std-yield')?.addEventListener('click', () => {
      this.showSetYieldModal(container);
    });

    const toggleBtn = document.getElementById('yields-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('yields-top-filter-body');
      const icon = document.getElementById('yields-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        const isHidden = body.classList.contains('hidden');
        toggleBtn.title = isHidden ? 'Show Filter' : 'Hide Filter';
        icon?.classList.toggle('-rotate-90', isHidden);
      }
    });

    const applyFilters = () => {
      const sp = document.getElementById('yd-filter-species')?.value || 'ALL';
      const tp = document.getElementById('yd-filter-type-product')?.value || 'ALL';
      const varQuery = (document.getElementById('yd-filter-variety')?.value || '').trim().toLowerCase();
      const grQuery = (document.getElementById('yd-filter-grade')?.value || '').trim().toLowerCase();
      const cntQuery = (document.getElementById('yd-filter-count')?.value || '').trim().toLowerCase();
      const fz = document.getElementById('yd-filter-freezing')?.value || 'ALL';
      const trt = document.getElementById('yd-filter-treatment')?.value || 'ALL';
      const matQuery = (document.getElementById('yd-filter-material')?.value || '').trim().toLowerCase();
      const st = document.getElementById('yd-filter-status')?.value || 'ALL';
      const kw = (document.getElementById('yd-filter-search')?.value || '').trim().toLowerCase();

      const filtered = this.state.standardYields.filter(row => {
        const rowProd = row.typeOfProduct || row.typeProduct || '';
        if (sp !== 'ALL' && !String(row.species || '').toLowerCase().includes(sp.toLowerCase())) return false;
        if (tp !== 'ALL' && rowProd !== tp) return false;
        if (varQuery && !String(row.variety || '').toLowerCase().includes(varQuery)) return false;
        if (grQuery && !String(row.grade || '').toLowerCase().includes(grQuery)) return false;
        if (cntQuery && !String(row.count || '').toLowerCase().includes(cntQuery)) return false;
        if (fz !== 'ALL' && row.freezingType !== fz) return false;
        if (trt !== 'ALL' && !String(row.treatment || '').toLowerCase().includes(trt.toLowerCase())) return false;
        if (matQuery && !String(row.typeOfMaterial || '').toLowerCase().includes(matQuery)) return false;
        if (st !== 'ALL' && String(row.status || '').toLowerCase() !== st.toLowerCase()) return false;
        if (kw) {
          const haystack = `${row.species} ${rowProd} ${row.variety} ${row.grade} ${row.count} ${row.freezingType} ${row.treatment} ${row.typeOfMaterial} ${row.yield} ${row.status}`.toLowerCase();
          if (!haystack.includes(kw)) return false;
        }
        return true;
      });

      renderTable(filtered);
    };

    ['yd-filter-species', 'yd-filter-type-product', 'yd-filter-freezing', 'yd-filter-treatment', 'yd-filter-status'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    ['yd-filter-variety', 'yd-filter-grade', 'yd-filter-count', 'yd-filter-material', 'yd-filter-search'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', applyFilters);
      document.getElementById(id)?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyFilters();
        }
      });
    });

    document.getElementById('yields-filter-search-btn')?.addEventListener('click', () => {
      applyFilters();
      Toast.show('Filters applied', 'info');
    });

    document.getElementById('yields-top-reset-btn')?.addEventListener('click', () => {
      if (document.getElementById('yd-filter-species')) document.getElementById('yd-filter-species').value = 'ALL';
      if (document.getElementById('yd-filter-type-product')) document.getElementById('yd-filter-type-product').value = 'ALL';
      if (document.getElementById('yd-filter-variety')) document.getElementById('yd-filter-variety').value = '';
      if (document.getElementById('yd-filter-grade')) document.getElementById('yd-filter-grade').value = '';
      if (document.getElementById('yd-filter-count')) document.getElementById('yd-filter-count').value = '';
      if (document.getElementById('yd-filter-freezing')) document.getElementById('yd-filter-freezing').value = 'ALL';
      if (document.getElementById('yd-filter-treatment')) document.getElementById('yd-filter-treatment').value = 'ALL';
      if (document.getElementById('yd-filter-status')) document.getElementById('yd-filter-status').value = 'ALL';
      if (document.getElementById('yd-filter-material')) document.getElementById('yd-filter-material').value = '';
      if (document.getElementById('yd-filter-search')) document.getElementById('yd-filter-search').value = '';
      renderTable(this.state.standardYields);
      Toast.show('Filters reset', 'info');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'yields-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Production Standard Yields',
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
            field: 'species',
            header: 'Species',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap cursor-pointer hover:underline text-[#0284C7]">${this.escape(v)}</span>`
          },
          {
            field: 'variety',
            header: 'Variety',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'typeOfProduct',
            header: 'Type of Product',
            render: (v, row) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF] whitespace-nowrap">${this.escape(v || row.typeProduct || '')}</span>`
          },
          {
            field: 'grade',
            header: 'Grade',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'count',
            header: 'Count',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'freezingType',
            header: 'Freezing Type',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'treatment',
            header: 'Treatment',
            render: (v) => `<span class="text-xs text-[#334155] whitespace-nowrap font-medium">${this.escape(v || '-')}</span>`
          },
          {
            field: 'typeOfMaterial',
            header: 'Type of Material',
            render: (v) => `<span class="text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'yield',
            header: 'Yield %',
            render: (v) => `<span class="font-mono font-extrabold text-[#00875A] text-xs">${this.escape(v || '0%')}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
              String(v).toUpperCase() === 'ACTIVE' ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]' : 'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
            }">${this.escape(v || 'Active')}</span>`
          }
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: row => this.showEditYieldModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-3.5 h-3.5 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: row => this.deleteYieldRow(row, container)
          }
        ],
        onRowClick: (row) => this.showYieldDetails(row)
      });
    };

    renderTable(this.state.standardYields);
  },

  showSetYieldModal(container) {
    const nextSeq = this.state.standardYields.length + 1;
    const defaultId = `SY-2026-${String(nextSeq).padStart(3, '0')}`;

    Modal.open({
      title: 'Set Production Standard Yield',
      size: 'xl',
      content: `
        <form id="form-set-yield" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="sy-species" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SPECIES <span class="text-[#DE350B]">*</span></label>
            <select id="sy-species" name="species" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Vannamei" selected>Vannamei</option>
              <option value="Black Tiger">Black Tiger</option>
              <option value="Asian Seabass">Asian Seabass</option>
              <option value="Scampi">Scampi</option>
            </select>
          </div>

          <div>
            <label for="sy-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <input id="sy-variety" name="variety" type="text" value="Aquaculture" placeholder="e.g. Aquaculture, Sea Caught" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sy-type-of-product" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE OF PRODUCT <span class="text-[#DE350B]">*</span></label>
            <select id="sy-type-of-product" name="typeOfProduct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="HLSO" selected>HLSO</option>
              <option value="PD">PD</option>
              <option value="PDTO">PDTO</option>
              <option value="HOSO">HOSO</option>
              <option value="Fillet">Fillet</option>
              <option value="Easy Peel">Easy Peel</option>
            </select>
          </div>

          <div>
            <label for="sy-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE <span class="text-[#DE350B]">*</span></label>
            <input id="sy-grade" name="grade" type="text" value="31/40" placeholder="e.g. 31/40, 26/30" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sy-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COUNT <span class="text-[#DE350B]">*</span></label>
            <input id="sy-count" name="count" type="text" value="31-40 pcs/lb" placeholder="e.g. 31-40 pcs/lb" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sy-freezing" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="sy-freezing" name="freezingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="IQF" selected>IQF</option>
              <option value="Block Frozen">Block Frozen</option>
              <option value="Semi-IQF">Semi-IQF</option>
            </select>
          </div>

          <div>
            <label for="sy-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TREATMENT <span class="text-[#DE350B]">*</span></label>
            <select id="sy-treatment" name="treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Non-Phosphate" selected>Non-Phosphate</option>
              <option value="Food Grade STPP">Food Grade STPP</option>
              <option value="Fresh Raw (Untreated)">Fresh Raw (Untreated)</option>
              <option value="Salt Treated">Salt Treated</option>
            </select>
          </div>

          <div>
            <label for="sy-material" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE OF MATERIAL <span class="text-[#DE350B]">*</span></label>
            <input id="sy-material" name="typeOfMaterial" type="text" value="Headless Shell-On" placeholder="e.g. Headless Shell-On" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sy-yield" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YIELD % <span class="text-[#DE350B]">*</span></label>
            <input id="sy-yield" name="yield" type="text" value="66.5%" placeholder="e.g. 66.5%" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sy-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS <span class="text-[#DE350B]">*</span></label>
            <select id="sy-status" name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Active" selected>Active</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Standard',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-set-yield');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));

            Modal.confirm({
              title: 'Confirm Standard Yield',
              message: `Set standard yield of ${values.yield} for ${values.species} (${values.variety})?`,
              confirmLabel: 'Save Standard',
              type: 'primary',
              onConfirm: () => {
                const newRow = {
                  sNo: this.state.standardYields.length + 1,
                  id: defaultId,
                  species: values.species,
                  variety: values.variety,
                  typeOfProduct: values.typeOfProduct,
                  typeProduct: values.typeOfProduct,
                  grade: values.grade,
                  count: values.count,
                  freezingType: values.freezingType,
                  treatment: values.treatment,
                  typeOfMaterial: values.typeOfMaterial,
                  yield: values.yield.includes('%') ? values.yield : `${values.yield}%`,
                  status: values.status,
                  remarks: 'Standard benchmark recorded'
                };

                this.state.standardYields.unshift(newRow);
                Modal.close();
                this.renderProductionStandardYieldsScreen(container);
                Toast.show(`Standard yield for ${newRow.species} (${newRow.variety}) saved successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  showEditYieldModal(row, container) {
    Modal.open({
      title: `Edit Standard Yield: ${row.species} - ${row.variety}`,
      size: 'xl',
      content: `
        <form id="form-edit-yield" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="ey-species" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SPECIES <span class="text-[#DE350B]">*</span></label>
            <select id="ey-species" name="species" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Vannamei', 'Black Tiger', 'Asian Seabass', 'Scampi'].map(s => `<option value="${s}" ${s === row.species ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="ey-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <input id="ey-variety" name="variety" type="text" value="${this.escape(row.variety)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ey-type-of-product" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE OF PRODUCT <span class="text-[#DE350B]">*</span></label>
            <select id="ey-type-of-product" name="typeOfProduct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['HLSO', 'PD', 'PDTO', 'HOSO', 'Fillet', 'Easy Peel'].map(tp => `<option value="${tp}" ${tp === (row.typeOfProduct || row.typeProduct) ? 'selected' : ''}>${tp}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="ey-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE <span class="text-[#DE350B]">*</span></label>
            <input id="ey-grade" name="grade" type="text" value="${this.escape(row.grade)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ey-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COUNT <span class="text-[#DE350B]">*</span></label>
            <input id="ey-count" name="count" type="text" value="${this.escape(row.count)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ey-freezing" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="ey-freezing" name="freezingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['IQF', 'Block Frozen', 'Semi-IQF'].map(fz => `<option value="${fz}" ${fz === row.freezingType ? 'selected' : ''}>${fz}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="ey-treatment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TREATMENT <span class="text-[#DE350B]">*</span></label>
            <select id="ey-treatment" name="treatment" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Non-Phosphate', 'Food Grade STPP', 'Fresh Raw (Untreated)', 'Salt Treated'].map(trt => `<option value="${trt}" ${trt === row.treatment ? 'selected' : ''}>${trt}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="ey-material" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE OF MATERIAL <span class="text-[#DE350B]">*</span></label>
            <input id="ey-material" name="typeOfMaterial" type="text" value="${this.escape(row.typeOfMaterial)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ey-yield" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YIELD % <span class="text-[#DE350B]">*</span></label>
            <input id="ey-yield" name="yield" type="text" value="${this.escape(row.yield)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ey-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS <span class="text-[#DE350B]">*</span></label>
            <select id="ey-status" name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Active', 'Pending Review', 'Inactive'].map(st => `<option value="${st}" ${st === row.status ? 'selected' : ''}>${st}</option>`).join('')}
            </select>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-edit-yield');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));

            Modal.confirm({
              title: 'Confirm Update',
              message: `Save changes for Standard Yield "${row.species} - ${values.variety}"?`,
              confirmLabel: 'Save Changes',
              type: 'primary',
              onConfirm: () => {
                Object.assign(row, values, {
                  typeProduct: values.typeOfProduct,
                  yield: values.yield.includes('%') ? values.yield : `${values.yield}%`
                });
                Modal.close();
                this.renderProductionStandardYieldsScreen(container);
                Toast.show(`Standard yield for ${row.species} (${row.variety}) updated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  showYieldDetails(row) {
    const productType = row.typeOfProduct || row.typeProduct || '-';
    Modal.open({
      title: `Standard Yield: ${row.species} - ${row.variety}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Hero Card -->
          <div class="bg-gradient-to-r from-[#F0FDF4] to-[#F8FAFC] p-4 rounded-xl border border-[#BBF7D0] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00875A] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${this.escape(row.species)} &bull; ${this.escape(row.variety)}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${
                    String(row.status).toUpperCase() === 'ACTIVE' ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]' : 'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                  }">${this.escape(row.status || 'Active')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${this.escape(row.freezingType)}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">${this.escape(row.treatment)}</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Type of Product: <strong class="text-[#334155]">${this.escape(productType)}</strong></span>
                  <span>&bull;</span>
                  <span>Grade: <strong class="text-[#334155]">${this.escape(row.grade)}</strong></span>
                  <span>&bull;</span>
                  <span>Count: <strong class="text-[#334155]">${this.escape(row.count)}</strong></span>
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Standard Yield</span>
                <span class="font-mono font-extrabold text-base text-[#00875A]">${this.escape(row.yield)}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Standard Yield Specifications -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Standard Yield Benchmark Specifications</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">SPECIES</span>
                <span class="font-bold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.species)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">VARIETY</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.variety)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TYPE OF PRODUCT</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(productType)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">GRADE</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.grade)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">COUNT</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.count)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">FREEZING TYPE</span>
                <span class="font-semibold text-[#0369A1] text-xs block mt-0.5">${this.escape(row.freezingType)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TREATMENT</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.treatment)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">TYPE OF MATERIAL</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.typeOfMaterial)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">YIELD %</span>
                <span class="font-mono font-extrabold text-[#00875A] text-xs block mt-0.5">${this.escape(row.yield)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">STATUS</span>
                <span class="font-bold text-xs block mt-0.5">${this.escape(row.status)}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Quality & Compliance Notes -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-2 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Benchmark &amp; Compliance Notes</h4>
            </div>
            <p class="text-xs text-[#334155] leading-relaxed">${this.escape(row.remarks || 'Standard production yield target applied across all processing lines.')}</p>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() }
      ]
    });
  },

  deleteYieldRow(row, container) {
    Modal.confirm({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete Standard Yield for "${row.species} - ${row.variety}"?`,
      confirmLabel: 'Delete Benchmark',
      type: 'danger',
      onConfirm: () => {
        const idx = this.state.standardYields.findIndex(item => item.id === row.id);
        if (idx !== -1) {
          this.state.standardYields.splice(idx, 1);
          this.renderProductionStandardYieldsScreen(container);
          Toast.show(`Standard yield for ${row.species} (${row.typeProduct}) deleted successfully`, 'success');
        }
      }
    });
  },

  // =========================================================================
  // OPERATIONS TAB 2: SOAKING
  // =========================================================================
  renderSoakingScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Soaking Operations Log</h1>
          </div>
          <div>
            <button type="button" id="btn-log-soak-batch" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Log Soaking Batch</span>
            </button>
          </div>
        </div>

        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <div class="inline-flex items-center gap-2">
              <button type="button" id="soak-top-reset-btn" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="soak-top-toggle-btn" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 transform transition-transform duration-200" id="soak-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="soak-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <div>
              <label for="sk-op-arrival-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <input type="date" id="sk-op-arrival-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>

            <div>
              <label for="sk-op-lot-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL/LOT CODE</label>
              <input type="text" id="sk-op-lot-code" placeholder="e.g. LOT-SK-2026" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
            </div>

            <div>
              <label for="sk-op-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="sk-op-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
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
              <label for="sk-op-source-station" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOURCE STATION</label>
              <input type="text" id="sk-op-source-station" placeholder="e.g. Receiving Bay #2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <div>
              <label for="sk-op-tx-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSACTION DATE</label>
              <input type="date" id="sk-op-tx-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>

            <div>
              <label for="sk-op-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT SHIFT</label>
              <select id="sk-op-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Shifts</option>
                <option value="Shift A (Day)">Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <div>
              <label for="sk-op-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <input type="text" id="sk-op-variety" placeholder="e.g. Vannamei, Black Tiger" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <div>
              <label for="sk-op-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NUMBER</label>
              <input type="text" id="sk-op-tub" placeholder="e.g. Tub-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <div>
              <label for="sk-op-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">KEYWORD SEARCH</label>
              <input type="text" id="sk-op-search" placeholder="Search any column..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- Search Button Slot -->
            <div class="flex items-end sm:col-span-3">
              <button type="button" id="soak-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <div id="soaking-op-table-container"></div>
      </div>
    `;

    document.getElementById('btn-log-soak-batch')?.addEventListener('click', () => {
      this.showLogSoakingModal(container);
    });

    const toggleBtn = document.getElementById('soak-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('soak-top-filter-body');
      const icon = document.getElementById('soak-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        const isHidden = body.classList.contains('hidden');
        toggleBtn.title = isHidden ? 'Show Filter' : 'Hide Filter';
        icon?.classList.toggle('-rotate-90', isHidden);
      }
    });

    const applyFilters = () => {
      const arrDate = document.getElementById('sk-op-arrival-date')?.value || '';
      const lotCode = (document.getElementById('sk-op-lot-code')?.value || '').trim().toLowerCase();
      const plant = document.getElementById('sk-op-plant')?.value || 'ALL';
      const station = (document.getElementById('sk-op-source-station')?.value || '').trim().toLowerCase();
      const txDate = document.getElementById('sk-op-tx-date')?.value || '';
      const shift = document.getElementById('sk-op-shift')?.value || 'ALL';
      const varVal = (document.getElementById('sk-op-variety')?.value || '').trim().toLowerCase();
      const tubVal = (document.getElementById('sk-op-tub')?.value || '').trim().toLowerCase();
      const kw = (document.getElementById('sk-op-search')?.value || '').trim().toLowerCase();

      const filtered = this.state.soakingOperations.filter(row => {
        if (arrDate && row.arrivalDate !== arrDate) return false;
        if (lotCode && !String(row.arrivalLotCode || row.soakBatchNo || '').toLowerCase().includes(lotCode)) return false;
        if (plant !== 'ALL' && row.productionPlant !== plant) return false;
        if (station && !String(row.sourceStation || '').toLowerCase().includes(station)) return false;
        if (txDate && row.transactionDate !== txDate) return false;
        if (shift !== 'ALL' && row.shift !== shift) return false;
        if (varVal && !String(row.variety || '').toLowerCase().includes(varVal)) return false;
        if (tubVal && !String(row.tubNumber || '').toLowerCase().includes(tubVal)) return false;
        if (kw) {
          const haystack = `${row.arrivalLotCode || row.soakBatchNo} ${row.productionPlant} ${row.sourceStation} ${row.variety} ${row.tubNumber} ${row.shift} ${row.sourceCount} ${row.inCount} ${row.inQuantity} ${row.outCount} ${row.outQuantity} ${row.remarks}`.toLowerCase();
          if (!haystack.includes(kw)) return false;
        }
        return true;
      });

      renderTable(filtered);
    };

    ['sk-op-plant', 'sk-op-shift'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    ['sk-op-arrival-date', 'sk-op-tx-date'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    ['sk-op-lot-code', 'sk-op-source-station', 'sk-op-variety', 'sk-op-tub', 'sk-op-search'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', applyFilters);
      document.getElementById(id)?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyFilters();
        }
      });
    });

    document.getElementById('soak-filter-search-btn')?.addEventListener('click', () => {
      applyFilters();
      Toast.show('Filters applied', 'info');
    });

    document.getElementById('soak-top-reset-btn')?.addEventListener('click', () => {
      if (document.getElementById('sk-op-arrival-date')) document.getElementById('sk-op-arrival-date').value = '';
      if (document.getElementById('sk-op-lot-code')) document.getElementById('sk-op-lot-code').value = '';
      if (document.getElementById('sk-op-plant')) document.getElementById('sk-op-plant').value = 'ALL';
      if (document.getElementById('sk-op-source-station')) document.getElementById('sk-op-source-station').value = '';
      if (document.getElementById('sk-op-tx-date')) document.getElementById('sk-op-tx-date').value = '';
      if (document.getElementById('sk-op-shift')) document.getElementById('sk-op-shift').value = 'ALL';
      if (document.getElementById('sk-op-variety')) document.getElementById('sk-op-variety').value = '';
      if (document.getElementById('sk-op-tub')) document.getElementById('sk-op-tub').value = '';
      if (document.getElementById('sk-op-search')) document.getElementById('sk-op-search').value = '';
      renderTable(this.state.soakingOperations);
      Toast.show('Filters reset', 'info');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'soaking-op-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Soaking Operations Log',
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
            field: 'arrivalDate',
            header: 'Arrival Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v ? String(v).split('-').reverse().join('-') : '-'}</span>`
          },
          {
            field: 'arrivalLotCode',
            header: 'Arrival/Lot Code',
            render: (v, row) => `<span class="font-mono font-bold text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap cursor-pointer hover:underline">${this.escape(v || row.soakBatchNo || '')}</span>`
          },
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v)}</span>`
          },
          {
            field: 'sourceStation',
            header: 'Source Station',
            render: (v) => `<span class="text-xs text-[#334155] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'transactionDate',
            header: 'Transaction Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v ? String(v).split('-').reverse().join('-') : '-'}</span>`
          },
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'startTime',
            header: 'Start Time',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'timePeriod',
            header: 'Time Period',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'saltPerKg',
            header: 'Salt/KG',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'chemicalQuantity',
            header: 'Chemical Quantity',
            render: (v) => `<span class="font-mono text-xs text-[#0284C7] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'variety',
            header: 'Variety',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'tubNumber',
            header: 'Tub Number',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#00A4B7] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'sourceCount',
            header: 'Source Count',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'inCount',
            header: 'In Count',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'inQuantity',
            header: 'In Quantity',
            render: (v) => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'outCount',
            header: 'Out Count',
            render: (v) => `<span class="font-mono text-xs text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'outQuantity',
            header: 'Out Quantity',
            render: (v) => `<span class="font-mono font-bold text-[#00875A] whitespace-nowrap">${this.escape(v || '-')}</span>`
          }
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: row => this.showEditSoakingOpModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-3.5 h-3.5 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: row => this.deleteSoakingOpRow(row, container)
          }
        ],
        onRowClick: (row) => this.showSoakingOpDetails(row)
      });
    };

    renderTable(this.state.soakingOperations);
  },

  showLogSoakingModal(container) {
    const nextSeq = this.state.soakingOperations.length + 1;
    const defaultBatch = `LOT-SK-2026-${100 + nextSeq}`;
    const today = new Date().toISOString().slice(0, 10);

    Modal.open({
      title: 'Log Soaking Batch',
      size: 'xl',
      content: `
        <form id="form-log-soaking" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="sl-arr-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
            <input id="sl-arr-date" name="arrivalDate" type="date" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <div>
            <label for="sl-lot-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL/LOT CODE <span class="text-[#DE350B]">*</span></label>
            <input id="sl-lot-code" name="arrivalLotCode" type="text" value="${defaultBatch}" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7] focus:outline-none" required />
          </div>

          <div>
            <label for="sl-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
            <select id="sl-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
              <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
              <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
              <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
              <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
            </select>
          </div>

          <div>
            <label for="sl-station" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOURCE STATION <span class="text-[#DE350B]">*</span></label>
            <input id="sl-station" name="sourceStation" type="text" value="Receiving Bay #2" placeholder="e.g. Receiving Bay #2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sl-tx-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSACTION DATE <span class="text-[#DE350B]">*</span></label>
            <input id="sl-tx-date" name="transactionDate" type="date" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <div>
            <label for="sl-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT SHIFT <span class="text-[#DE350B]">*</span></label>
            <select id="sl-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Shift A (Day)" selected>Shift A (Day)</option>
              <option value="Shift B (Evening)">Shift B (Evening)</option>
              <option value="Shift C (Night)">Shift C (Night)</option>
            </select>
          </div>

          <div>
            <label for="sl-time" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START TIME <span class="text-[#DE350B]">*</span></label>
            <input id="sl-time" name="startTime" type="time" value="08:30" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sl-period" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TIME PERIOD <span class="text-[#DE350B]">*</span></label>
            <input id="sl-period" name="timePeriod" type="text" value="45 Mins" placeholder="e.g. 45 Mins" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sl-salt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SALT/KG <span class="text-[#DE350B]">*</span></label>
            <input id="sl-salt" name="saltPerKg" type="number" step="0.1" value="10.0" placeholder="e.g. 10.0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sl-chem-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL QUANTITY <span class="text-[#DE350B]">*</span></label>
            <input id="sl-chem-qty" name="chemicalQuantity" type="number" step="0.1" value="15.0" placeholder="e.g. 15.0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="sl-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
            <input id="sl-variety" name="variety" type="text" value="Vannamei (VM)" placeholder="e.g. Vannamei (VM)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="sl-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NUMBER</label>
            <input id="sl-tub" name="tubNumber" type="text" value="Tub-01" placeholder="e.g. Tub-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="sl-src-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOURCE COUNT</label>
            <input id="sl-src-count" name="sourceCount" type="text" value="31/40" placeholder="e.g. 31/40" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="sl-in-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN COUNT</label>
            <input id="sl-in-count" name="inCount" type="number" value="35" placeholder="e.g. 35" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="sl-in-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN QUANTITY</label>
            <input id="sl-in-qty" name="inQuantity" type="text" value="450.0 Kgs" placeholder="e.g. 450.0 Kgs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="sl-out-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">OUT COUNT</label>
            <input id="sl-out-count" name="outCount" type="number" value="32" placeholder="e.g. 32" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="sl-out-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">OUT QUANTITY</label>
            <input id="sl-out-qty" name="outQuantity" type="text" value="472.5 Kgs" placeholder="e.g. 472.5 Kgs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div class="sm:col-span-3">
            <label for="sl-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input id="sl-remarks" name="remarks" type="text" value="Pre-chill water maintained at 1.8°C, optimal absorption" placeholder="Operational notes..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Log Batch',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-log-soaking');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));

            Modal.confirm({
              title: 'Confirm Soaking Batch Log',
              message: `Log soaking batch "${values.arrivalLotCode}" for ${values.productionPlant}?`,
              confirmLabel: 'Confirm & Log',
              type: 'primary',
              onConfirm: () => {
                const newRow = {
                  sNo: this.state.soakingOperations.length + 1,
                  id: values.arrivalLotCode,
                  arrivalDate: values.arrivalDate,
                  arrivalLotCode: values.arrivalLotCode,
                  soakBatchNo: values.arrivalLotCode,
                  productionPlant: values.productionPlant,
                  sourceStation: values.sourceStation,
                  transactionDate: values.transactionDate,
                  shift: values.shift,
                  startTime: values.startTime,
                  timePeriod: values.timePeriod,
                  saltPerKg: values.saltPerKg,
                  chemicalQuantity: values.chemicalQuantity,
                  remarks: values.remarks || 'Standard soaking operation logged',
                  variety: values.variety || '-',
                  tubNumber: values.tubNumber || '-',
                  sourceCount: values.sourceCount || '-',
                  inCount: values.inCount || '-',
                  inQuantity: values.inQuantity || '-',
                  outCount: values.outCount || '-',
                  outQuantity: values.outQuantity || '-',
                  status: 'COMPLETED'
                };

                this.state.soakingOperations.unshift(newRow);
                Modal.close();
                this.renderSoakingScreen(container);
                Toast.show(`Soaking batch ${newRow.arrivalLotCode} logged successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  showEditSoakingOpModal(row, container) {
    Modal.open({
      title: `Edit Soaking Batch: ${row.arrivalLotCode || row.soakBatchNo}`,
      size: 'xl',
      content: `
        <form id="form-edit-soaking-op" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="esl-arr-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
            <input id="esl-arr-date" name="arrivalDate" type="date" value="${row.arrivalDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <div>
            <label for="esl-lot-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL/LOT CODE <span class="text-[#DE350B]">*</span></label>
            <input id="esl-lot-code" name="arrivalLotCode" type="text" value="${row.arrivalLotCode || row.soakBatchNo || ''}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7] focus:outline-none" required />
          </div>

          <div>
            <label for="esl-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
            <select id="esl-plant" name="productionPlant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['DFL UNIT-5 (JPT)', 'DFL UNIT-3 (PSP)', 'DFL UNIT-4 (PND)', 'DFL UNIT-1 (VSP)', 'DFL UNIT-6 (JPT-II)', 'DFL UNIT-2 (KKD)'].map(p => `<option value="${p}" ${p === row.productionPlant ? 'selected' : ''}>${p}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="esl-station" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOURCE STATION <span class="text-[#DE350B]">*</span></label>
            <input id="esl-station" name="sourceStation" type="text" value="${this.escape(row.sourceStation || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="esl-tx-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSACTION DATE <span class="text-[#DE350B]">*</span></label>
            <input id="esl-tx-date" name="transactionDate" type="date" value="${row.transactionDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <div>
            <label for="esl-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT SHIFT <span class="text-[#DE350B]">*</span></label>
            <select id="esl-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Shift A (Day)', 'Shift B (Evening)', 'Shift C (Night)'].map(s => `<option value="${s}" ${s === row.shift ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="esl-time" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START TIME <span class="text-[#DE350B]">*</span></label>
            <input id="esl-time" name="startTime" type="time" value="${row.startTime || '08:30'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="esl-period" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TIME PERIOD <span class="text-[#DE350B]">*</span></label>
            <input id="esl-period" name="timePeriod" type="text" value="${this.escape(row.timePeriod || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="esl-salt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SALT/KG <span class="text-[#DE350B]">*</span></label>
            <input id="esl-salt" name="saltPerKg" type="number" step="0.1" value="${row.saltPerKg || '10.0'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="esl-chem-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL QUANTITY <span class="text-[#DE350B]">*</span></label>
            <input id="esl-chem-qty" name="chemicalQuantity" type="number" step="0.1" value="${row.chemicalQuantity || '15.0'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="esl-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
            <input id="esl-variety" name="variety" type="text" value="${this.escape(row.variety || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="esl-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NUMBER</label>
            <input id="esl-tub" name="tubNumber" type="text" value="${this.escape(row.tubNumber || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="esl-src-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOURCE COUNT</label>
            <input id="esl-src-count" name="sourceCount" type="text" value="${this.escape(row.sourceCount || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="esl-in-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN COUNT</label>
            <input id="esl-in-count" name="inCount" type="number" value="${row.inCount || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="esl-in-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN QUANTITY</label>
            <input id="esl-in-qty" name="inQuantity" type="text" value="${this.escape(row.inQuantity || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="esl-out-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">OUT COUNT</label>
            <input id="esl-out-count" name="outCount" type="number" value="${row.outCount || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div>
            <label for="esl-out-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">OUT QUANTITY</label>
            <input id="esl-out-qty" name="outQuantity" type="text" value="${this.escape(row.outQuantity || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
          </div>

          <div class="sm:col-span-3">
            <label for="esl-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input id="esl-remarks" name="remarks" type="text" value="${this.escape(row.remarks || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-edit-soaking-op');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));

            Modal.confirm({
              title: 'Confirm Update',
              message: `Save changes for Soaking Batch "${row.arrivalLotCode || row.soakBatchNo}"?`,
              confirmLabel: 'Save Changes',
              type: 'primary',
              onConfirm: () => {
                Object.assign(row, values, {
                  soakBatchNo: values.arrivalLotCode
                });
                Modal.close();
                this.renderSoakingScreen(container);
                Toast.show(`Soaking batch ${row.arrivalLotCode} updated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  showSoakingOpDetails(row) {
    const lotCode = row.arrivalLotCode || row.soakBatchNo || '-';
    Modal.open({
      title: `Soaking Operation Details: ${lotCode}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Hero Card -->
          <div class="bg-gradient-to-r from-[#F0F9FF] to-[#F8FAFC] p-4 rounded-xl border border-[#BAE6FD] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${this.escape(lotCode)}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-[#E0F2FE] text-[#0369A1] border border-[#7DD3FC]">${this.escape(row.shift || 'Shift A')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${this.escape(row.variety || '-')}</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Plant: <strong class="text-[#334155]">${this.escape(row.productionPlant)}</strong></span>
                  <span>&bull;</span>
                  <span>Station: <strong class="text-[#334155]">${this.escape(row.sourceStation || '-')}</strong></span>
                  <span>&bull;</span>
                  <span>Tub: <strong class="text-[#334155]">${this.escape(row.tubNumber || '-')}</strong></span>
                  <span>&bull;</span>
                  <span>Duration: <strong class="text-[#334155]">${this.escape(row.timePeriod || '-')}</strong></span>
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">In Quantity</span>
                <span class="font-mono font-bold text-xs text-[#172B4D]">${this.escape(row.inQuantity || '-')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Out Quantity</span>
                <span class="font-mono font-bold text-xs text-[#00875A]">${this.escape(row.outQuantity || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Detailed Log Parameters -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Batch &amp; Solution Information</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Arrival Date</span>
                <span class="text-[#172B4D] text-xs font-medium block mt-0.5">${this.escape(row.arrivalDate || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Arrival/Lot Code</span>
                <span class="font-mono font-bold text-[#0284C7] text-xs block mt-0.5">${this.escape(lotCode)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Plant</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.productionPlant)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Source Station</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.sourceStation || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Transaction Date</span>
                <span class="text-[#172B4D] text-xs font-medium block mt-0.5">${this.escape(row.transactionDate || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Select Shift</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.shift || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Start Time</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.startTime || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Time Period</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.timePeriod || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Salt/KG</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.saltPerKg || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Chemical Quantity</span>
                <span class="font-mono font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.chemicalQuantity || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Variety</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.variety || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Tub Number</span>
                <span class="font-mono font-semibold text-[#00A4B7] text-xs block mt-0.5">${this.escape(row.tubNumber || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Source Count</span>
                <span class="font-mono text-xs block mt-0.5">${this.escape(row.sourceCount || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">In Count</span>
                <span class="font-mono text-xs block mt-0.5">${this.escape(row.inCount || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">In Quantity</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.inQuantity || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Out Count</span>
                <span class="font-mono text-xs block mt-0.5">${this.escape(row.outCount || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Out Quantity</span>
                <span class="font-mono font-bold text-[#00875A] text-xs block mt-0.5">${this.escape(row.outQuantity || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Remarks -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-2 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Remarks &amp; Operational Notes</h4>
            </div>
            <p class="text-xs text-[#334155] leading-relaxed">${this.escape(row.remarks || 'No remarks recorded.')}</p>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() }
      ]
    });
  },

  deleteSoakingOpRow(row, container) {
    const lotCode = row.arrivalLotCode || row.soakBatchNo || 'Batch';
    Modal.confirm({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete Soaking Batch "${lotCode}"?`,
      confirmLabel: 'Delete Batch',
      type: 'danger',
      onConfirm: () => {
        const idx = this.state.soakingOperations.findIndex(item => (item.arrivalLotCode === lotCode || item.soakBatchNo === lotCode || item.id === row.id));
        if (idx !== -1) {
          this.state.soakingOperations.splice(idx, 1);
          this.renderSoakingScreen(container);
          Toast.show(`Soaking batch ${lotCode} deleted successfully`, 'success');
        }
      }
    });
  },

  // =========================================================================
  // OPERATIONS TAB 3: SOAKING (V2)
  // =========================================================================
  renderSoakingV2Screen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Soaking Lots &amp; Solution Management (V2)</h1>
          </div>
        </div>

        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <div class="inline-flex items-center gap-2">
              <button type="button" id="soakv2-top-reset-btn" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="soakv2-top-toggle-btn" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 transform transition-transform duration-200" id="soakv2-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="soakv2-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <div>
              <label for="sk2-filter-station" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ALL STATIONS</label>
              <select id="sk2-filter-station" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL" selected>All Stations</option>
                <option value="Station #1">Station #1</option>
                <option value="Station #2">Station #2</option>
                <option value="Station #3">Station #3</option>
                <option value="Station #4">Station #4</option>
                <option value="Station #5">Station #5</option>
              </select>
            </div>

            <div>
              <label for="sk2-filter-month" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">OCTOBER</label>
              <select id="sk2-filter-month" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Months</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10" selected>October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div>
              <label for="sk2-filter-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">2026</label>
              <select id="sk2-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Years</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026" selected>2026</option>
                <option value="2027">2027</option>
              </select>
            </div>

            <!-- Search Button Slot -->
            <div class="flex items-end">
              <button type="button" id="soakv2-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <div id="soaking-v2-table-container"></div>
      </div>
    `;

    const toggleBtn = document.getElementById('soakv2-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('soakv2-top-filter-body');
      const icon = document.getElementById('soakv2-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        const isHidden = body.classList.contains('hidden');
        toggleBtn.title = isHidden ? 'Show Filter' : 'Hide Filter';
        icon?.classList.toggle('-rotate-90', isHidden);
      }
    });

    const applyFilters = () => {
      const station = document.getElementById('sk2-filter-station')?.value || 'ALL';
      const month = document.getElementById('sk2-filter-month')?.value || 'ALL';
      const year = document.getElementById('sk2-filter-year')?.value || 'ALL';

      const filtered = this.state.soakingV2Lots.filter(row => {
        if (station !== 'ALL' && row.station !== station) return false;
        const d = row.rmDate || row.date || '';
        if (d) {
          const parts = d.split('-');
          if (parts.length >= 3) {
            const y = parts[0];
            const m = parts[1];
            if (month !== 'ALL' && m !== month) return false;
            if (year !== 'ALL' && y !== year) return false;
          }
        }
        return true;
      });

      renderTable(filtered);
    };

    ['sk2-filter-station', 'sk2-filter-month', 'sk2-filter-year'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });

    document.getElementById('soakv2-filter-search-btn')?.addEventListener('click', () => {
      applyFilters();
      Toast.show('Filters applied', 'info');
    });

    document.getElementById('soakv2-top-reset-btn')?.addEventListener('click', () => {
      if (document.getElementById('sk2-filter-station')) document.getElementById('sk2-filter-station').value = 'ALL';
      if (document.getElementById('sk2-filter-month')) document.getElementById('sk2-filter-month').value = '10';
      if (document.getElementById('sk2-filter-year')) document.getElementById('sk2-filter-year').value = '2026';
      applyFilters();
      Toast.show('Filters reset', 'info');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'soaking-v2-table-container',
        data: data,
        keyField: 'lotCode',
        tableTitle: 'Soaking Lots & Solution Management (V2)',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          {
            field: 'id',
            header: 'ID',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v != null ? v : (idx + 1)}</span>`
          },
          {
            field: 'lot',
            header: 'Lot',
            render: (v, row) => `<span class="font-mono font-bold text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap cursor-pointer hover:underline">${this.escape(v || row.lotCode || '')}</span>`
          },
          {
            field: 'rmDate',
            header: 'Rm Date',
            render: (v, row) => {
              const d = v || row.date || '';
              return `<span class="text-[#172B4D] whitespace-nowrap font-medium">${d ? String(d).split('-').reverse().join('-') : '-'}</span>`;
            }
          },
          {
            field: 'type',
            header: 'Type',
            render: (v, row) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || row.variety || '')}</span>`
          },
          {
            field: 'inQty',
            header: 'In Qty(Kgs)',
            render: (v, row) => `<span class="font-mono font-bold text-[#172B4D] whitespace-nowrap">${this.escape(v || row.inwardWeight || '')}</span>`
          }
        ],
        actions: [
          {
            label: 'Delete',
            icon: `<svg class="w-3.5 h-3.5 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: row => this.deleteSoakingV2Row(row, container)
          }
        ],
        onRowClick: (row) => this.showSoakingV2Details(row)
      });
    };

    applyFilters();
  },

  showEditSoakingV2Modal(row, container) {
    Modal.open({
      title: `Edit Soaking Lot (V2): ${row.lot || row.lotCode}`,
      size: 'lg',
      content: `
        <form id="form-edit-soak-v2" class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label for="esk2-id" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ID</label>
            <input id="esk2-id" name="id" type="text" value="${row.id != null ? row.id : ''}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#5E6C84] focus:outline-none" />
          </div>

          <div>
            <label for="esk2-lot" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOT</label>
            <input id="esk2-lot" name="lot" type="text" value="${this.escape(row.lot || row.lotCode || '')}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7] focus:outline-none" />
          </div>

          <div>
            <label for="esk2-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RM DATE <span class="text-[#DE350B]">*</span></label>
            <input id="esk2-date" name="rmDate" type="date" value="${row.rmDate || row.date || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <div>
            <label for="esk2-station" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATION <span class="text-[#DE350B]">*</span></label>
            <select id="esk2-station" name="station" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Station #1', 'Station #2', 'Station #3', 'Station #4', 'Station #5'].map(s => `<option value="${s}" ${s === row.station ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="esk2-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="esk2-type" name="type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['HLSO', 'PD', 'PDTO', 'HOSO', 'EZ Peel', 'PUD'].map(t => `<option value="${t}" ${t === (row.type || row.variety) ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="esk2-in-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">IN QTY (KGS) <span class="text-[#DE350B]">*</span></label>
            <input id="esk2-in-qty" name="inQty" type="text" value="${this.escape(row.inQty || row.inwardWeight || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="esk2-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS <span class="text-[#DE350B]">*</span></label>
            <select id="esk2-status" name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['APPROVED', 'IN_PROCESS'].map(st => `<option value="${st}" ${st === row.status ? 'selected' : ''}>${st}</option>`).join('')}
            </select>
          </div>

          <div class="sm:col-span-2">
            <label for="esk2-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
            <input id="esk2-remarks" name="remarks" type="text" value="${this.escape(row.remarks || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-edit-soak-v2');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));

            Modal.confirm({
              title: 'Confirm Update',
              message: `Save changes for Soaking Lot "${row.lot || row.lotCode}"?`,
              confirmLabel: 'Save',
              type: 'primary',
              onConfirm: () => {
                row.rmDate = values.rmDate;
                row.date = values.rmDate;
                row.station = values.station;
                row.type = values.type;
                row.variety = values.type;
                row.inQty = values.inQty;
                row.inwardWeight = values.inQty.endsWith('Kgs') ? values.inQty : `${values.inQty} Kgs`;
                row.status = values.status;
                row.remarks = values.remarks;

                Modal.close();
                this.renderSoakingV2Screen(container);
                Toast.show(`Soaking lot ${row.lot || row.lotCode} updated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  showSoakingV2Details(row) {
    Modal.open({
      title: `Soaking Lot (V2) Details: ${row.lot || row.lotCode}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Hero Card -->
          <div class="bg-gradient-to-r from-[#F0FDF4] to-[#F8FAFC] p-4 rounded-xl border border-[#BBF7D0] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00875A] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-bold text-[#5E6C84]">ID: #${this.escape(row.id != null ? row.id : '-')}</span>
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${this.escape(row.lot || row.lotCode)}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${
                    row.status === 'APPROVED' ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]' : 'bg-[#E0F2FE] text-[#0369A1] border border-[#7DD3FC]'
                  }">${this.escape(row.status || 'APPROVED')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]">QC: ${this.escape(row.qcClearance || 'PASSED')}</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Station: <strong class="text-[#334155]">${this.escape(row.station || 'Station #1')}</strong></span>
                  <span>&bull;</span>
                  <span>RM Date: <strong class="text-[#334155]">${this.escape(row.rmDate || row.date)}</strong></span>
                  <span>&bull;</span>
                  <span>Type: <strong class="text-[#0284C7]">${this.escape(row.type || row.variety)}</strong></span>
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">In Qty</span>
                <span class="font-mono font-bold text-xs text-[#172B4D]">${this.escape(row.inQty || row.inwardWeight)}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Outward</span>
                <span class="font-mono font-bold text-xs text-[#0F172A]">${this.escape(row.outwardWeight || '-')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Net Gain</span>
                <span class="font-mono font-extrabold text-sm text-[#00875A]">${this.escape(row.netGainPct || '0%')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Soaking & Station Specifications -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Soaking &amp; Station Specifications</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Station</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.station || 'Station #1')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">RM Date</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.rmDate || row.date)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Product Type</span>
                <span class="font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.type || row.variety)}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">In Qty (Kgs)</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.inQty || row.inwardWeight)}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Chemical Formulation & Physics -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Chemical Dosing &amp; Bath Physics</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Chemical Formulation</span>
                <span class="font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.chemicalFormulation || 'STPP Buffer')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Dosing Ratio (%)</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.dosingRatio || '2.5%')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Chilled Bath Temp</span>
                <span class="font-mono font-bold text-[#00875A] text-xs block mt-0.5">${this.escape(row.bathTemp || '1.5°C')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Solution pH</span>
                <span class="font-mono font-bold text-[#403294] text-xs block mt-0.5">${this.escape(row.phLevel || '7.2 pH')}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Notes & Supervision -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Lot Supervision &amp; Notes</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Plant</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.productionPlant || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Supervisor</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.supervisor || 'Shift Chemist')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Remarks / Notes</span>
                <span class="text-xs text-[#334155] block mt-0.5">${this.escape(row.remarks || 'None')}</span>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() }
      ]
    });
  },

  deleteSoakingV2Row(row, container) {
    Modal.confirm({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete Soaking Lot (V2) "${row.lot || row.lotCode}"?`,
      confirmLabel: 'Delete Lot',
      type: 'danger',
      onConfirm: () => {
        const idx = this.state.soakingV2Lots.findIndex(item => 
          (item.id != null && item.id === row.id) || 
          (item.lot && item.lot === row.lot) || 
          (item.lotCode && item.lotCode === row.lotCode)
        );
        if (idx !== -1) {
          this.state.soakingV2Lots.splice(idx, 1);
          this.renderSoakingV2Screen(container);
          Toast.show(`Soaking lot ${row.lot || row.lotCode} deleted successfully`, 'success');
        }
      }
    });
  },

  // =========================================================================
  // OPERATIONS TAB 4: FREEZING-STORE
  // =========================================================================
  renderFreezingStoreScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Freezing-Store Intake &amp; IQF Report</h1>
          </div>
          <div>
            <button type="button" id="btn-add-iqf-report" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add IQF / Freezing Report</span>
            </button>
          </div>
        </div>

        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <div class="inline-flex items-center gap-2">
              <button type="button" id="fzstore-top-reset-btn" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="fzstore-top-toggle-btn" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 transform transition-transform duration-200" id="fzstore-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="fzstore-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <div>
              <label for="fzs-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE</label>
              <input type="date" id="fzs-filter-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>

            <div>
              <label for="fzs-filter-station" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NAME OF STATION</label>
              <select id="fzs-filter-station" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Stations</option>
                <option value="Station #1">Station #1</option>
                <option value="Station #2">Station #2</option>
                <option value="Station #3">Station #3</option>
                <option value="Station #4">Station #4</option>
                <option value="Station #5">Station #5</option>
              </select>
            </div>

            <div>
              <label for="fzs-filter-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
              <select id="fzs-filter-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Grades</option>
                <option value="11/15">11/15</option>
                <option value="16/20">16/20</option>
                <option value="21/25">21/25</option>
                <option value="26/30">26/30</option>
                <option value="31/40">31/40</option>
                <option value="41/50">41/50</option>
              </select>
            </div>

            <div>
              <label for="fzs-filter-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE</label>
              <select id="fzs-filter-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Freezing Types</option>
                <option value="IQF">IQF</option>
                <option value="Block Frozen">Block Frozen</option>
                <option value="Semi-IQF">Semi-IQF</option>
                <option value="Blast Frozen">Blast Frozen</option>
              </select>
            </div>

            <div>
              <label for="fzs-filter-brand" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BRAND</label>
              <select id="fzs-filter-brand" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Brands</option>
                <option value="Devi Gold">Devi Gold</option>
                <option value="Ocean Crown">Ocean Crown</option>
                <option value="Blue Wave">Blue Wave</option>
                <option value="Sea Pearl">Sea Pearl</option>
                <option value="Royal Harvest">Royal Harvest</option>
              </select>
            </div>

            <div>
              <label for="fzs-filter-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
              <select id="fzs-filter-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Shifts</option>
                <option value="Shift A (Day)">Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <!-- Search Button Slot -->
            <div class="flex items-end sm:col-span-2">
              <button type="button" id="fzstore-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <div id="freezing-store-table-container"></div>
      </div>
    `;

    document.getElementById('btn-add-iqf-report')?.addEventListener('click', () => {
      this.showAddIqfReportModal(container);
    });

    const toggleBtn = document.getElementById('fzstore-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('fzstore-top-filter-body');
      const icon = document.getElementById('fzstore-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        const isHidden = body.classList.contains('hidden');
        toggleBtn.title = isHidden ? 'Show Filter' : 'Hide Filter';
        icon?.classList.toggle('-rotate-90', isHidden);
      }
    });

    const applyFilters = () => {
      const dVal = document.getElementById('fzs-filter-date')?.value || '';
      const station = document.getElementById('fzs-filter-station')?.value || 'ALL';
      const grade = document.getElementById('fzs-filter-grade')?.value || 'ALL';
      const type = document.getElementById('fzs-filter-type')?.value || 'ALL';
      const brand = document.getElementById('fzs-filter-brand')?.value || 'ALL';
      const shift = document.getElementById('fzs-filter-shift')?.value || 'ALL';

      const filtered = this.state.freezingStoreReports.filter(row => {
        if (dVal && (row.productionDate !== dVal && row.reportDate !== dVal)) return false;
        if (station !== 'ALL' && row.stationName !== station) return false;
        if (grade !== 'ALL' && row.grade !== grade) return false;
        if (type !== 'ALL' && row.freezingType !== type) return false;
        if (brand !== 'ALL' && row.brand !== brand) return false;
        if (shift !== 'ALL' && row.shift !== shift) return false;
        return true;
      });

      renderTable(filtered);
    };

    ['fzs-filter-station', 'fzs-filter-grade', 'fzs-filter-type', 'fzs-filter-brand', 'fzs-filter-shift'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', applyFilters);
    });
    document.getElementById('fzs-filter-date')?.addEventListener('input', applyFilters);

    document.getElementById('fzstore-filter-search-btn')?.addEventListener('click', () => {
      applyFilters();
      Toast.show('Filters applied', 'info');
    });

    document.getElementById('fzstore-top-reset-btn')?.addEventListener('click', () => {
      if (document.getElementById('fzs-filter-date')) document.getElementById('fzs-filter-date').value = '';
      if (document.getElementById('fzs-filter-station')) document.getElementById('fzs-filter-station').value = 'ALL';
      if (document.getElementById('fzs-filter-grade')) document.getElementById('fzs-filter-grade').value = 'ALL';
      if (document.getElementById('fzs-filter-type')) document.getElementById('fzs-filter-type').value = 'ALL';
      if (document.getElementById('fzs-filter-brand')) document.getElementById('fzs-filter-brand').value = 'ALL';
      if (document.getElementById('fzs-filter-shift')) document.getElementById('fzs-filter-shift').value = 'ALL';
      renderTable(this.state.freezingStoreReports);
      Toast.show('Filters reset', 'info');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'freezing-store-table-container',
        data: data,
        keyField: 'lotNo',
        tableTitle: 'Freezing-Store Intake & IQF Report',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actionsTitle: 'Options',
        columns: [
          {
            field: 'lotNo',
            header: 'Lot No',
            render: (v, row) => `<span class="font-mono font-bold text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap cursor-pointer hover:underline">${this.escape(v || row.batchNo || '')}</span>`
          },
          {
            field: 'grade',
            header: 'Grade',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'freezingType',
            header: 'Freezing Type',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'packingStyle',
            header: 'Packing Style',
            render: (v) => `<span class="text-xs text-[#334155] whitespace-nowrap font-medium">${this.escape(v || '-')}</span>`
          },
          {
            field: 'productionDate',
            header: 'Date',
            render: (v, row) => {
              const d = v || row.reportDate || '';
              return `<span class="text-[#172B4D] whitespace-nowrap font-medium">${d ? String(d).split('-').reverse().join('-') : '-'}</span>`;
            }
          },
          {
            field: 'brand',
            header: 'Brand',
            render: (v) => `<span class="font-semibold text-[#0284C7] whitespace-nowrap">${this.escape(v || '-')}</span>`
          },
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="text-xs text-[#5E6C84] whitespace-nowrap font-medium">${this.escape(v || '-')}</span>`
          },
          {
            field: 'mcs',
            header: 'MCS',
            render: (v, row) => `<span class="font-mono font-bold text-[#00875A] whitespace-nowrap">${this.escape(v || row.noOfCartons || '-')} MCS</span>`
          }
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: row => this.showEditIqfReportModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-3.5 h-3.5 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: row => this.deleteFreezingStoreRow(row, container)
          }
        ],
        onRowClick: (row) => this.showFreezingStoreDetails(row)
      });
    };

    renderTable(this.state.freezingStoreReports);
  },

  showAddIqfReportModal(container) {
    const nextSeq = this.state.freezingStoreReports.length + 1;
    const defaultLot = `LOT-FZ-2026-${300 + nextSeq}`;
    const today = new Date().toISOString().slice(0, 10);

    Modal.open({
      title: 'Add IQF / Freezing Report',
      size: 'xl',
      content: `
        <form id="form-add-iqf-report" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="ir-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE <span class="text-[#DE350B]">*</span></label>
            <input id="ir-date" name="productionDate" type="date" value="${today}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <div>
            <label for="ir-station" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NAME OF STATION <span class="text-[#DE350B]">*</span></label>
            <select id="ir-station" name="stationName" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Station #1" selected>Station #1</option>
              <option value="Station #2">Station #2</option>
              <option value="Station #3">Station #3</option>
              <option value="Station #4">Station #4</option>
              <option value="Station #5">Station #5</option>
            </select>
          </div>

          <div>
            <label for="ir-carton-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DUMMY/MASTER CARTONS <span class="text-[#DE350B]">*</span></label>
            <select id="ir-carton-type" name="cartonType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Master Cartons" selected>Master Cartons</option>
              <option value="Dummy Cartons">Dummy Cartons</option>
            </select>
          </div>

          <div>
            <label for="ir-po" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NUMBER <span class="text-[#DE350B]">*</span></label>
            <input id="ir-po" name="poNumber" type="text" value="PO-2026-${4400 + nextSeq}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ir-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <select id="ir-variety" name="variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Vannamei (VM)" selected>Vannamei (VM)</option>
              <option value="Black Tiger (BT)">Black Tiger (BT)</option>
              <option value="Sea White">Sea White</option>
              <option value="Scampi">Scampi</option>
            </select>
          </div>

          <div>
            <label for="ir-freezing-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="ir-freezing-type" name="freezingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="IQF" selected>IQF</option>
              <option value="Block Frozen">Block Frozen</option>
              <option value="Semi-IQF">Semi-IQF</option>
              <option value="Blast Frozen">Blast Frozen</option>
            </select>
          </div>

          <div>
            <label for="ir-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP <span class="text-[#DE350B]">*</span></label>
            <select id="ir-group" name="group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Group A" selected>Group A</option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
              <option value="Group D">Group D</option>
            </select>
          </div>

          <div>
            <label for="ir-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NO <span class="text-[#DE350B]">*</span></label>
            <input id="ir-tub" name="tubNo" type="text" value="TUB-${100 + nextSeq}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ir-brand" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BRAND <span class="text-[#DE350B]">*</span></label>
            <select id="ir-brand" name="brand" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Devi Gold" selected>Devi Gold</option>
              <option value="Ocean Crown">Ocean Crown</option>
              <option value="Blue Wave">Blue Wave</option>
              <option value="Sea Pearl">Sea Pearl</option>
              <option value="Royal Harvest">Royal Harvest</option>
            </select>
          </div>

          <div>
            <label for="ir-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COUNT <span class="text-[#DE350B]">*</span></label>
            <input id="ir-count" name="count" type="text" value="31/40" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ir-cartons" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NO.OF.CARTONS <span class="text-[#DE350B]">*</span></label>
            <input id="ir-cartons" name="noOfCartons" type="number" min="1" value="48" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ir-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE <span class="text-[#DE350B]">*</span></label>
            <select id="ir-grade" name="grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="11/15">11/15</option>
              <option value="16/20">16/20</option>
              <option value="21/25">21/25</option>
              <option value="26/30">26/30</option>
              <option value="31/40" selected>31/40</option>
              <option value="41/50">41/50</option>
            </select>
          </div>

          <div>
            <label for="ir-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE <span class="text-[#DE350B]">*</span></label>
            <select id="ir-style" name="packingStyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="10x1kg Net" selected>10x1kg Net</option>
              <option value="6x2kg Block">6x2kg Block</option>
              <option value="5x2kg IQF Poly">5x2kg IQF Poly</option>
              <option value="10x2lb Pouch">10x2lb Pouch</option>
            </select>
          </div>

          <div>
            <label for="ir-net-wt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NET WEIGHT <span class="text-[#DE350B]">*</span></label>
            <input id="ir-net-wt" name="netWeight" type="text" value="480.0 Kgs" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ir-loose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOOSE BOXES <span class="text-[#DE350B]">*</span></label>
            <input id="ir-loose" name="looseBoxes" type="number" min="0" value="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="ir-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
            <select id="ir-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Shift A (Day)" selected>Shift A (Day)</option>
              <option value="Shift B (Evening)">Shift B (Evening)</option>
              <option value="Shift C (Night)">Shift C (Night)</option>
            </select>
          </div>

          <div>
            <label for="ir-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CATEGORY <span class="text-[#DE350B]">*</span></label>
            <select id="ir-category" name="category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Raw" selected>Raw</option>
              <option value="Cooked">Cooked</option>
              <option value="Blanched">Blanched</option>
              <option value="Breaded">Breaded</option>
            </select>
          </div>

          <div>
            <label for="ir-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE NUMBER <span class="text-[#DE350B]">*</span></label>
            <select id="ir-line" name="lineNumber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              <option value="Line #1" selected>Line #1</option>
              <option value="Line #2">Line #2</option>
              <option value="Line #3">Line #3</option>
              <option value="Line #4">Line #4</option>
            </select>
          </div>

          <div class="sm:col-span-2 md:col-span-3 lg:col-span-4">
            <label for="ir-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE REMARKS</label>
            <input id="ir-remarks" name="lineRemarks" type="text" value="Glaze uniform, exit temp compliant, transferred to chamber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Submit Report',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-add-iqf-report');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));

            Modal.confirm({
              title: 'Confirm IQF / Freezing Report',
              message: `Submit IQF Freezing Report for Lot "${defaultLot}" (${values.brand} - ${values.grade})?`,
              confirmLabel: 'Confirm & Submit',
              type: 'primary',
              onConfirm: () => {
                const newRow = {
                  sNo: this.state.freezingStoreReports.length + 1,
                  id: defaultLot,
                  lotNo: defaultLot,
                  batchNo: defaultLot,
                  productionDate: values.productionDate,
                  reportDate: values.productionDate,
                  stationName: values.stationName,
                  cartonType: values.cartonType,
                  poNumber: values.poNumber,
                  variety: values.variety,
                  freezingType: values.freezingType,
                  group: values.group,
                  tubNo: values.tubNo,
                  brand: values.brand,
                  count: values.count,
                  noOfCartons: values.noOfCartons,
                  mcs: values.noOfCartons,
                  grade: values.grade,
                  packingStyle: values.packingStyle,
                  netWeight: values.netWeight,
                  looseBoxes: values.looseBoxes,
                  shift: values.shift,
                  category: values.category,
                  lineNumber: values.lineNumber,
                  lineRemarks: values.lineRemarks || 'Standard IQF freezing report filed',
                  status: 'STORED'
                };

                this.state.freezingStoreReports.unshift(newRow);
                Modal.close();
                this.renderFreezingStoreScreen(container);
                Toast.show(`IQF report for lot ${newRow.lotNo} created successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  showEditIqfReportModal(row, container) {
    Modal.open({
      title: `Edit IQF Freezing Report: ${row.lotNo || row.batchNo}`,
      size: 'xl',
      content: `
        <form id="form-edit-iqf-report" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label for="eir-lot" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOT NO</label>
            <input id="eir-lot" name="lotNo" type="text" value="${row.lotNo || row.batchNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7] focus:outline-none" />
          </div>

          <div>
            <label for="eir-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION DATE <span class="text-[#DE350B]">*</span></label>
            <input id="eir-date" name="productionDate" type="date" value="${row.productionDate || row.reportDate || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
          </div>

          <div>
            <label for="eir-station" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NAME OF STATION <span class="text-[#DE350B]">*</span></label>
            <select id="eir-station" name="stationName" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Station #1', 'Station #2', 'Station #3', 'Station #4', 'Station #5'].map(s => `<option value="${s}" ${s === row.stationName ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-carton-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DUMMY/MASTER CARTONS <span class="text-[#DE350B]">*</span></label>
            <select id="eir-carton-type" name="cartonType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Master Cartons', 'Dummy Cartons'].map(c => `<option value="${c}" ${c === row.cartonType ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-po" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NUMBER <span class="text-[#DE350B]">*</span></label>
            <input id="eir-po" name="poNumber" type="text" value="${this.escape(row.poNumber || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="eir-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
            <select id="eir-variety" name="variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Vannamei (VM)', 'Black Tiger (BT)', 'Sea White', 'Scampi'].map(v => `<option value="${v}" ${v === row.variety ? 'selected' : ''}>${v}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-freezing-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FREEZING TYPE <span class="text-[#DE350B]">*</span></label>
            <select id="eir-freezing-type" name="freezingType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['IQF', 'Block Frozen', 'Semi-IQF', 'Blast Frozen'].map(ft => `<option value="${ft}" ${ft === row.freezingType ? 'selected' : ''}>${ft}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-group" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GROUP <span class="text-[#DE350B]">*</span></label>
            <select id="eir-group" name="group" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Group A', 'Group B', 'Group C', 'Group D'].map(g => `<option value="${g}" ${g === row.group ? 'selected' : ''}>${g}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-tub" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TUB NO <span class="text-[#DE350B]">*</span></label>
            <input id="eir-tub" name="tubNo" type="text" value="${this.escape(row.tubNo || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="eir-brand" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BRAND <span class="text-[#DE350B]">*</span></label>
            <select id="eir-brand" name="brand" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Devi Gold', 'Ocean Crown', 'Blue Wave', 'Sea Pearl', 'Royal Harvest'].map(b => `<option value="${b}" ${b === row.brand ? 'selected' : ''}>${b}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COUNT <span class="text-[#DE350B]">*</span></label>
            <input id="eir-count" name="count" type="text" value="${this.escape(row.count || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="eir-cartons" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NO.OF.CARTONS <span class="text-[#DE350B]">*</span></label>
            <input id="eir-cartons" name="noOfCartons" type="number" min="1" value="${row.noOfCartons || row.mcs || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="eir-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE <span class="text-[#DE350B]">*</span></label>
            <select id="eir-grade" name="grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['11/15', '16/20', '21/25', '26/30', '31/40', '41/50'].map(gr => `<option value="${gr}" ${gr === row.grade ? 'selected' : ''}>${gr}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PACKING STYLE <span class="text-[#DE350B]">*</span></label>
            <select id="eir-style" name="packingStyle" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['10x1kg Net', '6x2kg Block', '5x2kg IQF Poly', '10x2lb Pouch'].map(ps => `<option value="${ps}" ${ps === row.packingStyle ? 'selected' : ''}>${ps}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-net-wt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">NET WEIGHT <span class="text-[#DE350B]">*</span></label>
            <input id="eir-net-wt" name="netWeight" type="text" value="${this.escape(row.netWeight || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="eir-loose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOOSE BOXES <span class="text-[#DE350B]">*</span></label>
            <input id="eir-loose" name="looseBoxes" type="number" min="0" value="${row.looseBoxes != null ? row.looseBoxes : '0'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" required />
          </div>

          <div>
            <label for="eir-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
            <select id="eir-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Shift A (Day)', 'Shift B (Evening)', 'Shift C (Night)'].map(sh => `<option value="${sh}" ${sh === row.shift ? 'selected' : ''}>${sh}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-category" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CATEGORY <span class="text-[#DE350B]">*</span></label>
            <select id="eir-category" name="category" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Raw', 'Cooked', 'Blanched', 'Breaded'].map(cat => `<option value="${cat}" ${cat === row.category ? 'selected' : ''}>${cat}</option>`).join('')}
            </select>
          </div>

          <div>
            <label for="eir-line" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE NUMBER <span class="text-[#DE350B]">*</span></label>
            <select id="eir-line" name="lineNumber" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
              ${['Line #1', 'Line #2', 'Line #3', 'Line #4'].map(ln => `<option value="${ln}" ${ln === row.lineNumber ? 'selected' : ''}>${ln}</option>`).join('')}
            </select>
          </div>

          <div class="sm:col-span-2 md:col-span-3 lg:col-span-4">
            <label for="eir-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LINE REMARKS</label>
            <input id="eir-remarks" name="lineRemarks" type="text" value="${this.escape(row.lineRemarks || '')}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-edit-iqf-report');
            if (!form || !form.reportValidity()) return;
            const values = Object.fromEntries(new FormData(form));

            Modal.confirm({
              title: 'Confirm Update',
              message: `Save changes for IQF Report "${row.lotNo || row.batchNo}"?`,
              confirmLabel: 'Save',
              type: 'primary',
              onConfirm: () => {
                row.productionDate = values.productionDate;
                row.reportDate = values.productionDate;
                row.stationName = values.stationName;
                row.cartonType = values.cartonType;
                row.poNumber = values.poNumber;
                row.variety = values.variety;
                row.freezingType = values.freezingType;
                row.group = values.group;
                row.tubNo = values.tubNo;
                row.brand = values.brand;
                row.count = values.count;
                row.noOfCartons = values.noOfCartons;
                row.mcs = values.noOfCartons;
                row.grade = values.grade;
                row.packingStyle = values.packingStyle;
                row.netWeight = values.netWeight;
                row.looseBoxes = values.looseBoxes;
                row.shift = values.shift;
                row.category = values.category;
                row.lineNumber = values.lineNumber;
                row.lineRemarks = values.lineRemarks;

                Modal.close();
                this.renderFreezingStoreScreen(container);
                Toast.show(`IQF report for lot ${row.lotNo || row.batchNo} updated successfully`, 'success');
              }
            });
          }
        }
      ]
    });
  },

  showFreezingStoreDetails(row) {
    Modal.open({
      title: `Freezing-Store Intake Details: ${row.lotNo || row.batchNo}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Hero Card -->
          <div class="bg-gradient-to-r from-[#F0FDF4] to-[#F8FAFC] p-4 rounded-xl border border-[#BBF7D0] flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#00875A] text-white flex items-center justify-center font-bold shadow-xs">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-mono font-extrabold text-[#0F172A] text-base">${this.escape(row.lotNo || row.batchNo)}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${
                    row.status === 'STORED' ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]' :
                    row.status === 'TRANSFERRED' ? 'bg-[#E0F2FE] text-[#0369A1] border border-[#7DD3FC]' :
                    'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                  }">${this.escape(row.status || 'STORED')}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF]">${this.escape(row.brand || 'Brand')}</span>
                </div>
                <p class="text-[11px] text-[#64748B] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap">
                  <span>Station: <strong class="text-[#334155]">${this.escape(row.stationName || 'Station #1')}</strong></span>
                  <span>&bull;</span>
                  <span>Date: <strong class="text-[#334155]">${this.escape(row.productionDate || row.reportDate || '-')}</strong></span>
                  <span>&bull;</span>
                  <span>Line: <strong class="text-[#334155]">${this.escape(row.lineNumber || 'Line #1')}</strong> (${this.escape(row.shift || '-')})</span>
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">MCS / Cartons</span>
                <span class="font-mono font-extrabold text-sm text-[#00875A]">${this.escape(row.mcs || row.noOfCartons || '-')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Grade</span>
                <span class="font-mono font-bold text-xs text-[#0284C7]">${this.escape(row.grade || '-')}</span>
              </div>
              <div class="bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs text-center">
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Net Wt</span>
                <span class="font-mono font-bold text-xs text-[#0F172A]">${this.escape(row.netWeight || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Production & Station Information -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">1</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Production &amp; Station Allocation</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Production Date</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.productionDate || row.reportDate || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Name of Station</span>
                <span class="font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.stationName || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Line Number</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.lineNumber || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Shift</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.shift || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Group</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.group || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Tub No</span>
                <span class="font-mono font-semibold text-[#00875A] text-xs block mt-0.5">${this.escape(row.tubNo || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Product & Packaging Specifications -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">2</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Product &amp; Packaging Specifications</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Variety</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.variety || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Category</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.category || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Freezing Type</span>
                <span class="font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.freezingType || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Grade</span>
                <span class="font-bold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.grade || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Count</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.count || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Brand</span>
                <span class="font-semibold text-[#0284C7] text-xs block mt-0.5">${this.escape(row.brand || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Packing Style</span>
                <span class="text-xs text-[#334155] block mt-0.5">${this.escape(row.packingStyle || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Dummy / Master Cartons</span>
                <span class="font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.cartonType || 'Master Cartons')}</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Quantity & Weights -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">3</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Quantity &amp; Weight Breakdown</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">No. of Cartons (MCS)</span>
                <span class="font-mono font-bold text-[#00875A] text-xs block mt-0.5">${this.escape(row.noOfCartons || row.mcs || '-')} MCS</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Loose Boxes</span>
                <span class="font-mono font-semibold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.looseBoxes != null ? row.looseBoxes : '0')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Net Weight</span>
                <span class="font-mono font-bold text-[#172B4D] text-xs block mt-0.5">${this.escape(row.netWeight || '-')}</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">PO Number</span>
                <span class="font-mono text-xs font-semibold text-[#403294] block mt-0.5">${this.escape(row.poNumber || '-')}</span>
              </div>
            </div>
          </div>

          <!-- Section 4: Line Remarks -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs">
            <div class="flex items-center gap-2 pb-2 mb-2 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-xs">4</span>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Line Remarks</h4>
            </div>
            <p class="text-xs text-[#334155] leading-relaxed">${this.escape(row.lineRemarks || 'No remarks recorded for this freezing intake lot.')}</p>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() }
      ]
    });
  },

  deleteFreezingStoreRow(row, container) {
    Modal.confirm({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete IQF Freezing Report for Lot "${row.lotNo || row.batchNo}"?`,
      confirmLabel: 'Delete Report',
      type: 'danger',
      onConfirm: () => {
        const idx = this.state.freezingStoreReports.findIndex(item => 
          (item.lotNo && item.lotNo === (row.lotNo || row.batchNo)) || 
          (item.batchNo && item.batchNo === (row.lotNo || row.batchNo))
        );
        if (idx !== -1) {
          this.state.freezingStoreReports.splice(idx, 1);
          this.renderFreezingStoreScreen(container);
          Toast.show(`IQF report for lot ${row.lotNo || row.batchNo} deleted successfully`, 'success');
        }
      }
    });
  }
};
