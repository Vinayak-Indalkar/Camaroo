import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { Charts } from '../components/charts.js';
import { ERP_DATA } from '../data/mockData.js';

const qcField = (key, label, type = 'text', options = null) => ({ key, label, type, options });
const qcLotField = qcField('lot', 'Lot Number', 'lot');
const qcDateField = qcField('date', 'Inspection Date', 'date');
const qcInspectorField = qcField('inspector', 'Inspector');
const qcStatusField = qcField('status', 'Status', 'select', ['Pending', 'In Review', 'Completed']);
const qcAntibiotics = ['AOZ', 'AMOZ', 'AHD', 'SEM', 'CAP', 'OTC', 'CTC'];
const qcOrganisms = ['Salmonella', 'Vibrio cholerae', 'Vibrio parahaemolyticus'];
const qcSupplierFields = [
  qcField('auditType', 'Facility Type', 'select', ['Hatchery', 'Farm', 'Feed Mill']),
  qcField('farmName', 'Facility Name'), qcField('farmerName', 'Operator / Proprietor'),
  qcField('location', 'Location'), qcField('certifiedBody', 'Certification Body'),
  qcField('associatedFactory', 'Receiving Plant'), qcField('govAuthority', 'Government Authority', 'select', ['MPEDA', 'CAA', 'EIA']),
  qcField('govRegNumber', 'Registration Number'), qcField('bapNumber', 'BAP Certificate'),
  qcField('certificateExpiry', 'Certificate Expiry', 'date'),
  qcField('tonnagePerAnnum', 'Capacity (MT / Year)', 'number'), qcField('waterSpreadArea', 'Water Area (Acres)', 'number'),
  qcField('chemicalResidue', 'Residue Screening', 'select', ['Negative', 'Positive', 'Pending']),
  qcField('biosecurity', 'Biosecurity', 'select', ['Approved', 'Hold', 'Pending'])
];
const qcAuditFields = [
  qcField('auditId', 'Audit Code'), qcField('plant', 'Facility / Plant'), qcField('auditType', 'Audit Type'),
  qcField('standard', 'Standard'), qcField('auditDate', 'Start Date', 'date'), qcField('endDate', 'End Date', 'date'),
  qcField('leadAuditor', 'Lead Auditor'), qcField('grade', 'Grade'),
  qcField('major', 'Major Findings', 'number'), qcField('minor', 'Minor Findings', 'number'),
  qcField('critical', 'Critical Findings', 'number'),
  qcField('capaStatus', 'CAPA Status', 'select', ['Pending', 'Submitted', 'Approved', 'Closed'])
];
const qcAbReportFields = [
  qcField('lot', 'LOT NO', 'lot'),
  qcField('analysisDate', 'ANALYSIS DATE', 'date'),
  qcField('reportDate', 'REPORT DATE', 'date'),
  qcField('sampleType', 'SAMPLE TYPE', 'select', [
    'Raw Material (Head-On)',
    'Headless (HL)',
    'Peeling (PD / PUD)',
    'Finished Goods (IQF / Block)',
    'Pond Pre-Harvest Sample',
    'Water / Ice Sample'
  ]),
  qcField('sampleDetails', 'SAMPLE DETAILS', 'text'),
  qcField('count', 'COUNT', 'text'),
  qcField('quantity', 'QUANTITY', 'number'),
  qcField('parameter', 'PARAMETER', 'select', [
    'ELISA 5-Antibiotic Panel + Sulphite',
    'Full Chemical & Antibiotic Residue',
    'Pre-Harvest Screening (ELISA)',
    'Chloramphenicol & Nitrofurans (CAP/AOZ)'
  ]),
  qcField('loadingStatus', 'LOADING STATUS', 'select', [
    'Approved for Loading',
    'Passed & Cleared',
    'In Progress',
    'Pending Inspection',
    'On Hold',
    'Rejected'
  ]),
  qcField('shift', 'SHIFT', 'select', [
    'Shift 1 (06:00 - 14:00)',
    'Shift 2 (14:00 - 22:00)',
    'Shift 3 (22:00 - 06:00)',
    'General Shift (09:00 - 18:00)'
  ]),
  qcField('testedBy', 'TESTED BY', 'text'),
  qcField('verifiedBy', 'VERIFIED BY', 'text'),
  qcField('plant', 'PLANT', 'select', [
    'DFL UNIT-5 (JPT)',
    'DFL UNIT-3 (PSP)',
    'DFL UNIT-4 (PND)',
    'DFL UNIT-1 (VSP)',
    'DFL UNIT-6 (JPT-II)',
    'DFL UNIT-2 (KKD)'
  ]),
  qcField('sulphite', 'SULPHITE', 'text'),
  qcField('remarks', 'REMARKS', 'text'),
  qcField('AOZ', 'AOZ', 'number'),
  qcField('SEM', 'SEM', 'number'),
  qcField('CAP', 'CAP', 'number'),
  qcField('AHD', 'AHD', 'number'),
  qcField('AMOZ', 'AMOZ', 'number'),
  qcField('result', 'RESULT', 'select', ['Pass', 'Fail', 'NEGATIVE', 'POSITIVE', 'Pending', 'Hold'])
];
const qcAntibiotics5 = ['AOZ', 'SEM', 'CAP', 'AHD', 'AMOZ'];

const qcRmReportFields = [
  qcField('id', 'ID'),
  qcField('lot', 'Lot Number', 'lot'),
  qcField('purchaseDate', 'Purchase Date', 'date'),
  qcField('rmDate', 'Rm Date', 'date'),
  qcField('purchaseType', 'Purchase Type', 'select', ['Site Weightment', 'By Yield', 'Pond Procurement']),
  qcField('count', 'Count', 'text'),
  qcField('weight', 'Weight(KGS)', 'number'),
  qcField('abStatus', 'AB Status', 'select', ['NEGATIVE', 'POSITIVE', 'Pending']),
  qcField('status', 'Status', 'select', ['Pass', 'Hold', 'Reject', 'Completed']),
  qcField('reason', 'Reason', 'text')
];

const qcMbReportFields = [
  qcField('unitName', 'Unit Name', 'select', [
    'DFL UNIT-5 (JPT)',
    'DFL UNIT-3 (PSP)',
    'DFL UNIT-4 (PND)',
    'DFL UNIT-1 (VSP)',
    'DFL UNIT-6 (JPT-II)',
    'DFL UNIT-2 (KKD)'
  ]),
  qcField('analysedBy', 'Analysed By', 'text'),
  qcField('verifiedBy', 'Verified By', 'text')
];

const qcLabReportFields = [
  qcField('sampleCollectionTime', 'Sample Collection Time', 'time'),
  qcField('dateOfSampling', 'Date of Sampling', 'date'),
  qcField('verifiedBy', 'Verified By', 'text'),
  qcField('testedBy', 'Tested By', 'text'),
  qcField('phValue', 'PH Value', 'number'),
  qcField('temperature', 'Temperature', 'number'),
  qcField('salinity', 'Salinity', 'number'),
  qcField('hardness', 'Hardness', 'number'),
  qcField('chlorine', 'Chlorine', 'number'),
  qcField('totalDissolvedSolids', 'Total Dissolved Solids', 'number')
];

const qcDocumentationFields = [
  qcField('sno', 'SNO'),
  qcField('id', 'ID'),
  qcField('invoiceNo', 'Invoice No'),
  qcField('invoiceDate', 'Invoice Date', 'date'),
  qcField('poNo', 'Po No'),
  qcField('buyer', 'Buyer'),
  qcField('country', 'Country', 'select', ['USA', 'EU', 'Japan', 'China', 'UK', 'Canada', 'Australia']),
  qcField('internalLotNo', 'Internal Lot No', 'lot')
];

const qcSchemas = {
  'daily-qc-ops': { title: 'Daily QC Operations', fields: [qcDateField, qcField('timeSlot', 'Inspection Time', 'time'), qcField('batchNo', 'Batch Number'), qcLotField, qcField('productLine', 'Product Line', 'select', ['Line #1', 'Line #2', 'Line #3', 'Line #4', 'Line #5', 'Line #6']), qcField('coreTemp', 'Core Temperature (C)', 'temperature'), qcField('chlorineLevel', 'Free Chlorine (ppm)', 'number'), qcField('sensoryScore', 'Sensory Score (1-5)', 'score'), qcInspectorField] },
  'lots-list': { title: 'Lots List', fields: [qcField('lot', 'Lot Number'), qcField('rmDate', 'Receiving Date', 'date'), qcField('type', 'Procurement Type', 'select', ['Site Weightment', 'By Yield']), qcField('grader', 'Grader'), qcField('agent', 'Agent / Supplier'), qcField('count', 'Count (Pieces / kg)', 'number'), qcField('weight', 'Net Weight (kg)', 'number'), qcField('station', 'Station'), qcField('method', 'Test Method'), qcField('collectedBy', 'Collected By'), qcField('lab', 'Laboratory'), qcField('testTime', 'Sample Time', 'datetime-local'), qcField('antibiotics', 'Screening Panel')] },
  'ab-report': { title: 'Antibiotic ELISA Report', fields: qcAbReportFields },
  'rm-report': { title: 'Raw Material Inspection Report', fields: qcRmReportFields },
  'mb-report': { title: 'Microbiology Report', fields: qcMbReportFields },
  'lab-report': { title: 'In-House Lab Report', fields: qcLabReportFields },
  'external-lab-report': { title: 'External Lab Report', fields: [qcField('exporter', 'Exporter'), qcLotField, qcDateField, qcField('reportNo', 'Report Number'), qcField('lab', 'Accredited Laboratory'), qcField('accreditationNo', 'Accreditation Number'), qcField('requiredTests', 'Tests Performed'), qcField('result', 'Lab Result', 'select', ['Pass', 'Fail', 'Pending']), qcField('coaNumber', 'COA Number'), qcInspectorField] },
  documentation: { title: 'QC Operations', fields: qcDocumentationFields },
  'food-social-audit': { title: 'Food & Social Screening', fields: qcSupplierFields },
  'farm-mill-hatchery-audit': { title: 'Farm / Mill / Hatchery Screening', fields: qcSupplierFields },
  'hatchery-list': { title: 'Hatchery Register', fields: qcSupplierFields }
};
[
  ['food-audit-list', 'Food Safety Audits', 'Food Safety', 'BRCGS Issue 9'],
  ['social-audit-list', 'Social Compliance Audits', 'Social', 'SMETA 4-Pillar'],
  ['farm-audit-list', 'Farm Audits', 'Supplier', 'ASC / BAP'],
  ['hatchery-audit-list', 'Hatchery Audits', 'Biosecurity', 'BAP Hatchery'],
  ['feed-mill-audit-list', 'Feed Mill Audits', 'Supplier', 'BAP Feed Mill']
].forEach(([key, title, auditType, standard]) => { qcSchemas[key] = { title, fields: qcAuditFields, auditType, standard }; });

const qcAliases = {
  'qc-overview': 'overview', 'qc-orders': 'documentation', 'incoming-lots': 'lots-list', 'antibiotic-testing': 'ab-report',
  'rm-testing': 'rm-report', microbiology: 'mb-report', 'in-house-lab': 'lab-report', 'external-lab': 'external-lab-report',
  'screening-records': 'food-social-audit', 'food-audits': 'food-audit-list', 'social-audits': 'social-audit-list',
  'farm-audits': 'farm-audit-list', 'hatchery-audits': 'hatchery-audit-list', 'feed-mill-audits': 'feed-mill-audit-list'
};

export const QCView = {
  state: null,
  table: null,
  filters: { status: 'ALL', lot: 'ALL', from: '', to: '' },
  escape(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  },

  icon(name) {
    if (typeof lucide === 'undefined') return this.escape(({ Pencil: 'Edit', Trash2: 'Delete' })[name] || '');
    const icon = lucide.createElement(lucide.icons[name]);
    icon.setAttribute('class', 'w-4 h-4');
    return icon.outerHTML;
  },

  latestReport(key, lot) {
    return this.state?.[key]?.filter(row => row.lot === lot).sort((first, second) => String(first.date || '').localeCompare(String(second.date || '')) || String(first.updatedAt || '').localeCompare(String(second.updatedAt || ''))).pop();
  },

  load() {
    if (this.state) return;
    const seed = this.seed();
    try {
      const saved = JSON.parse(localStorage.getItem('dfl_qc_demo_v1') || 'null');
      this.state = Object.fromEntries(Object.keys(qcSchemas).map(key => [key, Array.isArray(saved?.[key]) ? saved[key] : seed[key]]));
    } catch {
      this.state = seed;
    }
    if (Array.isArray(this.state['rm-report'])) {
      this.state['rm-report'] = this.state['rm-report'].map((row, idx) => {
        const seedRow = (seed['rm-report'] && seed['rm-report'][idx]) || seed['rm-report'][0] || {};
        return {
          ...seedRow,
          ...row,
          id: (row.id && !row.id.startsWith('QC-rm-report')) ? row.id : (seedRow.id || `RM-INSP-2026-00${idx + 1}`),
          purchaseDate: row.purchaseDate || seedRow.purchaseDate || '2026-10-24',
          rmDate: row.rmDate || seedRow.rmDate || row.date || '2026-10-25',
          purchaseType: row.purchaseType || seedRow.purchaseType || 'Site Weightment',
          count: row.count || seedRow.count || '40 Count',
          weight: row.weight || seedRow.weight || 2850,
          abStatus: row.abStatus || seedRow.abStatus || 'NEGATIVE',
          status: row.status || seedRow.status || 'Pass',
          reason: row.reason || seedRow.reason || 'Compliant with raw material specifications.'
        };
      });
    }
    if (Array.isArray(this.state['ab-report'])) {
      this.state['ab-report'] = this.state['ab-report'].map((row, idx) => {
        const seedRow = (seed['ab-report'] && seed['ab-report'][idx]) || seed['ab-report'][0] || {};
        return { ...seedRow, ...row, sampleRows: (row.sampleRows && row.sampleRows.length) ? row.sampleRows : (seedRow.sampleRows || []) };
      });
    }
    if (Array.isArray(this.state['mb-report'])) {
      this.state['mb-report'] = this.state['mb-report'].map((row, idx) => {
        const seedRow = (seed['mb-report'] && seed['mb-report'][idx]) || seed['mb-report'][0] || {};
        return {
          ...seedRow,
          ...row,
          id: row.id || `QC-mb-report-${idx + 1}`,
          poNo: row.poNo || seedRow.poNo || `PO-2026-00${idx + 1}`,
          buyer: row.buyer || seedRow.buyer || ['Pacific Seafood Inc', 'Maruha Nichiro Corp', 'Royal Greenland A/S'][idx % 3],
          reportDate: row.reportDate || row.date || seedRow.reportDate || `2026-10-${25 + (idx % 5)}`,
          unitName: row.unitName || seedRow.unitName || 'DFL UNIT-5 (JPT)',
          analysedBy: row.analysedBy || seedRow.analysedBy || 'R. K. Patnaik',
          verifiedBy: row.verifiedBy || seedRow.verifiedBy || 'Dr. S. Rao',
          status: 'Pass',
          mbRows: (row.mbRows && row.mbRows.length) ? row.mbRows : (seedRow.mbRows || [])
        };
      });
    }
    if (Array.isArray(this.state['lab-report'])) {
      this.state['lab-report'] = this.state['lab-report'].map((row, idx) => {
        const seedRow = (seed['lab-report'] && seed['lab-report'][idx]) || seed['lab-report'][0] || {};
        return {
          ...seedRow,
          ...row,
          id: row.id || `QC-lab-report-${idx + 1}`,
          reportDate: row.dateOfSampling || row.reportDate || row.date || seedRow.reportDate || `2026-10-${25 + (idx % 5)}`,
          dateOfSampling: row.dateOfSampling || row.reportDate || seedRow.dateOfSampling || `2026-10-${25 + (idx % 5)}`,
          sampleCollectionTime: row.sampleCollectionTime || seedRow.sampleCollectionTime || '09:30',
          verifiedBy: row.verifiedBy || seedRow.verifiedBy || 'Dr. S. Rao',
          testedBy: row.testedBy || seedRow.testedBy || 'R. K. Patnaik',
          phValue: row.phValue ?? seedRow.phValue ?? 7.4,
          temperature: row.temperature ?? seedRow.temperature ?? 24.5,
          salinity: row.salinity ?? seedRow.salinity ?? 15.0,
          hardness: row.hardness ?? seedRow.hardness ?? 120,
          chlorine: row.chlorine ?? seedRow.chlorine ?? 0.5,
          totalDissolvedSolids: row.totalDissolvedSolids ?? seedRow.totalDissolvedSolids ?? 850,
          status: 'Pass'
        };
      });
    }
    if (Array.isArray(this.state.documentation)) {
      this.state.documentation = this.state.documentation.map((row, idx) => {
        const seedRow = (seed.documentation && seed.documentation[idx]) || seed.documentation[0] || {};
        const d = row.invoiceDate || row.date || seedRow.invoiceDate || `2026-10-${24 + (idx % 5)}`;
        return {
          ...seedRow,
          ...row,
          id: (row.id && !row.id.startsWith('QC-documentation')) ? row.id : (seedRow.id || `DOC-2026-00${idx + 1}`),
          sno: idx + 1,
          invoiceNo: row.invoiceNo || seedRow.invoiceNo || `EXP-INV-2026-00${idx + 1}`,
          invoiceDate: d,
          date: d,
          poNo: row.poNo || seedRow.poNo || `PO-2026-00${idx + 1}`,
          buyer: row.buyer || row.consignee || seedRow.buyer || 'Pacific Seafood Inc',
          consignee: row.consignee || row.buyer || seedRow.consignee || 'Pacific Seafood Inc',
          country: row.country || seedRow.country || 'USA',
          internalLotNo: row.internalLotNo || row.lot || seedRow.internalLotNo || `BLS/2627/014${3 + (idx % 3)}`,
          year: row.year || seedRow.year || d.slice(0, 4),
          exporter: row.exporter || seedRow.exporter || 'Devi Fisheries Limited',
          billsType: row.billsType || seedRow.billsType || 'Commercial Bill',
          status: row.status || 'In Review'
        };
      });
    }
    Object.keys(qcSchemas).forEach(key => this.state[key].forEach(row => this.evaluate(key, row)));
    this.synchronize();
  },

  seed() {
    const lots = ['BLS/2627/0143', 'BLS/2627/0144', 'BLS/2627/0145'];
    const state = {};
    Object.entries(qcSchemas).forEach(([key, schema]) => {
      state[key] = lots.map((lot, index) => {
        const row = { id: key === 'rm-report' ? `RM-INSP-2026-00${index + 1}` : `QC-${key}-${index + 1}` };
        schema.fields.forEach(field => {
          row[field.key] = field.options ? field.options[0] : ['number', 'score', 'percent', 'temperature'].includes(field.type) ? 0 : field.type === 'date' ? `2026-10-${String(25 + index).padStart(2, '0')}` : `${field.label} ${index + 1}`;
        });
        Object.assign(row, {
          lot, internalLotNo: lot, rmDate: `2026-10-${25 + index}`, date: `2026-10-${25 + index}`,
          station: ['Balsore (BLS)', 'Kakinada (KKD)', 'Bhimavaram (BVM)'][index],
          agent: ['Aditya Aqua Farms', 'Coastal Aqua Farms', 'Delta Harvesters'][index], grader: 'A. Annavaram',
          count: 40 + index * 10, weight: 400 + index * 100, inspector: ['R. K. Patnaik', 'S. Rao', 'M. Nagesh'][index],
          collectedBy: 'R. K. Patnaik', lab: 'Demo In-House Lab #1', method: 'Rapid ELISA Kit',
          testTime: `2026-10-${25 + index}T11:30`, antibiotics: 'AOZ, AMOZ, AHD, SEM, CAP, OTC, CTC',
          timeSlot: `${8 + index * 2}:00`.padStart(5, '0'), batchNo: `DEMO-BATCH-${101 + index}`,
          coreTemp: index === 1 ? 5 : 2.5, chlorineLevel: 7, sensoryScore: 4,
          blackSpot: index + 1, softShell: index + 2, broken: 1, dehydration: 1, disposition: 'Pass',
          purchaseDate: `2026-10-${24 + index}`,
          purchaseType: ['Site Weightment', 'By Yield', 'Site Weightment'][index],
          reason: [
            'Fresh farm harvest, excellent sensory score (5/5), zero black spot',
            'Soft shell (3%) and core temp 5°C; quarantined pending LC-MS re-test',
            'Optimal chilled condition (2.5°C), compliant with grade standards'
          ][index],
          TPC: index === 2 ? 600000 : 10000, ecoli: 2, coliforms: 20, staph: 10,
          reportNo: `DEMO-LAB-${201 + index}`, result: index === 1 ? 'Pending' : 'Pass',
          chemicalResult: 'Pass', antibioticResult: index === 1 ? 'Fail' : 'Pass', microbiologyResult: 'Pass',
          accreditationNo: `DEMO-NABL-${index + 1}`, coaNumber: `DEMO-COA-${index + 1}`,
          invoiceNo: `DEMO-INV-${301 + index}`, poNo: `DEMO-PO-${401 + index}`, buyer: ['Pacific Seafood', 'Maruha Nichiro', 'Royal Greenland'][index],
          certHealth: `DEMO-HC-${index + 1}`, certCoa: `DEMO-COA-${index + 1}`, certOrigin: `DEMO-COO-${index + 1}`,
          orderNo: `DEMO-QCO-${501 + index}`, requiredTests: 'Antibiotic, Microbiology, Sensory', targetDate: `2026-10-${27 + index}`, assignedLab: 'Demo In-House Lab #1',
          farmName: ['Coastal Seed Hatchery', 'Delta Aqua Farm', 'Marine Feed Mill'][index], farmerName: ['A. Rao', 'K. Ramu', 'P. Prasad'][index],
          location: ['Balsore', 'Kakinada', 'Bhimavaram'][index], certifiedBody: 'Demo Certification Agency', associatedFactory: 'DFL UNIT-5 (JPT)',
          govRegNumber: `DEMO-REG-${index + 1}`, bapNumber: `DEMO-BAP-${index + 1}`, certificateExpiry: '2027-10-27',
          tonnagePerAnnum: 500 + index * 100, waterSpreadArea: 10 + index * 5,
          chemicalResidue: index === 1 ? 'Positive' : 'Negative', biosecurity: 'Approved',
          auditId: `DEMO-AUD-${key}-${index + 1}`, plant: 'DFL UNIT-5 (JPT)', auditType: schema.auditType || (key === 'hatchery-list' ? 'Hatchery' : ['Hatchery', 'Farm', 'Feed Mill'][index]),
          standard: schema.standard || 'BAP', auditDate: `2026-10-${20 + index}`, endDate: `2026-10-${21 + index}`,
          leadAuditor: 'Demo External Auditor', grade: ['AA', 'A', 'Green'][index], major: 0, minor: index, critical: 0, capaStatus: index ? 'Submitted' : 'Closed'
        });
        if (key === 'external-lab-report') row.exporter = this.exporterName({});
        qcAntibiotics.forEach(parameter => { row[parameter] = index === 1 && parameter === 'AOZ' ? 0.15 : parameter === 'OTC' || parameter === 'CTC' ? 10 : 0.02; });
        if (key === 'mb-report') {
          const po = `PO-2026-00${index + 1}`;
          const buyer = ['Pacific Seafood Inc', 'Maruha Nichiro Corp', 'Royal Greenland A/S'][index];
          const repDate = `2026-10-${25 + index}`;
          Object.assign(row, {
            poNo: po,
            buyer: buyer,
            reportDate: repDate,
            unitName: ['DFL UNIT-5 (JPT)', 'DFL UNIT-3 (PSP)', 'DFL UNIT-4 (PND)'][index],
            analysedBy: ['R. K. Patnaik', 'M. Srinu', 'P. Venkatesh'][index],
            verifiedBy: ['Dr. S. Rao', 'Dr. S. Rao', 'A. Annavaram'][index],
            status: 'Pass',
            mbRows: [
              { sNo: 1, poNo: po, buyer: buyer, parameter: 'TPC (CFU/g)', analysisDate: repDate, result: 'Pass' },
              { sNo: 2, poNo: po, buyer: buyer, parameter: 'E. coli (MPN/g)', analysisDate: repDate, result: 'Pass' },
              { sNo: 3, poNo: po, buyer: buyer, parameter: 'Salmonella (25g)', analysisDate: repDate, result: 'Absent' }
            ]
          });
        }
        if (key === 'lab-report') {
          const samplingDate = `2026-10-${25 + index}`;
          Object.assign(row, {
            reportDate: samplingDate,
            date: samplingDate,
            sampleCollectionTime: ['09:30', '14:15', '16:45'][index],
            dateOfSampling: samplingDate,
            verifiedBy: ['Dr. S. Rao', 'Dr. S. Rao', 'A. Annavaram'][index],
            testedBy: ['R. K. Patnaik', 'M. Srinu', 'P. Venkatesh'][index],
            phValue: [7.40, 7.20, 7.80][index],
            temperature: [24.5, 25.0, 24.0][index],
            salinity: [15.0, 14.5, 16.0][index],
            hardness: [120, 115, 125][index],
            chlorine: [0.5, 0.4, 0.6][index],
            totalDissolvedSolids: [850, 820, 890][index],
            status: 'Pass'
          });
        }
        if (key === 'ab-report') {
          Object.assign(row, {
            lot,
            analysisDate: `2026-10-${25 + index}`,
            reportDate: `2026-10-${25 + index}`,
            sampleType: ['Raw Material (Head-On)', 'Headless (HL)', 'Peeling (PD / PUD)'][index],
            sampleDetails: ['Fresh Harvest White Shrimp', 'HL Vannamei Grade A', 'PUD Shrimp Grade B'][index],
            count: ['31/40 Count', '41/50 Count', '51/60 Count'][index],
            quantity: 2500 + index * 600,
            parameter: 'ELISA 5-Antibiotic Panel + Sulphite',
            loadingStatus: ['Approved for Loading', 'On Hold', 'Passed & Cleared'][index],
            shift: ['Shift 1 (06:00 - 14:00)', 'Shift 2 (14:00 - 22:00)', 'General Shift (09:00 - 18:00)'][index],
            testedBy: ['R. K. Patnaik', 'M. Srinu', 'P. Venkatesh'][index],
            verifiedBy: ['Dr. S. Rao', 'Dr. S. Rao', 'A. Annavaram'][index],
            plant: ['DFL UNIT-5 (JPT)', 'DFL UNIT-3 (PSP)', 'DFL UNIT-4 (PND)'][index],
            sulphite: ['Negative (< 10 ppm)', '12 ppm', 'Negative (< 5 ppm)'][index],
            remarks: index === 1 ? 'Borderline AOZ trace detected. Re-screening required under LC-MS.' : 'Compliant with USFDA & EU MRL standards. Cleared for processing.',
            AOZ: index === 1 ? 0.15 : 0.02,
            SEM: 0.02,
            CAP: 0.01,
            AHD: 0.02,
            AMOZ: 0.02,
            result: index === 1 ? 'Fail' : 'Pass',
            status: index === 1 ? 'Fail' : 'Pass',
            sampleRows: [
              {
                sample: `SMP-01 (${['Raw Material (Head-On)', 'Headless (HL)', 'Peeling (PD / PUD)'][index]})`,
                lotNo: lot,
                count: ['31/40 Count', '41/50 Count', '51/60 Count'][index],
                quantity: Math.round((2500 + index * 600) * 0.6),
                aoz: index === 1 ? 0.15 : 0.02,
                sem: 0.02,
                cap: 0.01,
                ahd: 0.02,
                amoz: 0.02,
                loadingStatus: ['Approved for Loading', 'On Hold', 'Passed & Cleared'][index],
                shift: ['Shift 1 (06:00 - 14:00)', 'Shift 2 (14:00 - 22:00)', 'General Shift (09:00 - 18:00)'][index],
                remarks: index === 1 ? 'Borderline AOZ trace detected. Re-screening required under LC-MS.' : 'Compliant with USFDA & EU MRL standards.',
                testedBy: ['R. K. Patnaik', 'M. Srinu', 'P. Venkatesh'][index]
              },
              {
                sample: 'SMP-02 (Duplicate Aliquot)',
                lotNo: lot,
                count: ['31/40 Count', '41/50 Count', '51/60 Count'][index],
                quantity: Math.round((2500 + index * 600) * 0.4),
                aoz: index === 1 ? 0.14 : 0.02,
                sem: 0.02,
                cap: 0.01,
                ahd: 0.02,
                amoz: 0.02,
                loadingStatus: ['Approved for Loading', 'On Hold', 'Passed & Cleared'][index],
                shift: ['Shift 1 (06:00 - 14:00)', 'Shift 2 (14:00 - 22:00)', 'General Shift (09:00 - 18:00)'][index],
                remarks: 'Duplicate aliquot test confirmed. MRL verified.',
                testedBy: ['R. K. Patnaik', 'M. Srinu', 'P. Venkatesh'][index]
              }
            ]
          });
        }
        qcOrganisms.forEach(parameter => { row[parameter] = 'Absent'; });
        if (key === 'documentation') {
          const invDate = `2026-10-${24 + index}`;
          Object.assign(row, {
            id: `DOC-2026-00${index + 1}`,
            sno: index + 1,
            invoiceNo: `EXP-INV-2026-00${index + 1}`,
            invoiceDate: invDate,
            date: invDate,
            poNo: `PO-2026-00${index + 1}`,
            buyer: ['Pacific Seafood Inc', 'Maruha Nichiro Corp', 'Royal Greenland A/S'][index],
            consignee: ['Pacific Seafood Inc', 'Maruha Nichiro Corp', 'Royal Greenland A/S'][index],
            country: ['USA', 'Japan', 'EU'][index],
            internalLotNo: lot,
            year: '2026',
            exporter: ['Devi Fisheries Limited', 'Devi Fisheries Limited', 'Devi Sea Foods Ltd'][index],
            billsType: ['Commercial Bill', 'Export Bill', 'Commercial Bill'][index],
            certHealth: `EIC/HC/2026/${1001 + index}`,
            certCoa: `COA-2026-00${index + 1}`,
            certOrigin: `COO-MPEDA-2026-${501 + index}`,
            status: 'In Review'
          });
        }
        if (key === 'qc-orders') row.status = 'In Review';
        return row;
      });
    });
    return state;
  },

  persist() {
    try {
      localStorage.setItem('dfl_qc_demo_v1', JSON.stringify(this.state));
      return true;
    } catch {
      Toast.show('QC changes could not be stored. Browser storage may be full.', 'error');
      return false;
    }
  },

  synchronize() {
    this.state['lots-list'].forEach(row => this.evaluate('lots-list', row));
    this.state.documentation.forEach(row => {
      if (row.status === 'Completed' && this.clearanceIssue(row.internalLotNo)) row.status = 'Pending Release';
    });
    if (this.state['qc-orders']) this.state['qc-orders'].forEach(row => {
      if (row.orderType === 'Quarantine Release' && row.status === 'Completed' && this.clearanceIssue(row.lot)) row.status = 'In Review';
    });
  },

  evaluate(key, row) {
    const completeNumbers = names => names.every(name => row[name] !== '' && row[name] !== null && row[name] !== undefined && Number.isFinite(Number(row[name])));
    if (key === 'ab-report') {
      const numbers = qcAntibiotics5.every(name => row[name] !== '' && row[name] !== null && row[name] !== undefined && Number.isFinite(Number(row[name])));
      const hasFail = qcAntibiotics5.some(name => Number(row[name]) >= 0.1);
      if (!numbers) {
        row.status = row.result || 'Pending';
      } else {
        row.status = row.result || (hasFail ? 'Fail' : 'Pass');
      }
      row.result = row.status;
      row.date = row.analysisDate || row.reportDate || row.date;
      row.internalLotNo = row.lot;
    } else if (key === 'mb-report') {
      if (!row.poNo) {
        const nextNum = (this.state['mb-report']?.length || 0) + 1;
        row.poNo = `PO-2026-${String(nextNum).padStart(3, '0')}`;
      }
      if (!row.buyer) row.buyer = 'Pacific Seafood Inc';
      if (!row.reportDate) row.reportDate = row.date || new Date().toISOString().slice(0, 10);
      if (!row.unitName) row.unitName = 'DFL UNIT-5 (JPT)';
      if (!row.analysedBy) row.analysedBy = 'R. K. Patnaik';
      if (!row.verifiedBy) row.verifiedBy = 'Dr. S. Rao';
      row.date = row.reportDate;
      row.status = row.status || 'Pass';
    } else if (key === 'daily-qc-ops') {
      row.status = !completeNumbers(['coreTemp', 'chlorineLevel', 'sensoryScore']) ? 'Pending'
        : Number(row.chlorineLevel) < 5 || Number(row.chlorineLevel) > 10 || Number(row.sensoryScore) < 3 ? 'Hold' : Number(row.coreTemp) > 4 ? 'Re-ice' : 'Pass';
    } else if (key === 'rm-report') {
      row.totalDefects = ['blackSpot', 'softShell', 'broken', 'dehydration'].reduce((sum, name) => sum + Number(row[name] || 0), 0);
      if (!row.purchaseDate) row.purchaseDate = row.date || '2026-10-25';
      if (!row.rmDate) row.rmDate = row.date || '2026-10-25';
      if (!row.purchaseType) row.purchaseType = 'Site Weightment';
      if (!row.abStatus) {
        const report = this.latestReport('ab-report', row.lot);
        row.abStatus = report?.status === 'Pass' ? 'NEGATIVE' : report?.status === 'Fail' ? 'POSITIVE' : 'Pending';
      }
      row.status = row.status || (row.abStatus === 'POSITIVE' ? 'Hold' : 'Pass');
      row.date = row.rmDate || row.purchaseDate || row.date;
      row.internalLotNo = row.lot;
    } else if (key === 'lab-report') {
      if (!row.reportDate) row.reportDate = row.dateOfSampling || row.date || new Date().toISOString().slice(0, 10);
      if (!row.dateOfSampling) row.dateOfSampling = row.reportDate;
      row.date = row.reportDate;
      const ph = Number(row.phValue);
      row.status = (Number.isFinite(ph) && (ph < 6.5 || ph > 8.5)) ? 'Hold' : 'Pass';
    } else if (key === 'external-lab-report') {
      row.status = row.result;
    } else if (qcSchemas[key].fields === qcSupplierFields) {
      row.status = row.chemicalResidue === 'Positive' || row.biosecurity === 'Hold' || row.certificateExpiry < new Date().toISOString().slice(0, 10) ? 'Hold'
        : row.chemicalResidue === 'Negative' && row.biosecurity === 'Approved' ? 'Approved' : 'Pending';
    } else if (qcSchemas[key].fields === qcAuditFields) {
      row.nonConformances = { major: Number(row.major), minor: Number(row.minor), critical: Number(row.critical) };
      row.status = Number(row.critical) > 0 || Number(row.major) > 0 || row.capaStatus !== 'Closed' ? 'Open' : 'Closed';
    }
    if (key === 'lots-list') {
      const report = this.latestReport('ab-report', row.lot);
      row.abStatus = report?.status === 'Pass' ? 'NEGATIVE' : report?.status === 'Fail' ? 'POSITIVE' : 'Test Pending';
      row.status = row.abStatus;
      row.testDetails = { method: row.method, collectedBy: row.collectedBy, lab: row.lab, testTime: row.testTime, antibiotics: row.antibiotics, statusBadge: row.abStatus.toLowerCase() };
    }
  },

  render(containerId, subPage = 'overview', activeHash = '#/quality/dashboard/overview') {
    this.load();
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) return;
    ['qc-antibiotic-chart', 'qc-defects-chart', 'qc-throughput-chart'].forEach(id => Charts.destroy(id));
    const key = qcAliases[subPage] || subPage;
    if (key !== subPage) {
      window.location.hash = activeHash.slice(0, activeHash.lastIndexOf('/') + 1) + key;
      return;
    }
    this.currentKey = qcSchemas[key] ? key : 'overview';
    this.filters = { status: 'ALL', lot: 'ALL', from: '', to: '' };
    container.innerHTML = '<div id="qc-tab-bar-container"></div><div id="qc-subpage-content" class="min-w-0"></div>';
    TabBar.render('qc-tab-bar-container', activeHash);
    this.content = document.getElementById('qc-subpage-content');
    if (this.currentKey === 'overview') this.renderOverview();
    else this.renderRegister(this.currentKey);
  },

  badge(value) {
    const style = ['Pass', 'Approved', 'Completed', 'Closed', 'NEGATIVE'].includes(value) ? 'success' : ['Fail', 'POSITIVE', 'Reject'].includes(value) ? 'danger' : ['Hold', 'Re-ice', 'Open'].includes(value) ? 'warning' : 'default';
    return `<span class="lozenge lozenge-${style}">${this.escape(value || 'Pending')}</span>`;
  },

  exporterName(row) {
    return row.exporter || row.exporterName || ERP_DATA.company?.name || 'Devi Fisheries Limited';
  },

  registerRows(key) {
    if (key === 'documentation') {
      return (this.state.documentation || []).map((row, index) => {
        const d = row.invoiceDate || row.date || `2026-10-${24 + (index % 5)}`;
        return {
          ...row,
          sno: index + 1,
          id: (row.id && !row.id.startsWith('QC-documentation')) ? row.id : `DOC-2026-00${index + 1}`,
          invoiceNo: row.invoiceNo || `EXP-INV-2026-00${index + 1}`,
          invoiceDate: d,
          date: d,
          poNo: row.poNo || `PO-2026-00${index + 1}`,
          buyer: row.buyer || row.consignee || ['Pacific Seafood Inc', 'Maruha Nichiro Corp', 'Royal Greenland A/S'][index % 3],
          consignee: row.consignee || row.buyer || ['Pacific Seafood Inc', 'Maruha Nichiro Corp', 'Royal Greenland A/S'][index % 3],
          country: row.country || ['USA', 'Japan', 'EU'][index % 3],
          internalLotNo: row.internalLotNo || row.lot || `BLS/2627/014${3 + (index % 3)}`,
          year: row.year || d.slice(0, 4),
          exporter: row.exporter || ['Devi Fisheries Limited', 'Devi Fisheries Limited', 'Devi Sea Foods Ltd'][index % 3],
          billsType: row.billsType || ['Commercial Bill', 'Export Bill', 'Commercial Bill'][index % 3]
        };
      });
    }
    if (key === 'external-lab-report') {
      return this.state[key].map(row => ({ ...row, exporter: this.exporterName(row), reportDate: row.reportDate || row.date || '' }));
    }
    if (key === 'lab-report') {
      return this.state[key].map((row, index) => ({
        ...row,
        srNo: index + 1,
        reportDate: row.reportDate || row.date || ''
      }));
    }
    if (key === 'mb-report') {
      return (this.state[key] || []).map((row, index) => ({
        ...row,
        srNo: index + 1,
        poNo: row.poNo || `PO-2026-00${index + 1}`,
        buyer: row.buyer || ['Pacific Seafood Inc', 'Maruha Nichiro Corp', 'Royal Greenland A/S'][index % 3],
        reportDate: row.reportDate || row.date || `2026-10-${25 + (index % 5)}`
      }));
    }
    if (key !== 'ab-report') return this.state[key];
    return this.state[key].map(row => {
      const nightShift = /night|shift 3|^\s*22:00/i.test(row.shift || '');
      const dayShift = !nightShift && /day|general|shift [12]/i.test(row.shift || '');
      return {
        ...row,
        reportId: row.reportId || row.reportNo || row.id,
        totalReports: row.totalReports ?? 1,
        dayTotal: row.dayTotal ?? (dayShift ? 1 : 0),
        nightTotal: row.nightTotal ?? (nightShift ? 1 : 0)
      };
    });
  },

  renderRegister(key) {
    const schema = qcSchemas[key];
    this.state[key].forEach(row => this.evaluate(key, row));
    const lotOptions = [...new Set(this.state['lots-list'].map(row => row.lot))];
    const statuses = [...new Set(this.state[key].map(row => row.status || 'Pending'))];
    const externalRows = key === 'external-lab-report' ? this.registerRows(key) : [];
    const exporterOptions = [...new Set(externalRows.map(row => row.exporter))].sort();
    const yearOptions = [...new Set(externalRows.map(row => row.reportDate.slice(0, 4)).filter(year => /^\d{4}$/.test(year)))].sort().reverse();
    this.content.innerHTML = `
      <div class="space-y-4 min-w-0">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h1 class="text-xl font-extrabold text-[#172B4D]">${schema.title}</h1>
          ${['lots-list', 'rm-report', 'documentation'].includes(key) ? '' : `<button type="button" id="qc-add-record" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">${this.icon('Plus')}<span>Add Record</span></button>`}
        </div>
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between gap-2 pb-1">
            <div class="flex items-center gap-2"><span class="text-[#0284C7]">${this.icon('Filter')}</span><h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3></div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="qc-reset-filters" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">${this.icon('RotateCcw')}</button>
              <button type="button" id="qc-toggle-filters" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter" aria-expanded="true" aria-controls="qc-filters">${this.icon('ChevronDown')}</button>
            </div>
          </div>
          <form id="qc-filters" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${key === 'documentation' ? 'lg:grid-cols-6' : 'lg:grid-cols-4'} gap-3 text-xs transition-all duration-200">
            ${key === 'documentation' ? `
              <div>
                <label for="qc-filter-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT YEAR</label>
                <select id="qc-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                  <option value="ALL">All Years</option>
                  <option value="2026" selected>2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div>
                <label for="qc-filter-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT EXPORTER</label>
                <select id="qc-filter-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                  <option value="ALL">All Exporters</option>
                  <option value="Devi Fisheries Limited">Devi Fisheries Limited</option>
                  <option value="Devi Sea Foods Ltd">Devi Sea Foods Ltd</option>
                  <option value="Devi Aqua Feeds">Devi Aqua Feeds</option>
                </select>
              </div>
              <div>
                <label for="qc-filter-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT CONSIGNEE</label>
                <select id="qc-filter-consignee" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                  <option value="ALL">All Consignees</option>
                  <option value="Pacific Seafood Inc">Pacific Seafood Inc</option>
                  <option value="Maruha Nichiro Corp">Maruha Nichiro Corp</option>
                  <option value="Royal Greenland A/S">Royal Greenland A/S</option>
                  <option value="Sysco Corporation">Sysco Corporation</option>
                  <option value="Red Chamber Co.">Red Chamber Co.</option>
                </select>
              </div>
              <div>
                <label for="qc-filter-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT COUNTRY</label>
                <select id="qc-filter-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                  <option value="ALL">All Countries</option>
                  <option value="USA">USA</option>
                  <option value="EU">EU</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              <div>
                <label for="qc-filter-bills-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BILLS TYPE</label>
                <select id="qc-filter-bills-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                  <option value="ALL">All Bills Type</option>
                  <option value="Commercial Bill">Commercial Bill</option>
                  <option value="Export Bill">Export Bill</option>
                  <option value="Advance Bill">Advance Bill</option>
                  <option value="Sample Bill">Sample Bill</option>
                  <option value="Consignment Bill">Consignment Bill</option>
                </select>
              </div>
            ` : key === 'external-lab-report' ? `
              <div><label for="qc-filter-exporter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Select Exporter:</label><select id="qc-filter-exporter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D]"><option value="ALL">All Exporters</option>${exporterOptions.map(value => `<option value="${this.escape(value)}">${this.escape(value)}</option>`).join('')}</select></div>
              <div><label for="qc-filter-year" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Select Year</label><select id="qc-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D]"><option value="ALL">All Years</option>${yearOptions.map(value => `<option>${value}</option>`).join('')}</select></div>
              <div><label for="qc-filter-month" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Select Month</label><select id="qc-filter-month" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D]"><option value="ALL">All Months</option>${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((name, index) => `<option value="${String(index + 1).padStart(2, '0')}">${name}</option>`).join('')}</select></div>
            ` : ['mb-report', 'lab-report'].includes(key) ? `
              <div>
                <label for="qc-filter-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Select From Date:</label>
                <div class="erp-date-wrapper">
                  <input id="qc-filter-from" type="date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>
              <div>
                <label for="qc-filter-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">Select To Date:</label>
                <div class="erp-date-wrapper">
                  <input id="qc-filter-to" type="date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>
            ` : `
              <div><label for="qc-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label><select id="qc-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]"><option value="ALL">All Statuses</option>${statuses.map(value => `<option>${this.escape(value)}</option>`).join('')}</select></div>
              <div><label for="qc-filter-lot" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOT</label><select id="qc-filter-lot" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]"><option value="ALL">All Lots</option>${lotOptions.map(value => `<option>${this.escape(value)}</option>`).join('')}</select></div>
              <div><label for="qc-filter-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FROM DATE</label><div class="erp-date-wrapper"><input id="qc-filter-from" type="date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" /></div></div>
              <div><label for="qc-filter-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TO DATE</label><div class="erp-date-wrapper"><input id="qc-filter-to" type="date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" /></div></div>
            `}
            <div class="flex items-end">
              <button type="submit" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer">${this.icon('Search')}<span>${key === 'lab-report' ? 'Reports' : 'Search'}</span></button>
            </div>
          </form>
        </div>
        <div id="qc-register-table" class="min-w-0"></div>
      </div>`;
    const tableFields = key === 'ab-report' ? [
      qcField('reportId', 'Report ID'),
      qcField('analysisDate', 'Analysis Date', 'date'),
      qcField('reportDate', 'Report Date', 'date'),
      qcField('totalReports', 'Total Reports', 'number'),
      qcField('dayTotal', 'Day Total', 'number'),
      qcField('nightTotal', 'Night Total', 'number')
    ] : key === 'mb-report' ? [
      qcField('srNo', 'sr no'),
      qcField('poNo', 'po no'),
      qcField('buyer', 'buyer name'),
      qcField('reportDate', 'report date', 'date')
    ] : key === 'lab-report' ? [
      qcField('srNo', 'Sr No', 'number'),
      qcField('reportDate', 'Report Date', 'date')
    ] : key === 'documentation' ? [
      qcField('sno', 'SNO'),
      qcField('id', 'ID'),
      qcField('invoiceNo', 'Invoice No'),
      qcField('invoiceDate', 'Invoice Date', 'date'),
      qcField('poNo', 'Po No'),
      qcField('buyer', 'Buyer'),
      qcField('country', 'Country'),
      qcField('internalLotNo', 'Internal Lot No')
    ] : schema.fields;
    const columns = tableFields.map(field => {
      if (key === 'documentation') {
        if (field.key === 'sno') {
          return {
            field: 'sno',
            header: 'SNO',
            render: (val, row, idx) => `<span class="font-bold text-[#5E6C84]">${idx !== undefined ? idx + 1 : (val || 1)}</span>`
          };
        }
        if (field.key === 'id') {
          return {
            field: 'id',
            header: 'ID',
            render: val => `<span class="font-mono font-bold text-[#00A4B7]">${this.escape(val || '-')}</span>`
          };
        }
        if (field.key === 'invoiceNo') {
          return {
            field: 'invoiceNo',
            header: 'Invoice No',
            render: val => `<span class="font-mono font-semibold text-[#172B4D]">${this.escape(val || '-')}</span>`
          };
        }
        if (field.key === 'invoiceDate') {
          return {
            field: 'invoiceDate',
            header: 'Invoice Date',
            render: val => val ? String(val).split('-').reverse().join('-') : '-'
          };
        }
        if (field.key === 'poNo') {
          return {
            field: 'poNo',
            header: 'Po No',
            render: val => `<span class="font-mono font-medium text-[#172B4D]">${this.escape(val || '-')}</span>`
          };
        }
        if (field.key === 'buyer') {
          return {
            field: 'buyer',
            header: 'Buyer',
            render: val => `<span class="font-semibold text-[#172B4D]">${this.escape(val || '-')}</span>`
          };
        }
        if (field.key === 'country') {
          return {
            field: 'country',
            header: 'Country',
            render: val => `<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6]">${this.escape(val || '-')}</span>`
          };
        }
        if (field.key === 'internalLotNo') {
          return {
            field: 'internalLotNo',
            header: 'Internal Lot No',
            render: val => `<span class="font-mono font-medium text-[#172B4D]">${this.escape(val || '-')}</span>`
          };
        }
      }
      if (key === 'lab-report' && field.key === 'reportDate') {
        return { field: 'reportDate', header: 'Report Date', render: value => value ? this.escape(String(value).split('-').reverse().join('-')) : '-' };
      }
      if (key === 'mb-report') {
        if (field.key === 'srNo') {
          return {
            field: 'srNo',
            header: 'sr no',
            render: (val, row, idx) => `<span class="font-bold text-[#5E6C84]">${idx !== undefined ? idx + 1 : (val || 1)}</span>`
          };
        }
        if (field.key === 'poNo') {
          return {
            field: 'poNo',
            header: 'po no',
            render: val => `<span class="font-mono font-bold text-[#00A4B7]">${this.escape(val || '-')}</span>`
          };
        }
        if (field.key === 'buyer') {
          return {
            field: 'buyer',
            header: 'buyer name',
            render: val => `<span class="font-semibold text-[#172B4D]">${this.escape(val || '-')}</span>`
          };
        }
        if (field.key === 'reportDate') {
          return {
            field: 'reportDate',
            header: 'report date',
            render: val => val ? String(val).split('-').reverse().join('-') : '-'
          };
        }
      }
      if (key === 'rm-report') {
        if (field.key === 'id') {
          return { field: 'id', header: 'ID', render: val => `<span class="font-mono font-bold text-[#00A4B7]">${this.escape(val || '-')}</span>` };
        }
        if (field.key === 'lot') {
          return { field: 'lot', header: 'Lot Number', render: val => `<span class="font-mono font-semibold text-[#172B4D]">${this.escape(val || '-')}</span>` };
        }
        if (field.key === 'purchaseDate' || field.key === 'rmDate') {
          return { field: field.key, header: field.label, render: val => val ? String(val).split('-').reverse().join('-') : '-' };
        }
        if (field.key === 'count') {
          return { field: 'count', header: 'Count', render: val => `<span class="font-mono font-medium">${this.escape(val || '-')}</span>` };
        }
        if (field.key === 'weight') {
          return { field: 'weight', header: 'Weight(KGS)', render: val => `<span class="font-mono font-bold text-right">${Number(val || 0).toLocaleString()} Kg</span>` };
        }
        if (field.key === 'abStatus') {
          return { field: 'abStatus', header: 'AB Status', render: val => this.badge(val) };
        }
        if (field.key === 'status') {
          return { field: 'status', header: 'Status', render: val => this.badge(val) };
        }
        if (field.key === 'reason') {
          return { field: 'reason', header: 'Reason', render: val => `<span class="text-[#475569] truncate max-w-[240px] block" title="${this.escape(val || '')}">${this.escape(val || '-')}</span>` };
        }
      }
      if (key === 'ab-report' && field.key === 'lot') {
        return { field: 'lot', header: 'LOT NO', render: val => `<span class="font-mono font-bold text-[#00A4B7]">${this.escape(val || '-')}</span>` };
      }
      if (key === 'ab-report' && (field.key === 'analysisDate' || field.key === 'reportDate')) {
        return { field: field.key, header: field.label, render: val => val ? String(val).split('-').reverse().join('-') : '-' };
      }
      if (key === 'ab-report' && (field.key === 'result' || field.key === 'status')) {
        return { field: field.key, header: field.label, render: val => this.badge(val) };
      }
      if (key === 'ab-report' && ['AOZ', 'SEM', 'CAP', 'AHD', 'AMOZ'].includes(field.key)) {
        return {
          field: field.key,
          header: field.label,
          render: val => {
            const num = Number(val);
            const isHigh = num >= 0.1;
            return `<span class="font-mono ${isHigh ? 'font-bold text-[#DE350B]' : 'font-medium text-[#1E293B]'}">${Number.isFinite(num) ? num.toFixed(2) : '-'}</span>`;
          }
        };
      }
      if (key === 'ab-report' && field.key === 'quantity') {
        return { field: 'quantity', header: 'QUANTITY', render: val => val ? Number(val).toLocaleString() + ' Kg' : '-' };
      }
      if (key === 'ab-report' && field.key === 'loadingStatus') {
        return {
          field: 'loadingStatus',
          header: 'LOADING STATUS',
          render: val => {
            const cls = val === 'Approved for Loading' || val === 'Passed & Cleared' ? 'bg-[#E3FCEF] text-[#006644]' : val === 'On Hold' ? 'bg-[#FFF0B3] text-[#172B4D]' : val === 'Rejected' ? 'bg-[#FFEBE6] text-[#BF2600]' : 'bg-[#EAE6FF] text-[#403294]';
            return `<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${cls}">${this.escape(val || '-')}</span>`;
          }
        };
      }
      return { field: field.key, header: field.label, render: value => this.escape(value ?? '-') };
    });
    if (!['ab-report', 'mb-report', 'lab-report', 'documentation'].includes(key)) {
      if (!columns.some(column => column.field === 'status')) columns.push({ field: 'status', header: key === 'lots-list' ? 'AB Status' : 'Status', render: value => this.badge(value) });
      else columns.find(column => column.field === 'status').render = value => this.badge(value);
    }
    columns.forEach(column => {
      const field = tableFields.find(item => item.key === column.field);
      if (field && ['date', 'datetime-local'].includes(field.type)) {
        column.render = value => {
          if (!value) return '-';
          const text = String(value);
          if (!/^\d{4}-\d{2}-\d{2}(?:$|T)/.test(text)) return this.escape(text);
          const [date, time] = text.split('T');
          return this.escape(`${date.split('-').reverse().join('-')}${time ? ` ${time.slice(0, 5)}` : ''}`);
        };
      }
      if (['result', 'chemicalResult', 'antibioticResult', 'microbiologyResult'].includes(column.field)) {
        column.render = value => this.badge(value);
      }
      if (['srNo', 'totalReports', 'dayTotal', 'nightTotal'].includes(column.field)) {
        column.render = value => `<span class="font-semibold text-[#172B4D]">${value === null || value === undefined || value === '' ? '-' : this.escape(Number(value).toLocaleString('en-IN'))}</span>`;
      }
    });
    if (key === 'external-lab-report') columns.push({ field: 'coaFileName', header: 'COA Attachment', render: value => this.escape(value || 'Not attached') });
    const sourceRow = row => this.state[key].find(record => record.id === row.id) || row;
    this.table = new DataTable({
      containerId: 'qc-register-table', tableTitle: schema.title, columns, data: this.registerRows(key),
      actionsTitle: key === 'lab-report' ? 'Action' : (key === 'rm-report' || key === 'mb-report') ? 'action' : 'Actions',
      actions: key === 'lots-list' ? [] : (
        key === 'external-lab-report' ? [
          { label: 'Print', icon: this.icon('Printer'), onClick: row => this.printExternalReport(sourceRow(row)) }
        ] : key === 'rm-report' ? [
          { label: 'Add', icon: this.icon('Plus'), onClick: row => this.openRmInspectionModal(sourceRow(row)) }
        ] : [
          { label: 'Edit', icon: this.icon('Pencil'), onClick: row => this.openForm(key, sourceRow(row)) },
          { label: 'Delete', icon: this.icon('Trash2'), onClick: row => this.deleteRecord(key, sourceRow(row)) }
        ]
      ),
      onRowClick: row => this.showDetails(key, sourceRow(row))
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
    document.getElementById('qc-add-record')?.addEventListener('click', () => this.openForm(key));
    document.getElementById('qc-filters').addEventListener('submit', event => { event.preventDefault(); this.filterRecords(key); });
    document.getElementById('qc-reset-filters').addEventListener('click', () => {
      document.getElementById('qc-filters').reset();
      this.filterRecords(key);
    });
    document.getElementById('qc-toggle-filters').addEventListener('click', event => {
      const button = event.currentTarget;
      const collapsed = button.getAttribute('aria-expanded') === 'true';
      document.getElementById('qc-filters').classList.toggle('hidden', collapsed);
      button.setAttribute('aria-expanded', String(!collapsed));
      button.setAttribute('aria-label', collapsed ? 'Show Filter' : 'Hide Filter');
      button.setAttribute('title', collapsed ? 'Show Filter' : 'Hide Filter');
      button.querySelector('svg')?.classList.toggle('-rotate-90', collapsed);
    });
  },

  filterRecords(key) {
    if (key === 'documentation') {
      const year = document.getElementById('qc-filter-year')?.value || 'ALL';
      const exporter = document.getElementById('qc-filter-exporter')?.value || 'ALL';
      const consignee = document.getElementById('qc-filter-consignee')?.value || 'ALL';
      const country = document.getElementById('qc-filter-country')?.value || 'ALL';
      const billsType = document.getElementById('qc-filter-bills-type')?.value || 'ALL';

      this.table.setData(this.registerRows(key).filter(row => {
        const rowYear = row.year || (row.date ? String(row.date).slice(0, 4) : '2026');
        const rowExporter = row.exporter || 'Devi Fisheries Limited';
        const rowConsignee = row.consignee || row.buyer || '';
        const rowCountry = row.country || '';
        const rowBillsType = row.billsType || 'Commercial Bill';

        if (year !== 'ALL' && rowYear !== year) return false;
        if (exporter !== 'ALL' && !rowExporter.toLowerCase().includes(exporter.toLowerCase())) return false;
        if (consignee !== 'ALL' && !rowConsignee.toLowerCase().includes(consignee.toLowerCase())) return false;
        if (country !== 'ALL' && rowCountry.toUpperCase() !== country.toUpperCase()) return false;
        if (billsType !== 'ALL' && !rowBillsType.toLowerCase().includes(billsType.toLowerCase())) return false;
        return true;
      }));
      return;
    }
    const status = document.getElementById('qc-filter-status')?.value || 'ALL';
    const lot = document.getElementById('qc-filter-lot')?.value || 'ALL';
    const from = document.getElementById('qc-filter-from')?.value || '';
    const to = document.getElementById('qc-filter-to')?.value || '';
    const exporter = document.getElementById('qc-filter-exporter')?.value || 'ALL';
    const year = document.getElementById('qc-filter-year')?.value || 'ALL';
    const month = document.getElementById('qc-filter-month')?.value || 'ALL';
    if (from && to && from > to) { Toast.show('From date must not be after To date.', 'warning'); return; }
    this.table.setData(this.registerRows(key).filter(row => {
      const date = ['lab-report', 'external-lab-report'].includes(key) ? row.reportDate : row.date || row.rmDate || row.auditDate || row.targetDate || '';
      if (key === 'external-lab-report' && ((exporter !== 'ALL' && row.exporter !== exporter) || (year !== 'ALL' && date.slice(0, 4) !== year) || (month !== 'ALL' && date.slice(5, 7) !== month))) return false;
      return (status === 'ALL' || row.status === status) && (lot === 'ALL' || (row.lot || row.internalLotNo) === lot) && (!from || date >= from) && (!to || date <= to);
    }));
  },

  printExternalReport(row) {
    const report = { ...row, exporter: this.exporterName(row) };
    const columns = qcSchemas['external-lab-report'].fields.map(field => ({ field: field.key, header: field.label }));
    columns.push({ field: 'status', header: 'Status' }, { field: 'coaFileName', header: 'COA Attachment' });
    new DataTable({ containerId: null, columns, data: [report], tableTitle: `External Lab Report - ${this.escape(row.reportNo || row.id)}` }).exportToPDF();
  },

  openRmInspectionModal(row) {
    if (!row) return;
    const r = row;
    const details = r.inspectionDetails || {};
    const checkedCountVal = r.checkedCount ?? details.checkedCount ?? (r.count ? String(r.count).replace(/[^0-9.]/g, '') : '');
    const redBlackGillVal = r.redBlackGill ?? details.redBlackGill ?? '';
    const softShellVal = r.softShell ?? details.softShell ?? '';
    const droppingHeadVal = r.droppingHead ?? details.droppingHead ?? '';
    const blackSpotVal = r.blackSpot ?? details.blackSpot ?? '';
    const brokenVal = r.broken ?? details.broken ?? '';
    const improperLegsVal = r.improperLegs ?? details.improperLegs ?? '';
    const bendsVal = r.bends ?? details.bends ?? '';
    const fitForHeadOnVal = r.fitForHeadOn ?? details.fitForHeadOn ?? 'YES';
    const bigPiecesVal = r.bigPieces ?? details.bigPieces ?? '';
    const smallPiecesVal = r.smallPieces ?? details.smallPieces ?? '';
    const remarksVal = r.remarks ?? details.remarks ?? r.reason ?? '';

    const purchaseDateFormatted = r.purchaseDate ? String(r.purchaseDate).split('-').reverse().join('-') : '-';
    const rmDateFormatted = r.rmDate ? String(r.rmDate).split('-').reverse().join('-') : '-';
    const weightFormatted = r.weight ? Number(r.weight).toLocaleString() + ' Kg' : '-';

    Modal.open({
      title: `Add Raw Material Inspection Details - ${r.lot || r.id}`,
      size: 'full',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Overview Summary Banner -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-lg p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs">
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-[#5E6C84]">ID</span>
              <span class="font-mono font-bold text-[#00A4B7]">${this.escape(r.id || '-')}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-[#5E6C84]">LOT NUMBER</span>
              <span class="font-mono font-semibold text-[#172B4D]">${this.escape(r.lot || '-')}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-[#5E6C84]">PURCHASE DATE</span>
              <span class="font-medium text-[#172B4D]">${purchaseDateFormatted}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-[#5E6C84]">RM DATE</span>
              <span class="font-medium text-[#172B4D]">${rmDateFormatted}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-[#5E6C84]">PURCHASE TYPE</span>
              <span class="font-medium text-[#172B4D]">${this.escape(r.purchaseType || '-')}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-[#5E6C84]">WEIGHT (KGS)</span>
              <span class="font-mono font-bold text-[#172B4D]">${weightFormatted}</span>
            </div>
          </div>

          <!-- 12 Input Fields in 4-Column Responsive Grid -->
          <form id="form-rm-inspection-modal" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs" onsubmit="return false;">
            <!-- 1. CHECKED COUNT/KG -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                CHECKED COUNT/KG <span class="text-[#DE350B]">*</span>
              </label>
              <input type="number" step="any" min="0" id="rmi-checked-count" name="checkedCount" value="${this.escape(checkedCountVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 42" required />
            </div>

            <!-- 2. RED/BLACK GILL -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                RED/BLACK GILL
              </label>
              <input type="text" id="rmi-red-black-gill" name="redBlackGill" value="${this.escape(redBlackGillVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0 % or Count" />
            </div>

            <!-- 3. SOFT/SEMI SOFT/PAPER SOFT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                SOFT/SEMI SOFT/PAPER SOFT
              </label>
              <input type="text" id="rmi-soft-shell" name="softShell" value="${this.escape(softShellVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0 % or Count" />
            </div>

            <!-- 4. DROPPING HEAD IN % -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                DROPPING HEAD IN %
              </label>
              <input type="number" step="0.01" min="0" max="100" id="rmi-dropping-head" name="droppingHead" value="${this.escape(droppingHeadVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="0.00 %" />
            </div>

            <!-- 5. BLACK SPOT/BLACK DOT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                BLACK SPOT/BLACK DOT
              </label>
              <input type="text" id="rmi-black-spot" name="blackSpot" value="${this.escape(blackSpotVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0 % or Count" />
            </div>

            <!-- 6. BROKEN/DAMAGES -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                BROKEN/DAMAGES
              </label>
              <input type="text" id="rmi-broken" name="broken" value="${this.escape(brokenVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0 % or Count" />
            </div>

            <!-- 7. IMPROPER LEGS/DECOMPOSITION/DISCOLORATION -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                IMPROPER LEGS/DECOMPOSITION/DISCOLORATION
              </label>
              <input type="text" id="rmi-improper-legs" name="improperLegs" value="${this.escape(improperLegsVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0 % or Count" />
            </div>

            <!-- 8. BENDS -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                BENDS
              </label>
              <input type="text" id="rmi-bends" name="bends" value="${this.escape(bendsVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0 % or Count" />
            </div>

            <!-- 9. MATERIAL IS FIT FOR HEAD ON PACKING OR NOT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                MATERIAL IS FIT FOR HEAD ON PACKING OR NOT <span class="text-[#DE350B]">*</span>
              </label>
              <select id="rmi-fit-head-on" name="fitForHeadOn" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="YES" ${fitForHeadOnVal !== 'NO' ? 'selected' : ''}>YES</option>
                <option value="NO" ${fitForHeadOnVal === 'NO' ? 'selected' : ''}>NO</option>
              </select>
            </div>

            <!-- 10. BIG PIECES -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                BIG PIECES
              </label>
              <input type="text" id="rmi-big-pieces" name="bigPieces" value="${this.escape(bigPiecesVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0" />
            </div>

            <!-- 11. SMALL PIECES -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                SMALL PIECES
              </label>
              <input type="text" id="rmi-small-pieces" name="smallPieces" value="${this.escape(smallPiecesVal)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0" />
            </div>

            <!-- 12. REMARKS (spans full row / 4 cols) -->
            <div class="sm:col-span-2 lg:col-span-4">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">
                REMARKS
              </label>
              <textarea id="rmi-remarks" name="remarks" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="Enter inspection remarks, sensory observations, or notes...">${this.escape(remarksVal)}</textarea>
            </div>
          </form>
        </div>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save',
          type: 'primary',
          onClick: () => {
            const checkedCount = document.getElementById('rmi-checked-count')?.value.trim();
            const redBlackGill = document.getElementById('rmi-red-black-gill')?.value.trim();
            const softShell = document.getElementById('rmi-soft-shell')?.value.trim();
            const droppingHead = document.getElementById('rmi-dropping-head')?.value.trim();
            const blackSpot = document.getElementById('rmi-black-spot')?.value.trim();
            const broken = document.getElementById('rmi-broken')?.value.trim();
            const improperLegs = document.getElementById('rmi-improper-legs')?.value.trim();
            const bends = document.getElementById('rmi-bends')?.value.trim();
            const fitForHeadOn = document.getElementById('rmi-fit-head-on')?.value || 'YES';
            const bigPieces = document.getElementById('rmi-big-pieces')?.value.trim();
            const smallPieces = document.getElementById('rmi-small-pieces')?.value.trim();
            const remarks = document.getElementById('rmi-remarks')?.value.trim();

            const target = this.state['rm-report']?.find(item => item.id === r.id) || r;
            target.checkedCount = checkedCount;
            target.redBlackGill = redBlackGill;
            target.softShell = softShell;
            target.droppingHead = droppingHead;
            target.blackSpot = blackSpot;
            target.broken = broken;
            target.improperLegs = improperLegs;
            target.bends = bends;
            target.fitForHeadOn = fitForHeadOn;
            target.bigPieces = bigPieces;
            target.smallPieces = smallPieces;
            target.remarks = remarks;

            if (checkedCount) {
              target.count = `${checkedCount} Count`;
            }
            if (remarks) {
              target.reason = remarks;
            }

            target.inspectionDetails = {
              checkedCount,
              redBlackGill,
              softShell,
              droppingHead,
              blackSpot,
              broken,
              improperLegs,
              bends,
              fitForHeadOn,
              bigPieces,
              smallPieces,
              remarks,
              updatedAt: new Date().toISOString()
            };

            this.persist();
            Modal.close();
            Toast.show('Raw Material Inspection details saved successfully', 'success');
            this.renderRegister('rm-report');
          }
        }
      ]
    });
  },

  openForm(key, row = null) {
    if (key === 'ab-report') {
      this.openAbReportForm(row);
      return;
    }
    if (key === 'mb-report') {
      this.openMbReportForm(row);
      return;
    }
    if (key === 'lab-report') {
      this.openLabReportForm(row);
      return;
    }
    if (!qcSchemas[key]) {
      this.openAbReportForm(row);
      return;
    }
    const schema = qcSchemas[key];
    const today = new Date().toISOString().slice(0, 10);
    Modal.open({
      title: `${row ? 'Edit' : 'Add'} ${schema.title}`,
      size: 'full',
      content: `<form id="qc-record-form" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
        ${schema.fields.map(field => {
          const value = row?.[field.key] ?? (field.key === 'exporter' ? this.exporterName(row || {}) : field.type === 'date' ? today : '');
          const options = field.type === 'lot' ? this.state['lots-list'].map(lot => lot.lot) : field.options;
          const numeric = ['number', 'temperature', 'percent', 'score'].includes(field.type);
          const inputType = numeric ? 'number' : ['date', 'time', 'datetime-local'].includes(field.type) ? field.type : 'text';
          const optional = ['certHealth', 'certCoa', 'certOrigin', 'bapNumber'].includes(field.key);
          const fieldId = `qc-field-${field.key.replace(/[^a-zA-Z0-9_-]/g, '-')}`;
          return `<div>
            <label for="${fieldId}" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">${this.escape(field.label)}${optional ? '' : ' <span class="text-[#DE350B]">*</span>'}</label>
            ${options
              ? `<select id="${fieldId}" name="${this.escape(field.key)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required><option value="">Select</option>${options.map(option => `<option value="${this.escape(option)}" ${option === value ? 'selected' : ''}>${this.escape(option)}</option>`).join('')}</select>`
              : field.type === 'date'
                ? `<div class="erp-date-wrapper"><input id="${fieldId}" name="${this.escape(field.key)}" type="date" value="${this.escape(value)}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" ${optional ? '' : 'required'} onclick="this.showPicker ? this.showPicker() : this.focus()" /></div>`
                : `<input id="${fieldId}" name="${this.escape(field.key)}" type="${inputType}" value="${this.escape(value)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" ${optional ? '' : 'required'} ${numeric ? `step="any" min="${field.type === 'temperature' ? '-50' : field.type === 'score' ? '1' : '0'}" ${field.type === 'score' ? 'max="5"' : field.type === 'percent' ? 'max="100"' : ''}` : ''} />`}
          </div>`;
        }).join('')}
        ${key === 'external-lab-report' ? `<div class="sm:col-span-2 lg:col-span-4 min-w-0 space-y-2">
          <label for="qc-coa-file" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COA Attachment</label>
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 border border-[#DFE1E6] rounded-lg bg-[#F8FAFC] p-3">
            <div class="flex items-start gap-3 flex-1 min-w-0">
              <span class="text-[#0284C7] shrink-0 mt-0.5" aria-hidden="true">${this.icon('FileText')}</span>
              <div class="min-w-0 flex-1">
                <p id="qc-coa-filename" class="font-semibold text-xs text-[#172B4D] break-all">${this.escape(row?.coaFileName || 'No file selected')}</p>
                <p id="qc-coa-metadata" class="text-[11px] text-[#5E6C84] mt-1">PDF / PNG / JPEG, up to 2 MB</p>
                <p id="qc-coa-feedback" class="text-[11px] text-[#5E6C84] mt-1 break-words" role="status" aria-live="polite"></p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <input id="qc-coa-file" type="file" accept="application/pdf,image/png,image/jpeg" class="sr-only peer" aria-describedby="qc-coa-metadata qc-coa-feedback" />
              <label for="qc-coa-file" class="btn-secondary inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold cursor-pointer peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[#0284C7]">
                <span aria-hidden="true">${this.icon('Upload')}</span><span id="qc-coa-browse-label">${row?.coaFileName ? 'Replace File' : 'Choose File'}</span>
              </label>
              <button type="button" id="qc-coa-clear" class="dt-action-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Remove attachment" aria-label="Remove attachment" style="${row?.coaFileName ? '' : 'display: none !important;'}">${this.icon('X')}</button>
              <input id="qc-coa-remove" type="checkbox" class="sr-only" tabindex="-1" aria-hidden="true" />
            </div>
          </div>
        </div>` : ''}
      </form>`,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        { label: 'Save Record', type: 'primary', onClick: () => document.getElementById('qc-record-form')?.requestSubmit() }
      ]
    });
    const form = document.getElementById('qc-record-form');
    form.addEventListener('submit', event => { event.preventDefault(); this.saveRecord(key, row, form); });
    const fileInput = document.getElementById('qc-coa-file');
    if (fileInput) {
      const removeInput = document.getElementById('qc-coa-remove');
      const clearButton = document.getElementById('qc-coa-clear');
      const feedback = document.getElementById('qc-coa-feedback');
      let activeReader = null;
      const updateAttachment = (file = null, message = '') => {
        const name = file?.name || form.qcAttachment?.coaFileName || (!removeInput.checked ? row?.coaFileName : '');
        const size = file ? file.size < 1024 ? `${file.size} B` : file.size < 1024 * 1024 ? `${(file.size / 1024).toFixed(1)} KB` : `${(file.size / (1024 * 1024)).toFixed(1)} MB` : '';
        document.getElementById('qc-coa-filename').textContent = name || 'No file selected';
        document.getElementById('qc-coa-metadata').textContent = file
          ? `${file.type === 'application/pdf' ? 'PDF' : file.type === 'image/png' ? 'PNG' : 'JPEG'} / ${size}`
          : 'PDF / PNG / JPEG, up to 2 MB';
        document.getElementById('qc-coa-browse-label').textContent = name ? 'Replace File' : 'Choose File';
        clearButton.style.setProperty('display', name ? 'inline-flex' : 'none', 'important');
        feedback.textContent = message;
        const invalid = /Invalid file|could not be read/.test(message);
        feedback.className = `text-[11px] mt-1 break-words ${invalid ? 'text-[#881337]' : 'text-[#5E6C84]'}`;
        fileInput.setAttribute('aria-invalid', String(invalid));
      };
      clearButton.addEventListener('click', () => {
        activeReader?.abort();
        activeReader = null;
        fileInput.value = '';
        form.qcAttachment = null;
        delete form.dataset.attachmentLoading;
        removeInput.checked = Boolean(row?.coaFileName);
        updateAttachment(null, 'Attachment removed');
      });
      fileInput.addEventListener('change', () => {
        activeReader?.abort();
        activeReader = null;
        delete form.dataset.attachmentLoading;
        const file = fileInput.files[0];
        if (!file) { updateAttachment(); return; }
        if (!['application/pdf', 'image/png', 'image/jpeg'].includes(file.type) || file.size > 2 * 1024 * 1024) {
          fileInput.value = '';
          updateAttachment(null, 'Invalid file: PDF, PNG, or JPEG, maximum 2 MB');
          return;
        }
        form.qcAttachment = null;
        removeInput.checked = false;
        const reader = new FileReader();
        activeReader = reader;
        form.dataset.attachmentLoading = 'true';
        updateAttachment(file, 'Reading attachment...');
        reader.onload = () => {
          if (activeReader !== reader || fileInput.files[0] !== file) return;
          form.qcAttachment = { coaFileName: file.name, coaFileData: reader.result };
          activeReader = null;
          delete form.dataset.attachmentLoading;
          updateAttachment(file, 'Ready');
        };
        reader.onerror = () => {
          if (activeReader !== reader) return;
          activeReader = null;
          fileInput.value = '';
          delete form.dataset.attachmentLoading;
          updateAttachment(null, 'The attachment could not be read');
        };
        reader.readAsDataURL(file);
      });
    }
  },


  openLabReportForm(row = null) {
    const today = new Date().toISOString().slice(0, 10);
    const val = (name, fallback = '') => row?.[name] ?? fallback;

    Modal.open({
      title: `${row ? 'Edit' : 'Add'} In-House Lab Report`,
      size: 'full',
      content: `
        <form id="form-lab-report" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: General Information Fields (4-Column Responsive Grid) -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">General Information Fields</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              <!-- 1. SAMPLE COLLECTION TIME -->
              <div>
                <label for="qclab-sample-time" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SAMPLE COLLECTION TIME <span class="text-[#DE350B]">*</span></label>
                <input type="time" id="qclab-sample-time" name="sampleCollectionTime" value="${this.escape(val('sampleCollectionTime', '09:30'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 2. DATE OF SAMPLING -->
              <div>
                <label for="qclab-sample-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DATE OF SAMPLING <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="qclab-sample-date" name="dateOfSampling" value="${this.escape(val('dateOfSampling') || val('reportDate') || today)}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 3. VERIFIED BY -->
              <div>
                <label for="qclab-verified-by" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VERIFIED BY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qclab-verified-by" name="verifiedBy" value="${this.escape(val('verifiedBy', 'Dr. S. Rao'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required placeholder="Verifier name" />
              </div>

              <!-- 4. TESTED BY -->
              <div>
                <label for="qclab-tested-by" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TESTED BY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qclab-tested-by" name="testedBy" value="${this.escape(val('testedBy', 'R. K. Patnaik'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required placeholder="Tester / Analyst name" />
              </div>
            </div>
          </div>

          <!-- Section 2: Parameter Values (4-Column Responsive Grid) -->
          <div class="border-t border-[#DFE1E6] pt-3 space-y-2">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Parameter Values</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              <!-- 5. PH VALUE -->
              <div>
                <label for="qclab-ph" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">5. PH VALUE <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.01" min="0" max="14" id="qclab-ph" name="phValue" value="${this.escape(val('phValue', '7.40'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 7.4" required />
              </div>

              <!-- 6. TEMPERATURE -->
              <div>
                <label for="qclab-temperature" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">6. TEMPERATURE (°C) <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="0.1" id="qclab-temperature" name="temperature" value="${this.escape(val('temperature', '24.5'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 24.5" required />
              </div>

              <!-- 7. SALINITY -->
              <div>
                <label for="qclab-salinity" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">7. SALINITY (PPT) <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="any" min="0" id="qclab-salinity" name="salinity" value="${this.escape(val('salinity', '15.0'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 15.0" required />
              </div>

              <!-- 8. HARDNESS -->
              <div>
                <label for="qclab-hardness" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">8. HARDNESS (PPM) <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="any" min="0" id="qclab-hardness" name="hardness" value="${this.escape(val('hardness', '120'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 120" required />
              </div>

              <!-- 9. CHLORINE -->
              <div>
                <label for="qclab-chlorine" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">9. CHLORINE (PPM) <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="any" min="0" id="qclab-chlorine" name="chlorine" value="${this.escape(val('chlorine', '0.5'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 0.5" required />
              </div>

              <!-- 10. TOTAL DISSOLVED SOLIDS -->
              <div>
                <label for="qclab-tds" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">10. TOTAL DISSOLVED SOLIDS <span class="text-[#DE350B]">*</span></label>
                <input type="number" step="any" min="0" id="qclab-tds" name="totalDissolvedSolids" value="${this.escape(val('totalDissolvedSolids', '850'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. 850" required />
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Record',
          type: 'primary',
          onClick: () => {
            const form = document.getElementById('form-lab-report');
            if (!form || !form.reportValidity()) return;

            const sampleCollectionTime = document.getElementById('qclab-sample-time')?.value;
            const dateOfSampling = document.getElementById('qclab-sample-date')?.value || today;
            const verifiedBy = document.getElementById('qclab-verified-by')?.value.trim();
            const testedBy = document.getElementById('qclab-tested-by')?.value.trim();
            const phValue = Number(document.getElementById('qclab-ph')?.value) || 7.4;
            const temperature = Number(document.getElementById('qclab-temperature')?.value) || 24.5;
            const salinity = Number(document.getElementById('qclab-salinity')?.value) || 15.0;
            const hardness = Number(document.getElementById('qclab-hardness')?.value) || 120;
            const chlorine = Number(document.getElementById('qclab-chlorine')?.value) || 0.5;
            const totalDissolvedSolids = Number(document.getElementById('qclab-tds')?.value) || 850;

            const entry = {
              ...(row || {}),
              id: row?.id || `QC-lab-report-${Date.now()}`,
              reportDate: dateOfSampling,
              date: dateOfSampling,
              sampleCollectionTime,
              dateOfSampling,
              verifiedBy,
              testedBy,
              phValue,
              temperature,
              salinity,
              hardness,
              chlorine,
              totalDissolvedSolids,
              status: (phValue >= 6.5 && phValue <= 8.5) ? 'Pass' : 'Hold',
              updatedAt: new Date().toISOString()
            };

            this.evaluate('lab-report', entry);
            if (row) {
              this.state['lab-report'] = this.state['lab-report'].map(item => item.id === row.id ? entry : item);
            } else {
              this.state['lab-report'].unshift(entry);
            }
            this.synchronize();
            this.persist();
            Modal.close();
            this.renderRegister('lab-report');
            Toast.show('In-House Lab record saved successfully.', 'success');
          }
        }
      ]
    });
  },

  openMbReportForm(row = null) {
    const today = new Date().toISOString().slice(0, 10);
    const plants = [
      'DFL UNIT-5 (JPT)',
      'DFL UNIT-3 (PSP)',
      'DFL UNIT-4 (PND)',
      'DFL UNIT-1 (VSP)',
      'DFL UNIT-6 (JPT-II)',
      'DFL UNIT-2 (KKD)'
    ];

    const val = (name, fallback = '') => row?.[name] ?? fallback;
    let mbRows = row?.mbRows ? JSON.parse(JSON.stringify(row.mbRows)) : (
      row ? [] : [
        { sNo: 1, poNo: 'PO-2026-001', buyer: 'Pacific Seafood Inc', parameter: 'TPC (CFU/g)', analysisDate: today, result: 'Pass' }
      ]
    );

    Modal.open({
      title: `${row ? 'Edit' : 'Add'} Microbiology Report`,
      size: 'full',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Section 1: Facility & Inspector Information (Strict 4-Column Responsive Grid) -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Facility &amp; Inspector Information</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              <!-- 1. Unit Name -->
              <div class="sm:col-span-2">
                <label for="qcmb-unit-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">UNIT NAME <span class="text-[#DE350B]">*</span></label>
                <select id="qcmb-unit-name" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
                  ${plants.map(p => `<option value="${p}" ${val('unitName', 'DFL UNIT-5 (JPT)') === p ? 'selected' : ''}>${p}</option>`).join('')}
                </select>
              </div>

              <!-- 2. Analysed By -->
              <div>
                <label for="qcmb-analysed-by" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ANALYSED BY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcmb-analysed-by" value="${this.escape(val('analysedBy', 'R. K. Patnaik'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required placeholder="Inspector name" />
              </div>

              <!-- 3. Verified By -->
              <div>
                <label for="qcmb-verified-by" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VERIFIED BY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcmb-verified-by" value="${this.escape(val('verifiedBy', 'Dr. S. Rao'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required placeholder="Verifier name" />
              </div>
            </div>
          </div>

          <!-- Section 2: Input Fields & Save Button for Inner Table (Strict 4-Column Responsive Grid) -->
          <div class="border-t border-[#DFE1E6] pt-3 space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Add Microbiology Test Entry</h4>
              <button type="button" id="btn-save-mb-row" class="btn-primary rounded-full px-5 py-1.5 text-xs font-bold shadow-2xs hover:shadow-xs transition-all cursor-pointer inline-flex items-center gap-1.5 border-0">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Save</span>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              <!-- PO No -->
              <div>
                <label for="qcmb-input-po" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcmb-input-po" value="${this.escape(val('poNo', 'PO-2026-001'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. PO-2026-001" />
              </div>

              <!-- Buyer Name -->
              <div>
                <label for="qcmb-input-buyer" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BUYER NAME <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcmb-input-buyer" value="${this.escape(val('buyer', 'Pacific Seafood Inc'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. Pacific Seafood Inc" />
              </div>

              <!-- Parameter -->
              <div>
                <label for="qcmb-input-param" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PARAMETER <span class="text-[#DE350B]">*</span></label>
                <select id="qcmb-input-param" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                  <option value="TPC (CFU/g)">TPC (CFU/g)</option>
                  <option value="E. coli (MPN/g)">E. coli (MPN/g)</option>
                  <option value="Coliforms (MPN/g)">Coliforms (MPN/g)</option>
                  <option value="Salmonella (25g)">Salmonella (25g)</option>
                  <option value="Vibrio cholerae (25g)">Vibrio cholerae (25g)</option>
                  <option value="Vibrio parahaemolyticus (25g)">Vibrio parahaemolyticus (25g)</option>
                  <option value="S. aureus (CFU/g)">S. aureus (CFU/g)</option>
                  <option value="L. monocytogenes (25g)">L. monocytogenes (25g)</option>
                  <option value="Faecal Streptococci">Faecal Streptococci</option>
                  <option value="Total Yeast &amp; Mould">Total Yeast &amp; Mould</option>
                </select>
              </div>

              <!-- Analysis Date -->
              <div>
                <label for="qcmb-input-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ANALYSIS DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="qcmb-input-date" value="${today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- Result -->
              <div>
                <label for="qcmb-input-result" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RESULT <span class="text-[#DE350B]">*</span></label>
                <select id="qcmb-input-result" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]">
                  <option value="Pass">Pass</option>
                  <option value="Fail">Fail</option>
                  <option value="Absent">Absent</option>
                  <option value="Present">Present</option>
                  <option value="Negative">Negative</option>
                  <option value="Positive">Positive</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 3: The Table (S.No, PO No, Buyer Name, Parameter, Analysis Date, Result, Remove) -->
          <div class="border-t border-[#DFE1E6] pt-3 space-y-2">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Microbiology Test Breakdown Table</h4>
            <div id="qcmb-table-container">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        {
          label: 'Save Record',
          type: 'primary',
          onClick: () => {
            const unitName = document.getElementById('qcmb-unit-name')?.value;
            const analysedBy = document.getElementById('qcmb-analysed-by')?.value.trim();
            const verifiedBy = document.getElementById('qcmb-verified-by')?.value.trim();

            if (!analysedBy) { Toast.show('Please enter Analysed By.', 'warning'); return; }
            if (!verifiedBy) { Toast.show('Please enter Verified By.', 'warning'); return; }

            const primaryRow = mbRows[0] || {};
            const poNo = primaryRow.poNo || row?.poNo || 'PO-2026-001';
            const buyer = primaryRow.buyer || row?.buyer || 'Pacific Seafood Inc';
            const reportDate = primaryRow.analysisDate || row?.reportDate || today;

            const entry = {
              ...(row || {}),
              id: row?.id || `QC-mb-report-${Date.now()}`,
              poNo,
              buyer,
              reportDate,
              date: reportDate,
              unitName: unitName || 'DFL UNIT-5 (JPT)',
              analysedBy,
              verifiedBy,
              mbRows: [...mbRows],
              status: mbRows.some(r => r.result === 'Fail' || r.result === 'Present') ? 'Fail' : 'Pass',
              updatedAt: new Date().toISOString()
            };

            this.evaluate('mb-report', entry);
            if (row) {
              this.state['mb-report'] = this.state['mb-report'].map(item => item.id === row.id ? entry : item);
            } else {
              this.state['mb-report'].unshift(entry);
            }
            this.synchronize();
            this.persist();
            Modal.close();
            this.renderRegister('mb-report');
            Toast.show('Microbiology Report saved successfully.', 'success');
          }
        }
      ]
    });

    const renderMbTable = () => {
      const container = document.getElementById('qcmb-table-container');
      if (!container) return;

      if (!mbRows || mbRows.length === 0) {
        container.innerHTML = `
          <div class="border-y border-[#DFE1E6] py-8 text-center bg-[#FAFBFC]">
            <h4 class="text-xs font-bold text-[#172B4D]">No Data Available</h4>
          </div>
        `;
        return;
      }

      container.innerHTML = `
        <div class="bg-white rounded-none border border-[#DFE1E6] shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="erp-table w-full text-left text-xs border-collapse">
              <thead class="bg-[#FAFBFC] border-b border-[#DFE1E6] text-[#475569] font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th class="py-2.5 px-3 min-w-[60px]">S.No</th>
                  <th class="py-2.5 px-3 min-w-[130px]">PO No</th>
                  <th class="py-2.5 px-3 min-w-[160px]">Buyer Name</th>
                  <th class="py-2.5 px-3 min-w-[160px]">Parameter</th>
                  <th class="py-2.5 px-3 min-w-[130px]">Analysis Date</th>
                  <th class="py-2.5 px-3 min-w-[110px]">Result</th>
                  <th class="py-2.5 px-3 min-w-[80px] text-center">Remove</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                ${mbRows.map((r, idx) => `
                  <tr class="hover:bg-[#F8FAFC] transition-colors">
                    <td class="py-2 px-3 font-bold text-[#5E6C84]">${idx + 1}</td>
                    <td class="py-2 px-3 font-mono font-bold text-[#00A4B7]">${this.escape(r.poNo || '-')}</td>
                    <td class="py-2 px-3 font-semibold text-[#172B4D]">${this.escape(r.buyer || '-')}</td>
                    <td class="py-2 px-3 font-medium text-[#172B4D]">${this.escape(r.parameter || '-')}</td>
                    <td class="py-2 px-3 text-[#172B4D]">${r.analysisDate ? String(r.analysisDate).split('-').reverse().join('-') : '-'}</td>
                    <td class="py-2 px-3">${this.badge(r.result || 'Pass')}</td>
                    <td class="py-2 px-3 text-center">
                      <button type="button" data-index="${idx}" class="btn-remove-mb-row text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer inline-flex items-center justify-center border-0 bg-transparent" title="Remove row">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      container.querySelectorAll('.btn-remove-mb-row').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
          mbRows.splice(idx, 1);
          renderMbTable();
          Toast.show('Item removed from table.', 'info');
        });
      });
    };

    renderMbTable();

    // Event listener for Save button (adds data into table)
    document.getElementById('btn-save-mb-row')?.addEventListener('click', () => {
      const poNo = document.getElementById('qcmb-input-po')?.value.trim();
      const buyer = document.getElementById('qcmb-input-buyer')?.value.trim();
      const parameter = document.getElementById('qcmb-input-param')?.value;
      const analysisDate = document.getElementById('qcmb-input-date')?.value;
      const result = document.getElementById('qcmb-input-result')?.value;

      if (!poNo) {
        Toast.show('Please enter PO No.', 'warning');
        document.getElementById('qcmb-input-po')?.focus();
        return;
      }
      if (!buyer) {
        Toast.show('Please enter Buyer Name.', 'warning');
        document.getElementById('qcmb-input-buyer')?.focus();
        return;
      }
      if (!parameter) {
        Toast.show('Please select a Parameter.', 'warning');
        return;
      }

      mbRows.push({
        sNo: mbRows.length + 1,
        poNo,
        buyer,
        parameter,
        analysisDate: analysisDate || today,
        result: result || 'Pass'
      });

      renderMbTable();
      Toast.show('Microbiology test entry added to table.', 'success');
    });
  },

    openAbReportForm(row = null) {
    const today = new Date().toISOString().slice(0, 10);
    const lotOptions = [...new Set(this.state['lots-list'].map(item => item.lot))];
    if (row?.lot && !lotOptions.includes(row.lot)) {
      lotOptions.unshift(row.lot);
    }
    if (!lotOptions.includes('LOT-2026-00125')) lotOptions.push('LOT-2026-00125');
    if (!lotOptions.includes('LOT-2026-00126')) lotOptions.push('LOT-2026-00126');
    if (!lotOptions.includes('LOT-2026-00127')) lotOptions.push('LOT-2026-00127');

    const plants = [
      'DFL UNIT-5 (JPT)',
      'DFL UNIT-3 (PSP)',
      'DFL UNIT-4 (PND)',
      'DFL UNIT-1 (VSP)',
      'DFL UNIT-6 (JPT-II)',
      'DFL UNIT-2 (KKD)'
    ];

    const val = (name, fallback = '') => row?.[name] ?? fallback;

    // Sample rows state for inner breakdown table
    let sampleRows = row?.sampleRows ? [...row.sampleRows] : [];

    Modal.open({
      title: `${row ? 'Edit' : 'Add'} Antibiotic & Chemical Testing Record (ELISA)`,
      size: 'full',
      content: `
        <form id="qc-record-form" class="space-y-4" onsubmit="return false;">
          <!-- Section 1: Facility & Inspection Meta -->
          <div class="space-y-3 pb-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Inspection &amp; Facility Information</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <!-- 1. LOT NO -->
              <div>
                <label for="qcf-lot" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOT NO <span class="text-[#DE350B]">*</span></label>
                <select id="qcf-lot" name="lot" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" required>
                  ${lotOptions.map(l => `<option value="${this.escape(l)}" ${val('lot', 'BLS/2627/0143') === l ? 'selected' : ''}>${this.escape(l)}</option>`).join('')}
                </select>
              </div>

              <!-- 2. PLANT -->
              <div>
                <label for="qcf-plant" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT <span class="text-[#DE350B]">*</span></label>
                <select id="qcf-plant" name="plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
                  ${plants.map(p => `<option value="${p}" ${val('plant', 'DFL UNIT-5 (JPT)') === p ? 'selected' : ''}>${p}</option>`).join('')}
                </select>
              </div>

              <!-- 3. ANALYSIS DATE -->
              <div>
                <label for="qcf-analysis-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ANALYSIS DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="qcf-analysis-date" name="analysisDate" value="${val('analysisDate') || val('date') || today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 4. REPORT DATE -->
              <div>
                <label for="qcf-report-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REPORT DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="qcf-report-date" name="reportDate" value="${val('reportDate') || today}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" required onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 5. SHIFT -->
              <div>
                <label for="qcf-shift" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
                <select id="qcf-shift" name="shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
                  <option value="Shift 1 (06:00 - 14:00)" ${val('shift', 'Shift 1 (06:00 - 14:00)') === 'Shift 1 (06:00 - 14:00)' ? 'selected' : ''}>Shift 1 (06:00 - 14:00)</option>
                  <option value="Shift 2 (14:00 - 22:00)" ${val('shift') === 'Shift 2 (14:00 - 22:00)' ? 'selected' : ''}>Shift 2 (14:00 - 22:00)</option>
                  <option value="Shift 3 (22:00 - 06:00)" ${val('shift') === 'Shift 3 (22:00 - 06:00)' ? 'selected' : ''}>Shift 3 (22:00 - 06:00)</option>
                  <option value="General Shift (09:00 - 18:00)" ${val('shift') === 'General Shift (09:00 - 18:00)' ? 'selected' : ''}>General Shift (09:00 - 18:00)</option>
                </select>
              </div>

              <!-- 6. TESTED BY -->
              <div>
                <label for="qcf-tested-by" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TESTED BY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcf-tested-by" name="testedBy" value="${this.escape(val('testedBy', val('collectedBy', 'R. K. Patnaik')))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 7. VERIFIED BY -->
              <div class="sm:col-span-2">
                <label for="qcf-verified-by" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VERIFIED BY <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcf-verified-by" name="verifiedBy" value="${this.escape(val('verifiedBy', val('inspector', 'Dr. S. Rao')))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>
            </div>
          </div>

          <!-- Section 2: Sample Specifications -->
          <div class="space-y-3 pb-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Sample Specifications &amp; Loading Logistics</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <!-- 8. SAMPLE TYPE -->
              <div>
                <label for="qcf-sample-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SAMPLE TYPE <span class="text-[#DE350B]">*</span></label>
                <select id="qcf-sample-type" name="sampleType" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
                  <option value="Raw Material (Head-On)" ${val('sampleType', 'Raw Material (Head-On)') === 'Raw Material (Head-On)' ? 'selected' : ''}>Raw Material (Head-On)</option>
                  <option value="Headless (HL)" ${val('sampleType') === 'Headless (HL)' ? 'selected' : ''}>Headless (HL)</option>
                  <option value="Peeling (PD / PUD)" ${val('sampleType') === 'Peeling (PD / PUD)' ? 'selected' : ''}>Peeling (PD / PUD)</option>
                  <option value="Finished Goods (IQF / Block)" ${val('sampleType') === 'Finished Goods (IQF / Block)' ? 'selected' : ''}>Finished Goods (IQF / Block)</option>
                  <option value="Pond Pre-Harvest Sample" ${val('sampleType') === 'Pond Pre-Harvest Sample' ? 'selected' : ''}>Pond Pre-Harvest Sample</option>
                  <option value="Water / Ice Sample" ${val('sampleType') === 'Water / Ice Sample' ? 'selected' : ''}>Water / Ice Sample</option>
                </select>
              </div>

              <!-- 9. SAMPLE DETAILS -->
              <div>
                <label for="qcf-sample-details" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SAMPLE DETAILS <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcf-sample-details" name="sampleDetails" value="${this.escape(val('sampleDetails', 'Litopenaeus Vannamei (Fresh Harvest)'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 10. COUNT -->
              <div>
                <label for="qcf-count" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">COUNT <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcf-count" name="count" value="${this.escape(val('count', '31/40 Count'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 11. QUANTITY -->
              <div>
                <label for="qcf-quantity" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">QUANTITY (KG) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-quantity" name="quantity" value="${val('quantity', val('weight', 2500))}" min="1" step="any" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 12. LOADING STATUS -->
              <div>
                <label for="qcf-loading-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOADING STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="qcf-loading-status" name="loadingStatus" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" required>
                  <option value="Approved for Loading" ${val('loadingStatus', 'Approved for Loading') === 'Approved for Loading' ? 'selected' : ''}>Approved for Loading</option>
                  <option value="Passed & Cleared" ${val('loadingStatus') === 'Passed & Cleared' ? 'selected' : ''}>Passed &amp; Cleared</option>
                  <option value="In Progress" ${val('loadingStatus') === 'In Progress' ? 'selected' : ''}>In Progress</option>
                  <option value="Pending Inspection" ${val('loadingStatus') === 'Pending Inspection' ? 'selected' : ''}>Pending Inspection</option>
                  <option value="On Hold" ${val('loadingStatus') === 'On Hold' ? 'selected' : ''}>On Hold</option>
                  <option value="Rejected" ${val('loadingStatus') === 'Rejected' ? 'selected' : ''}>Rejected</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 3: Testing Parameters & Chemical / Sulphite Residue -->
          <div class="space-y-3 pb-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Testing Protocol &amp; Sulphite Screening</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <!-- 13. PARAMETER -->
              <div>
                <label for="qcf-parameter" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PARAMETER <span class="text-[#DE350B]">*</span></label>
                <select id="qcf-parameter" name="parameter" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required>
                  <option value="ELISA 5-Antibiotic Panel + Sulphite" ${val('parameter', 'ELISA 5-Antibiotic Panel + Sulphite') === 'ELISA 5-Antibiotic Panel + Sulphite' ? 'selected' : ''}>ELISA 5-Antibiotic Panel + Sulphite</option>
                  <option value="Full Chemical & Antibiotic Residue" ${val('parameter') === 'Full Chemical & Antibiotic Residue' ? 'selected' : ''}>Full Chemical &amp; Antibiotic Residue</option>
                  <option value="Pre-Harvest Screening (ELISA)" ${val('parameter') === 'Pre-Harvest Screening (ELISA)' ? 'selected' : ''}>Pre-Harvest Screening (ELISA)</option>
                  <option value="Chloramphenicol & Nitrofurans (CAP/AOZ)" ${val('parameter') === 'Chloramphenicol & Nitrofurans (CAP/AOZ)' ? 'selected' : ''}>Chloramphenicol &amp; Nitrofurans (CAP/AOZ)</option>
                </select>
              </div>

              <!-- 14. SULPHITE -->
              <div>
                <label for="qcf-sulphite" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SULPHITE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="qcf-sulphite" name="sulphite" value="${this.escape(val('sulphite', 'Negative (< 10 ppm)'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required placeholder="e.g. Negative (< 10 ppm) or 8 ppm" />
              </div>
            </div>
          </div>

          <!-- Section 4: Antibiotic Residue Panel (ppb) -->
          <div class="space-y-3 pb-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Antibiotic Residues (ppb / Limit: &lt; 0.10 ppb)</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <!-- 15. AOZ -->
              <div>
                <label for="qcf-aoz" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">AOZ (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-aoz" name="AOZ" value="${val('AOZ', 0.02)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 16. SEM -->
              <div>
                <label for="qcf-sem" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SEM (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-sem" name="SEM" value="${val('SEM', 0.02)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 17. CAP -->
              <div>
                <label for="qcf-cap" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CAP (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-cap" name="CAP" value="${val('CAP', 0.01)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 18. AHD -->
              <div>
                <label for="qcf-ahd" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">AHD (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-ahd" name="AHD" value="${val('AHD', 0.02)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>

              <!-- 19. AMOZ -->
              <div>
                <label for="qcf-amoz" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">AMOZ (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-amoz" name="AMOZ" value="${val('AMOZ', 0.02)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" required />
              </div>
            </div>
          </div>

          <!-- Section 5: Evaluation & Remarks -->
          <div class="space-y-3 pb-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <!-- 20. RESULT -->
              <div>
                <label for="qcf-result" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RESULT <span class="text-[#DE350B]">*</span></label>
                <select id="qcf-result" name="result" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" required>
                  <option value="Pass" ${val('result', val('status', 'Pass')) === 'Pass' ? 'selected' : ''}>Pass</option>
                  <option value="Fail" ${val('result', val('status')) === 'Fail' ? 'selected' : ''}>Fail</option>
                  <option value="NEGATIVE" ${val('result', val('status')) === 'NEGATIVE' ? 'selected' : ''}>NEGATIVE</option>
                  <option value="POSITIVE" ${val('result', val('status')) === 'POSITIVE' ? 'selected' : ''}>POSITIVE</option>
                  <option value="Pending" ${val('result', val('status')) === 'Pending' ? 'selected' : ''}>Pending</option>
                  <option value="Hold" ${val('result', val('status')) === 'Hold' ? 'selected' : ''}>Hold</option>
                </select>
              </div>

              <!-- 21. REMARKS -->
              <div class="sm:col-span-2 lg:col-span-3">
                <label for="qcf-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
                <input type="text" id="qcf-remarks" name="remarks" value="${this.escape(val('remarks', 'Compliant with USFDA & EU MRL standards. Cleared for processing.'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
              </div>
            </div>
          </div>

          <!-- Section 6: Inner Breakdown Table Header & Save Button -->
          <div class="space-y-2 mt-4">
            <div class="mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">QC Sample Antibiotic &amp; Chemical Testing Table</h4>
            </div>

            <!-- Dynamic Table Container -->
            <div id="qc-samples-table-container">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        { label: 'Save', type: 'primary', onClick: () => document.getElementById('qc-record-form')?.requestSubmit() }
      ]
    });

    const form = document.getElementById('qc-record-form');
    if (!form) return;

    // Helper to render the inner QC Samples Table
    const renderSamplesTable = () => {
      const container = document.getElementById('qc-samples-table-container');
      if (!container) return;

      if (!sampleRows || sampleRows.length === 0) {
        container.innerHTML = `
          <div class="border-y border-[#DFE1E6] py-8 text-center">
            <h4 class="text-xs font-bold text-[#172B4D]">No Data Available</h4>
          </div>
        `;
        return;
      }

      const totalQty = sampleRows.reduce((sum, r) => sum + (Number(r.quantity) || 0), 0);

      container.innerHTML = `
        <div class="bg-white rounded-none border border-[#DFE1E6] overflow-hidden">
          <div class="overflow-x-auto" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch;">
            <table class="erp-table w-full text-left text-xs border-collapse" style="min-width: 1450px;">
              <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th class="py-2.5 px-3 min-w-[140px]">Sample</th>
                  <th class="py-2.5 px-3 min-w-[130px]">Lot No</th>
                  <th class="py-2.5 px-3 min-w-[100px]">Count</th>
                  <th class="py-2.5 px-3 min-w-[110px] text-right">Quantity</th>
                  <th class="py-2.5 px-2 min-w-[85px] text-right">AOZ</th>
                  <th class="py-2.5 px-2 min-w-[85px] text-right">SEM</th>
                  <th class="py-2.5 px-2 min-w-[85px] text-right">CAP</th>
                  <th class="py-2.5 px-2 min-w-[85px] text-right">AHD</th>
                  <th class="py-2.5 px-2 min-w-[85px] text-right">AMOZ</th>
                  <th class="py-2.5 px-3 min-w-[150px] text-center">Loading Status</th>
                  <th class="py-2.5 px-3 min-w-[130px]">Shift</th>
                  <th class="py-2.5 px-3 min-w-[200px]">Remarks</th>
                  <th class="py-2.5 px-3 min-w-[130px]">Tested By</th>
                  <th class="py-2.5 px-2 w-16 text-center">Actions</th>
                </tr>
              </thead>
              <tbody id="qc-samples-tbody" class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                ${sampleRows.map((sr, idx) => {
                  const numAoz = Number(sr.aoz);
                  const numSem = Number(sr.sem);
                  const numCap = Number(sr.cap);
                  const numAhd = Number(sr.ahd);
                  const numAmoz = Number(sr.amoz);
                  const statusCls = sr.loadingStatus === 'Approved for Loading' || sr.loadingStatus === 'Passed & Cleared'
                    ? 'bg-[#E3FCEF] text-[#006644]'
                    : sr.loadingStatus === 'On Hold'
                      ? 'bg-[#FFF0B3] text-[#172B4D]'
                      : sr.loadingStatus === 'Rejected'
                        ? 'bg-[#FFEBE6] text-[#BF2600]'
                        : 'bg-[#EAE6FF] text-[#403294]';
                  return `
                    <tr class="hover:bg-[#F8FAFC] transition-colors" data-row-idx="${idx}">
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${this.escape(sr.sample || `SMP-${String(idx + 1).padStart(2, '0')}`)}</td>
                      <td class="py-2.5 px-3 font-mono font-bold text-[#00A4B7]">${this.escape(sr.lotNo || '-')}</td>
                      <td class="py-2.5 px-3 font-mono font-medium">${this.escape(sr.count || '-')}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${Number(sr.quantity || 0).toLocaleString()} Kg</td>
                      <td class="py-2.5 px-2 text-right font-mono ${numAoz >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(numAoz) ? numAoz.toFixed(2) : '-'}</td>
                      <td class="py-2.5 px-2 text-right font-mono ${numSem >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(numSem) ? numSem.toFixed(2) : '-'}</td>
                      <td class="py-2.5 px-2 text-right font-mono ${numCap >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(numCap) ? numCap.toFixed(2) : '-'}</td>
                      <td class="py-2.5 px-2 text-right font-mono ${numAhd >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(numAhd) ? numAhd.toFixed(2) : '-'}</td>
                      <td class="py-2.5 px-2 text-right font-mono ${numAmoz >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(numAmoz) ? numAmoz.toFixed(2) : '-'}</td>
                      <td class="py-2.5 px-3 text-center">
                        <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${statusCls}">${this.escape(sr.loadingStatus || 'Approved for Loading')}</span>
                      </td>
                      <td class="py-2.5 px-3 font-medium text-[#475569]">${this.escape(sr.shift || '-')}</td>
                      <td class="py-2.5 px-3 text-[#475569] truncate max-w-[200px]" title="${this.escape(sr.remarks || '')}">${this.escape(sr.remarks || '-')}</td>
                      <td class="py-2.5 px-3 font-medium text-[#172B4D]">${this.escape(sr.testedBy || '-')}</td>
                      <td class="py-2.5 px-2 text-center">
                        <button type="button" class="btn-delete-qc-sample dt-action-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full transition-colors cursor-pointer" data-idx="${idx}" title="Delete Sample" aria-label="Delete Sample">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
              <tfoot class="bg-[#F8FAFC] border-t-2 border-[#DFE1E6] font-bold text-xs text-[#0F172A]">
                <tr>
                  <td colspan="3" class="py-2.5 px-3 text-right uppercase tracking-wider text-[#475569]">Total Quantity:</td>
                  <td class="py-2.5 px-3 text-right font-mono text-sm text-[#00875A]">${totalQty.toLocaleString()} Kg</td>
                  <td colspan="10" class="py-2.5 px-3 text-right text-[11px] text-[#64748B] italic">All 5 Antibiotic Metabolites within LOD / MRL specifications</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      `;

      // Attach row deletion handlers
      container.querySelectorAll('.btn-delete-qc-sample').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
          if (!isNaN(idx)) {
            sampleRows.splice(idx, 1);
            renderSamplesTable();
            Toast.show('Sample testing item removed.', 'info');
          }
        });
      });
    };

    // Initial render of the samples table (empty state if new record, or existing samples if editing)
    renderSamplesTable();

    // Auto-update Result based on Antibiotic Values
    const updateAutoResult = () => {
      const aoz = parseFloat(document.getElementById('qcf-aoz')?.value) || 0;
      const sem = parseFloat(document.getElementById('qcf-sem')?.value) || 0;
      const cap = parseFloat(document.getElementById('qcf-cap')?.value) || 0;
      const ahd = parseFloat(document.getElementById('qcf-ahd')?.value) || 0;
      const amoz = parseFloat(document.getElementById('qcf-amoz')?.value) || 0;
      const resultSelect = document.getElementById('qcf-result');
      if (!resultSelect) return;
      if (aoz >= 0.1 || sem >= 0.1 || cap >= 0.1 || ahd >= 0.1 || amoz >= 0.1) {
        resultSelect.value = 'Fail';
        resultSelect.className = resultSelect.className.replace('text-[#00875A]', 'text-[#DE350B]');
      } else {
        resultSelect.value = 'Pass';
        resultSelect.className = resultSelect.className.replace('text-[#DE350B]', 'text-[#00875A]');
      }
    };

    form.querySelectorAll('.qc-ab-input').forEach(input => {
      input.addEventListener('input', updateAutoResult);
    });

    // Save button above table - validates form, generates/saves samples, and saves record
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const lot = document.getElementById('qcf-lot')?.value || 'BLS/2627/0143';
      const plant = document.getElementById('qcf-plant')?.value || 'DFL UNIT-5 (JPT)';
      const analysisDate = document.getElementById('qcf-analysis-date')?.value || today;
      const reportDate = document.getElementById('qcf-report-date')?.value || today;
      const shift = document.getElementById('qcf-shift')?.value || 'Shift 1 (06:00 - 14:00)';
      const testedBy = document.getElementById('qcf-tested-by')?.value || 'R. K. Patnaik';
      const verifiedBy = document.getElementById('qcf-verified-by')?.value || 'Dr. S. Rao';
      const sampleType = document.getElementById('qcf-sample-type')?.value || 'Raw Material (Head-On)';
      const sampleDetails = document.getElementById('qcf-sample-details')?.value || 'Fresh Harvest White Shrimp';
      const count = document.getElementById('qcf-count')?.value || '31/40 Count';
      const quantity = parseFloat(document.getElementById('qcf-quantity')?.value) || 2500;
      const loadingStatus = document.getElementById('qcf-loading-status')?.value || 'Approved for Loading';
      const parameter = document.getElementById('qcf-parameter')?.value || 'ELISA 5-Antibiotic Panel + Sulphite';
      const sulphite = document.getElementById('qcf-sulphite')?.value || 'Negative (< 10 ppm)';
      const aoz = parseFloat(document.getElementById('qcf-aoz')?.value) || 0.02;
      const sem = parseFloat(document.getElementById('qcf-sem')?.value) || 0.02;
      const cap = parseFloat(document.getElementById('qcf-cap')?.value) || 0.01;
      const ahd = parseFloat(document.getElementById('qcf-ahd')?.value) || 0.02;
      const amoz = parseFloat(document.getElementById('qcf-amoz')?.value) || 0.02;
      const result = document.getElementById('qcf-result')?.value || 'Pass';
      const remarks = document.getElementById('qcf-remarks')?.value || 'Compliant with USFDA & EU MRL standards. Cleared for processing.';

      // Generate sample rows if empty or update them
      if (sampleRows.length === 0) {
        const q1 = Math.round(quantity * 0.6) || 1500;
        const q2 = (quantity - q1) > 0 ? (quantity - q1) : Math.round(quantity * 0.4) || 1000;
        sampleRows = [
          {
            sample: `SMP-01 (${sampleType})`,
            lotNo: lot,
            count: count,
            quantity: q1,
            aoz: aoz,
            sem: sem,
            cap: cap,
            ahd: ahd,
            amoz: amoz,
            loadingStatus: loadingStatus,
            shift: shift,
            remarks: remarks,
            testedBy: testedBy
          },
          {
            sample: 'SMP-02 (Duplicate Aliquot)',
            lotNo: lot,
            count: count,
            quantity: q2,
            aoz: Number((aoz * 0.95).toFixed(2)),
            sem: Number((sem * 1.02).toFixed(2)),
            cap: cap,
            ahd: ahd,
            amoz: amoz,
            loadingStatus: loadingStatus,
            shift: shift,
            remarks: 'Duplicate screening verified. MRL compliant.',
            testedBy: testedBy
          }
        ];
      } else {
        // Sync existing rows with updated form fields
        sampleRows.forEach(sr => {
          sr.lotNo = lot;
          sr.count = count;
          sr.loadingStatus = loadingStatus;
          sr.shift = shift;
          sr.testedBy = testedBy;
        });
      }

      // Re-render table with data
      renderSamplesTable();

      // Persist the record
      const totalQty = sampleRows.reduce((sum, r) => sum + (Number(r.quantity) || 0), 0) || quantity;
      const entry = {
        ...row,
        lot,
        plant,
        analysisDate,
        reportDate,
        date: analysisDate || reportDate,
        shift,
        testedBy,
        verifiedBy,
        sampleType,
        sampleDetails,
        count,
        quantity: totalQty,
        loadingStatus,
        parameter,
        sulphite,
        AOZ: aoz,
        SEM: sem,
        CAP: cap,
        AHD: ahd,
        AMOZ: amoz,
        result,
        status: result,
        remarks,
        sampleRows: [...sampleRows],
        id: row?.id || `QC-ab-report-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        updatedAt: new Date().toISOString()
      };

      this.evaluate('ab-report', entry);

      const previous = JSON.parse(JSON.stringify(this.state));
      if (row) {
        this.state['ab-report'] = this.state['ab-report'].map(r => r.id === row.id ? entry : r);
      } else {
        this.state['ab-report'].unshift(entry);
      }

      this.synchronize();
      if (!this.persist()) {
        this.state = previous;
        return;
      }

      Modal.close();
      this.renderRegister('ab-report');
      Toast.show(`QC Record & Sample Test Items saved for Lot ${lot}.`, 'success');
    });
  },

  saveAbReportRecord(original, form) {
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));

    values.quantity = Number(values.quantity) || 0;
    values.AOZ = parseFloat(values.AOZ) || 0;
    values.SEM = parseFloat(values.SEM) || 0;
    values.CAP = parseFloat(values.CAP) || 0;
    values.AHD = parseFloat(values.AHD) || 0;
    values.AMOZ = parseFloat(values.AMOZ) || 0;

    values.status = values.result || 'Pass';
    values.date = values.analysisDate || values.reportDate || new Date().toISOString().slice(0, 10);
    values.internalLotNo = values.lot;

    const entry = {
      ...original,
      ...values,
      id: original?.id || `QC-ab-report-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      updatedAt: new Date().toISOString()
    };

    this.evaluate('ab-report', entry);

    const previous = JSON.parse(JSON.stringify(this.state));
    if (original) {
      this.state['ab-report'] = this.state['ab-report'].map(row => row.id === original.id ? entry : row);
    } else {
      this.state['ab-report'].unshift(entry);
    }

    this.synchronize();
    if (!this.persist()) {
      this.state = previous;
      return;
    }

    Modal.close();
    this.renderRegister('ab-report');
    Toast.show(`Antibiotic QC Record for Lot ${entry.lot} saved successfully.`, 'success');
  },

  clearanceIssue(lot) {
    if (!this.state['lots-list'].some(row => row.lot === lot)) return 'Select a registered lot.';
    for (const key of ['ab-report', 'mb-report']) {
      if (this.latestReport(key, lot)?.status !== 'Pass') return 'A passing antibiotic and microbiology report is required before release.';
    }
    return '';
  },

  saveRecord(key, original, form) {
    if (!form.reportValidity()) return;
    if (form.dataset.attachmentLoading) { Toast.show('Wait for the COA attachment to finish loading.', 'warning'); return; }
    const values = Object.fromEntries(new FormData(form));
    qcSchemas[key].fields.forEach(field => {
      if (['number', 'temperature', 'score', 'percent'].includes(field.type)) values[field.key] = Number(values[field.key]);
      else if (typeof values[field.key] === 'string') values[field.key] = values[field.key].trim();
    });
    if (qcSchemas[key].fields.some(field => !['certHealth', 'certCoa', 'certOrigin', 'bapNumber'].includes(field.key) && values[field.key] === '')) {
      Toast.show('Required fields cannot contain only spaces.', 'warning'); return;
    }
    if (key === 'lots-list' && this.state[key].some(row => row.id !== original?.id && row.lot === values.lot)) {
      Toast.show('This lot number is already registered.', 'warning'); return;
    }
    if (key === 'lots-list' && original && original.lot !== values.lot && this.hasLotReferences(original.lot)) {
      Toast.show('A lot referenced by QC records cannot be renamed.', 'warning'); return;
    }
    if (values.endDate && values.endDate < values.auditDate) { Toast.show('Audit end date cannot precede its start date.', 'warning'); return; }
    if (key === 'documentation' && values.status === 'Completed') {
      const issue = !values.certHealth || !values.certCoa || !values.certOrigin ? 'All three export certificates are required.' : this.clearanceIssue(values.internalLotNo);
      if (issue) { Toast.show(issue, 'warning'); return; }
    }
    if (key === 'qc-orders' && values.orderType === 'Quarantine Release' && values.status === 'Completed') {
      const issue = this.clearanceIssue(values.lot);
      if (issue) { Toast.show(issue, 'warning'); return; }
    }
    const attachment = document.getElementById('qc-coa-remove')?.checked ? { coaFileName: '', coaFileData: '' } : form.qcAttachment;
    const entry = { ...original, ...values, ...attachment, updatedAt: new Date().toISOString(), id: original?.id || `QC-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` };
    this.evaluate(key, entry);
    const previous = JSON.parse(JSON.stringify(this.state));
    if (original) this.state[key] = this.state[key].map(row => row.id === original.id ? entry : row);
    else this.state[key].push(entry);
    this.synchronize();
    if (!this.persist()) { this.state = previous; return; }
    Modal.close();
    this.renderRegister(key);
    Toast.show('QC record saved.', 'success');
  },

  hasLotReferences(lot) {
    return Object.entries(this.state).some(([key, records]) => key !== 'lots-list' && records.some(row => row.lot === lot || row.internalLotNo === lot));
  },

  deleteRecord(key, row) {
    if (key === 'lots-list' && this.hasLotReferences(row.lot)) {
      Toast.show('This lot is referenced by other QC records and cannot be deleted.', 'warning'); return false;
    }
    const previous = JSON.parse(JSON.stringify(this.state));
    this.state[key] = this.state[key].filter(record => record.id !== row.id);
    this.synchronize();
    if (!this.persist()) { this.state = previous; return false; }
    this.renderRegister(key);
    Toast.show('QC record deleted.', 'success');
  },

  showDetails(key, row) {
    if (key === 'external-lab-report') row = { ...row, exporter: this.exporterName(row) };
    const fields = [...qcSchemas[key].fields];
    if (!fields.some(field => field.key === 'status')) fields.push(qcField('status', key === 'lots-list' ? 'Antibiotic Status' : 'Status'));
    const sampleFields = { method: 'Test Method', collectedBy: 'Collected By', lab: 'Laboratory', testTime: 'Sample Time', antibiotics: 'Screening Panel' };
    Object.entries(sampleFields).forEach(([name, label]) => {
      if (row.testDetails?.[name] && !fields.some(field => field.key === name)) fields.push(qcField(name, label, name === 'testTime' ? 'datetime-local' : 'text'));
    });
    if (row.nonConformances) {
      ['major', 'minor', 'critical'].forEach(name => {
        if (!fields.some(field => field.key === name)) fields.push(qcField(name, `${name} Findings`, 'number'));
      });
    }
    const reference = row.lot || row.auditId || row.orderNo || row.reportNo || row.invoiceNo || row.farmName || row.id;
    const formatValue = field => {
      const value = row[field.key] ?? row.testDetails?.[field.key] ?? row.nonConformances?.[field.key];
      if (value === null || value === undefined || value === '') return '-';
      if (field.type === 'date' && /^\d{4}-\d{2}-\d{2}$/.test(String(value))) return String(value).split('-').reverse().join('/');
      if (field.type === 'datetime-local' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(String(value))) {
        const [date, time] = String(value).split('T');
        return `${date.split('-').reverse().join('/')} ${time.slice(0, 5)}`;
      }
      return typeof value === 'number' ? value.toLocaleString('en-IN', { maximumFractionDigits: 4 }) : String(value);
    };
    Modal.open({
      title: `${qcSchemas[key].title} - Details`, size: 'full',
      content: `<div class="space-y-4 text-xs">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#DFE1E6] pb-3">
          <span class="min-w-0 break-all font-bold text-sm text-[#00A4B7]">${this.escape(reference)}</span>
          ${this.badge(row.status || row.abStatus)}
        </div>
        <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#F8FAFC] p-3.5 rounded-lg border border-[#DFE1E6]">
          ${fields.map(field => `<div class="min-w-0 ${field.key === 'antibiotics' || field.key === 'requiredTests' ? 'sm:col-span-2' : ''}">
            <dt class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">${this.escape(field.label)}</dt>
            <dd class="font-semibold text-[#172B4D] block mt-0.5 break-words whitespace-pre-wrap">${field.key === 'status' ? this.badge(row.status || row.abStatus) : this.escape(formatValue(field))}</dd>
          </div>`).join('')}
          ${row.coaFileName ? `<div class="min-w-0 sm:col-span-2"><dt class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">COA Attachment</dt><dd class="font-semibold text-[#172B4D] block mt-0.5 break-all">${this.escape(row.coaFileName)}</dd></div>` : ''}
        </dl>
        ${key === 'rm-report' ? `
          <div class="space-y-2 mt-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Raw Material Quality Inspection Parameters</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">CHECKED COUNT/KG</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.checkedCount || row.count || '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">RED/BLACK GILL</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.redBlackGill ?? '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">SOFT/SEMI SOFT/PAPER SOFT</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.softShell ?? '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">DROPPING HEAD IN %</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${row.droppingHead !== undefined && row.droppingHead !== '' ? row.droppingHead + '%' : '-'}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">BLACK SPOT/BLACK DOT</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.blackSpot ?? '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">BROKEN/DAMAGES</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.broken ?? '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">IMPROPER LEGS/DECOMPOSITION/DISCOLORATION</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.improperLegs ?? '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">BENDS</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.bends ?? '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">FIT FOR HEAD ON PACKING</dt><dd class="font-semibold mt-0.5 ${row.fitForHeadOn === 'NO' ? 'text-[#DE350B]' : 'text-[#006644]'}">${this.escape(row.fitForHeadOn || 'YES')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">BIG PIECES</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.bigPieces ?? '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">SMALL PIECES</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.smallPieces ?? '-')}</dd></div>
              <div class="sm:col-span-2 md:col-span-4"><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">REMARKS</dt><dd class="font-semibold text-[#172B4D] mt-0.5 whitespace-pre-wrap">${this.escape(row.remarks || row.reason || '-')}</dd></div>
            </div>
          </div>
        ` : ''}
        ${key === 'lab-report' ? `
          <div class="space-y-3 mt-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">General Information &amp; Water Quality Parameters</h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] p-3 rounded-lg border border-[#DFE1E6]">
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">SAMPLE COLLECTION TIME</dt><dd class="font-mono font-bold text-[#172B4D] mt-0.5">${this.escape(row.sampleCollectionTime || '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">DATE OF SAMPLING</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${row.dateOfSampling ? String(row.dateOfSampling).split('-').reverse().join('-') : '-'}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">TESTED BY</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.testedBy || '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">VERIFIED BY</dt><dd class="font-semibold text-[#172B4D] mt-0.5">${this.escape(row.verifiedBy || '-')}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">5. PH VALUE</dt><dd class="font-mono font-bold text-[#00A4B7] mt-0.5">${row.phValue !== undefined ? Number(row.phValue).toFixed(2) : '-'}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">6. TEMPERATURE (°C)</dt><dd class="font-mono font-bold text-[#172B4D] mt-0.5">${row.temperature !== undefined ? row.temperature + ' °C' : '-'}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">7. SALINITY (PPT)</dt><dd class="font-mono font-bold text-[#172B4D] mt-0.5">${row.salinity !== undefined ? row.salinity + ' ppt' : '-'}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">8. HARDNESS (PPM)</dt><dd class="font-mono font-bold text-[#172B4D] mt-0.5">${row.hardness !== undefined ? row.hardness + ' ppm' : '-'}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">9. CHLORINE (PPM)</dt><dd class="font-mono font-bold text-[#172B4D] mt-0.5">${row.chlorine !== undefined ? row.chlorine + ' ppm' : '-'}</dd></div>
              <div><dt class="text-[10px] font-bold text-[#5E6C84] uppercase">10. TOTAL DISSOLVED SOLIDS</dt><dd class="font-mono font-bold text-[#172B4D] mt-0.5">${row.totalDissolvedSolids !== undefined ? row.totalDissolvedSolids + ' ppm' : '-'}</dd></div>
            </div>
          </div>
        ` : ''}
        ${key === 'mb-report' && row.mbRows && row.mbRows.length ? `
          <div class="space-y-2 mt-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Microbiology Test Breakdown</h4>
            <div class="bg-white rounded-lg border border-[#DFE1E6] shadow-2xs overflow-hidden">
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs border-collapse">
                  <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th class="py-2.5 px-3 min-w-[60px]">S.No</th>
                      <th class="py-2.5 px-3 min-w-[120px]">PO No</th>
                      <th class="py-2.5 px-3 min-w-[160px]">Buyer Name</th>
                      <th class="py-2.5 px-3 min-w-[160px]">Parameter</th>
                      <th class="py-2.5 px-3 min-w-[120px]">Analysis Date</th>
                      <th class="py-2.5 px-3 min-w-[100px]">Result</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#F1F5F9]">
                    ${row.mbRows.map((r, idx) => `
                      <tr class="hover:bg-[#F8FAFC] transition-colors">
                        <td class="py-2 px-3 font-bold text-[#5E6C84]">${idx + 1}</td>
                        <td class="py-2 px-3 font-mono font-bold text-[#00A4B7]">${this.escape(r.poNo || '-')}</td>
                        <td class="py-2 px-3 font-semibold text-[#172B4D]">${this.escape(r.buyer || '-')}</td>
                        <td class="py-2 px-3 font-medium text-[#172B4D]">${this.escape(r.parameter || '-')}</td>
                        <td class="py-2 px-3 text-[#172B4D]">${r.analysisDate ? String(r.analysisDate).split('-').reverse().join('-') : '-'}</td>
                        <td class="py-2 px-3">${this.badge(r.result || 'Pass')}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ` : ''}
        ${row.sampleRows && row.sampleRows.length ? `
          <div class="space-y-2 mt-4">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Sample Antibiotic &amp; Chemical Testing Breakdown</h4>
            <div class="bg-white rounded-xl border border-[#DFE1E6] shadow-2xs overflow-hidden">
              <div class="overflow-x-auto" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch;">
                <table class="w-full text-left text-xs border-collapse" style="min-width: 1350px;">
                  <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th class="py-2.5 px-3 min-w-[140px]">Sample</th>
                      <th class="py-2.5 px-3 min-w-[130px]">Lot No</th>
                      <th class="py-2.5 px-3 min-w-[100px]">Count</th>
                      <th class="py-2.5 px-3 min-w-[110px] text-right">Quantity</th>
                      <th class="py-2.5 px-2 min-w-[85px] text-right">AOZ</th>
                      <th class="py-2.5 px-2 min-w-[85px] text-right">SEM</th>
                      <th class="py-2.5 px-2 min-w-[85px] text-right">CAP</th>
                      <th class="py-2.5 px-2 min-w-[85px] text-right">AHD</th>
                      <th class="py-2.5 px-2 min-w-[85px] text-right">AMOZ</th>
                      <th class="py-2.5 px-3 min-w-[150px] text-center">Loading Status</th>
                      <th class="py-2.5 px-3 min-w-[130px]">Shift</th>
                      <th class="py-2.5 px-3 min-w-[200px]">Remarks</th>
                      <th class="py-2.5 px-3 min-w-[130px]">Tested By</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                    ${row.sampleRows.map((sr, idx) => `
                      <tr class="hover:bg-[#F8FAFC] transition-colors">
                        <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${this.escape(sr.sample || `SMP-${String(idx + 1).padStart(2, '0')}`)}</td>
                        <td class="py-2.5 px-3 font-mono font-bold text-[#00A4B7]">${this.escape(sr.lotNo || '-')}</td>
                        <td class="py-2.5 px-3 font-mono font-medium">${this.escape(sr.count || '-')}</td>
                        <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${Number(sr.quantity || 0).toLocaleString()} Kg</td>
                        <td class="py-2.5 px-2 text-right font-mono ${Number(sr.aoz) >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(Number(sr.aoz)) ? Number(sr.aoz).toFixed(2) : '-'}</td>
                        <td class="py-2.5 px-2 text-right font-mono ${Number(sr.sem) >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(Number(sr.sem)) ? Number(sr.sem).toFixed(2) : '-'}</td>
                        <td class="py-2.5 px-2 text-right font-mono ${Number(sr.cap) >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(Number(sr.cap)) ? Number(sr.cap).toFixed(2) : '-'}</td>
                        <td class="py-2.5 px-2 text-right font-mono ${Number(sr.ahd) >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(Number(sr.ahd)) ? Number(sr.ahd).toFixed(2) : '-'}</td>
                        <td class="py-2.5 px-2 text-right font-mono ${Number(sr.amoz) >= 0.1 ? 'font-bold text-[#DE350B]' : 'text-[#1E293B]'}">${Number.isFinite(Number(sr.amoz)) ? Number(sr.amoz).toFixed(2) : '-'}</td>
                        <td class="py-2.5 px-3 text-center">
                          <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${sr.loadingStatus === 'Approved for Loading' || sr.loadingStatus === 'Passed & Cleared' ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${this.escape(sr.loadingStatus || '-')}</span>
                        </td>
                        <td class="py-2.5 px-3 font-medium text-[#475569]">${this.escape(sr.shift || '-')}</td>
                        <td class="py-2.5 px-3 text-[#475569]">${this.escape(sr.remarks || '-')}</td>
                        <td class="py-2.5 px-3 font-medium text-[#172B4D]">${this.escape(sr.testedBy || '-')}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                  <tfoot class="bg-[#F8FAFC] border-t-2 border-[#DFE1E6] font-bold text-xs text-[#0F172A]">
                    <tr>
                      <td colspan="3" class="py-2.5 px-3 text-right uppercase tracking-wider text-[#475569]">Total Quantity:</td>
                      <td class="py-2.5 px-3 text-right font-mono text-sm text-[#00875A]">${row.sampleRows.reduce((sum, r) => sum + (Number(r.quantity) || 0), 0).toLocaleString()} Kg</td>
                      <td colspan="9"></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        ` : ''}
      </div>`,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: modal => modal.close() },
        ...(row.coaFileData ? [{ label: 'Download COA', type: 'secondary', onClick: () => {
          if (!/^data:(application\/pdf|image\/png|image\/jpeg);base64,/.test(row.coaFileData)) return;
          const link = document.createElement('a'); link.href = row.coaFileData; link.download = row.coaFileName; link.click();
        } }] : [])
      ]
    });
  },

  renderOverview() {
    const ab = this.state['ab-report'];
    const mb = this.state['mb-report'];
    const passed = ab.filter(row => row.status === 'Pass').length;
    const defects = this.state['rm-report'].filter(row => Number(row.totalDefects) > 0).length;
    const cleared = this.state.documentation.filter(row => row.status === 'Completed' && !this.clearanceIssue(row.internalLotNo)).length;
    const holds = ab.filter(row => row.status === 'Fail').length + mb.filter(row => row.status === 'Fail').length + this.state['daily-qc-ops'].filter(row => ['Hold', 'Re-ice'].includes(row.status)).length;
    const metrics = [['Samples Tested', ab.length + mb.length], ['Antibiotic Pass Rate', `${ab.length ? (passed / ab.length * 100).toFixed(1) : '0'}%`], ['Lots With Defects', defects], ['Export Lots Cleared', cleared], ['Quarantine Alerts', holds]];
    this.content.innerHTML = `<div class="space-y-4 min-w-0">
      <h1 class="text-xl font-extrabold text-[#172B4D]">QC Overview</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">${metrics.map(([label, value]) => `<div class="bg-white border border-[#DFE1E6] rounded-lg p-4"><div class="text-xs font-semibold text-[#5E6C84]">${label}</div><div class="text-2xl font-bold text-[#172B4D] mt-2">${value}</div></div>`).join('')}</div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">${[['qc-antibiotic-chart', 'Antibiotic Results'], ['qc-defects-chart', 'Raw Material Defects'], ['qc-throughput-chart', 'Receiving QC Throughput']].map(([id, title]) => `<section class="min-w-0 border-t border-[#DFE1E6] pt-3"><h2 class="text-sm font-bold text-[#172B4D] mb-3">${title}</h2><div class="relative h-56"><canvas id="${id}" aria-label="${title}" role="img"></canvas></div></section>`).join('')}</div>
      <div id="qc-dashboard-table" class="min-w-0"></div>
    </div>`;
    new DataTable({ containerId: 'qc-dashboard-table', tableTitle: 'Daily QC Operations', data: this.state['daily-qc-ops'], columns: [
      { field: 'date', header: 'Date' }, { field: 'timeSlot', header: 'Time' }, { field: 'batchNo', header: 'Batch', render: value => this.escape(value) },
      { field: 'productLine', header: 'Line' }, { field: 'coreTemp', header: 'Core Temperature (C)' },
      { field: 'chlorineLevel', header: 'Chlorine (ppm)' }, { field: 'status', header: 'Status', render: value => this.badge(value) }
    ], onRowClick: row => this.showDetails('daily-qc-ops', row) });
    if (typeof Chart === 'undefined') return;
    const chartOptions = { plugins: { legend: { display: false } }, scales: { x: { ticks: { font: { family: 'Noto Sans', size: 11 } } }, y: { beginAtZero: true, ticks: { precision: 0, font: { family: 'Noto Sans', size: 11 } } } } };
    Charts.renderBarChart('qc-antibiotic-chart', ['Pass', 'Fail', 'Pending'], [{ label: 'Samples', data: ['Pass', 'Fail', 'Pending'].map(status => ab.filter(row => row.status === status).length), backgroundColor: ['#00A4B7', '#881337', '#78350F'] }], chartOptions);
    const defectFields = ['blackSpot', 'softShell', 'broken', 'dehydration'];
    Charts.renderBarChart('qc-defects-chart', ['Black Spot', 'Soft Shell', 'Broken', 'Dehydration'], [{ label: 'Average Defects (%)', data: defectFields.map(field => this.state['rm-report'].length ? this.state['rm-report'].reduce((sum, row) => sum + Number(row[field] || 0), 0) / this.state['rm-report'].length : 0), backgroundColor: '#075985' }], chartOptions);
    const dates = [...new Set(this.state['daily-qc-ops'].map(row => row.date))].sort();
    Charts.renderBarChart('qc-throughput-chart', dates, [{ label: 'Inspections', data: dates.map(date => this.state['daily-qc-ops'].filter(row => row.date === date).length), backgroundColor: '#065F46' }], chartOptions);
  }
};
