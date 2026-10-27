import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { Charts } from '../components/charts.js';

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

const qcSchemas = {
  'daily-qc-ops': { title: 'Daily QC Operations', fields: [qcDateField, qcField('timeSlot', 'Inspection Time', 'time'), qcField('batchNo', 'Batch Number'), qcLotField, qcField('productLine', 'Product Line', 'select', ['Line #1', 'Line #2', 'Line #3', 'Line #4', 'Line #5', 'Line #6']), qcField('coreTemp', 'Core Temperature (C)', 'temperature'), qcField('chlorineLevel', 'Free Chlorine (ppm)', 'number'), qcField('sensoryScore', 'Sensory Score (1-5)', 'score'), qcInspectorField] },
  'lots-list': { title: 'Lots List', fields: [qcField('lot', 'Lot Number'), qcField('rmDate', 'Receiving Date', 'date'), qcField('type', 'Procurement Type', 'select', ['Site Weightment', 'By Yield']), qcField('grader', 'Grader'), qcField('agent', 'Agent / Supplier'), qcField('count', 'Count (Pieces / kg)', 'number'), qcField('weight', 'Net Weight (kg)', 'number'), qcField('station', 'Station'), qcField('method', 'Test Method'), qcField('collectedBy', 'Collected By'), qcField('lab', 'Laboratory'), qcField('testTime', 'Sample Time', 'datetime-local'), qcField('antibiotics', 'Screening Panel')] },
  'ab-report': { title: 'Antibiotic ELISA Report', fields: qcAbReportFields },
  'rm-report': { title: 'Raw Material Inspection Report', fields: [qcLotField, qcDateField, qcField('sensoryScore', 'Freshness Score (1-5)', 'score'), qcField('blackSpot', 'Black Spot (%)', 'percent'), qcField('softShell', 'Soft Shell (%)', 'percent'), qcField('broken', 'Broken (%)', 'percent'), qcField('dehydration', 'Dehydration (%)', 'percent'), qcField('coreTemp', 'Core Temperature (C)', 'temperature'), qcField('disposition', 'Inspection Decision', 'select', ['Pass', 'Hold', 'Reject']), qcInspectorField] },
  'mb-report': { title: 'Microbiology Report', fields: [qcLotField, qcDateField, qcField('TPC', 'TPC (CFU/g)', 'number'), qcField('ecoli', 'E. coli (MPN/g)', 'number'), qcField('coliforms', 'Coliforms (MPN/g)', 'number'), ...qcOrganisms.map(key => qcField(key, `${key} (25g)`, 'select', ['Absent', 'Present'])), qcField('staph', 'S. aureus (CFU/g)', 'number'), qcInspectorField] },
  'lab-report': { title: 'In-House Lab Report', fields: [qcLotField, qcDateField, qcField('reportNo', 'Report Number'), qcField('lab', 'Laboratory'), qcField('requiredTests', 'Tests Performed'), qcField('chemicalResult', 'Chemical Result', 'select', ['Pass', 'Fail', 'Pending']), qcField('antibioticResult', 'Antibiotic Result', 'select', ['Pass', 'Fail', 'Pending']), qcField('microbiologyResult', 'Microbiology Result', 'select', ['Pass', 'Fail', 'Pending']), qcInspectorField] },
  'external-lab-report': { title: 'External Lab Report', fields: [qcLotField, qcDateField, qcField('reportNo', 'Report Number'), qcField('lab', 'Accredited Laboratory'), qcField('accreditationNo', 'Accreditation Number'), qcField('requiredTests', 'Tests Performed'), qcField('result', 'Lab Result', 'select', ['Pass', 'Fail', 'Pending']), qcField('coaNumber', 'COA Number'), qcInspectorField] },
  documentation: { title: 'QC Documentation', fields: [qcField('invoiceNo', 'Export Invoice'), qcField('poNo', 'Purchase Order'), qcField('buyer', 'Buyer / Consignee'), qcField('country', 'Destination', 'select', ['USA', 'EU', 'Japan', 'China']), qcField('internalLotNo', 'Internal Lot', 'lot'), qcField('certHealth', 'Health Certificate'), qcField('certCoa', 'Certificate of Analysis'), qcField('certOrigin', 'Certificate of Origin'), qcField('status', 'Status', 'select', ['In Review', 'Pending Release', 'Completed'])] },
  'qc-orders': { title: 'QC Orders', fields: [qcField('orderNo', 'Order Number'), qcLotField, qcField('orderType', 'Order Type', 'select', ['Inspection', 'Quarantine Release', 'Sample Dispatch']), qcField('sampleType', 'Sample Type', 'select', ['Finished Goods', 'Block Frozen', 'IQF', 'Raw Material']), qcField('requiredTests', 'Required Tests'), qcField('targetDate', 'Due Date', 'date'), qcField('assignedLab', 'Assigned Laboratory'), qcStatusField] },
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
  'qc-overview': 'overview', 'incoming-lots': 'lots-list', 'antibiotic-testing': 'ab-report',
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
    if (Array.isArray(this.state['ab-report'])) {
      this.state['ab-report'] = this.state['ab-report'].map((row, idx) => {
        const seedRow = (seed['ab-report'] && seed['ab-report'][idx]) || seed['ab-report'][0] || {};
        return { ...seedRow, ...row };
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
        const row = { id: `QC-${key}-${index + 1}` };
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
        qcAntibiotics.forEach(parameter => { row[parameter] = index === 1 && parameter === 'AOZ' ? 0.15 : parameter === 'OTC' || parameter === 'CTC' ? 10 : 0.02; });
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
            status: index === 1 ? 'Fail' : 'Pass'
          });
        }
        qcOrganisms.forEach(parameter => { row[parameter] = 'Absent'; });
        if (key === 'documentation' || key === 'qc-orders') row.status = 'In Review';
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
    this.state['qc-orders'].forEach(row => {
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
      row.reportId = row.reportId || row.reportNo || row.id;
      const nightShift = /night|shift 3|22:00/i.test(row.shift || '');
      const dayShift = !nightShift && /day|general|shift [12]/i.test(row.shift || '');
      row.totalReports = row.totalReports ?? 1;
      row.dayTotal = row.dayTotal ?? (dayShift ? 1 : 0);
      row.nightTotal = row.nightTotal ?? (nightShift ? 1 : 0);
    } else if (key === 'mb-report') {
      row.status = !completeNumbers(['TPC', 'ecoli', 'coliforms', 'staph']) || qcOrganisms.some(name => !row[name]) ? 'Pending'
        : Number(row.TPC) <= 500000 && Number(row.ecoli) < 10 && Number(row.coliforms) < 100 && Number(row.staph) < 100 && qcOrganisms.every(name => row[name] === 'Absent') ? 'Pass' : 'Fail';
    } else if (key === 'daily-qc-ops') {
      row.status = !completeNumbers(['coreTemp', 'chlorineLevel', 'sensoryScore']) ? 'Pending'
        : Number(row.chlorineLevel) < 5 || Number(row.chlorineLevel) > 10 || Number(row.sensoryScore) < 3 ? 'Hold' : Number(row.coreTemp) > 4 ? 'Re-ice' : 'Pass';
    } else if (key === 'rm-report') {
      row.totalDefects = ['blackSpot', 'softShell', 'broken', 'dehydration'].reduce((sum, name) => sum + Number(row[name] || 0), 0);
      row.status = row.disposition === 'Reject' ? 'Fail' : row.disposition === 'Hold' || Number(row.coreTemp) > 4 || Number(row.sensoryScore) < 3 ? 'Hold' : 'Pass';
    } else if (key === 'lab-report') {
      const results = [row.chemicalResult, row.antibioticResult, row.microbiologyResult];
      row.status = results.includes('Fail') ? 'Fail' : results.every(value => value === 'Pass') ? 'Pass' : 'Pending';
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

  renderRegister(key) {
    const schema = qcSchemas[key];
    this.state[key].forEach(row => this.evaluate(key, row));
    const lotOptions = [...new Set(this.state['lots-list'].map(row => row.lot))];
    const statuses = [...new Set(this.state[key].map(row => row.status || 'Pending'))];
    this.content.innerHTML = `
      <div class="space-y-4 min-w-0">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h1 class="text-xl font-extrabold text-[#172B4D]">${schema.title}</h1>
          ${key === 'lots-list' ? '' : `<button type="button" id="qc-add-record" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">${this.icon('Plus')}<span>Add Record</span></button>`}
        </div>
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between gap-2 pb-1">
            <div class="flex items-center gap-2"><span class="text-[#0284C7]">${this.icon('Filter')}</span><h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3></div>
            <div class="inline-flex items-center gap-2">
              <button type="button" id="qc-reset-filters" class="dt-top-filter-reset-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Reset all filters" aria-label="Reset all filters">${this.icon('RotateCcw')}</button>
              <button type="button" id="qc-toggle-filters" class="dt-top-filter-toggle-btn inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] rounded-full cursor-pointer" title="Hide Filter" aria-label="Hide Filter" aria-expanded="true" aria-controls="qc-filters">${this.icon('ChevronDown')}</button>
            </div>
          </div>
          <form id="qc-filters" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <div><label for="qc-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label><select id="qc-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]"><option value="ALL">All Statuses</option>${statuses.map(value => `<option>${this.escape(value)}</option>`).join('')}</select></div>
            <div><label for="qc-filter-lot" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">LOT</label><select id="qc-filter-lot" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]"><option value="ALL">All Lots</option>${lotOptions.map(value => `<option>${this.escape(value)}</option>`).join('')}</select></div>
            <div><label for="qc-filter-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FROM DATE</label><div class="erp-date-wrapper"><input id="qc-filter-from" type="date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" /></div></div>
            <div><label for="qc-filter-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TO DATE</label><div class="erp-date-wrapper"><input id="qc-filter-to" type="date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" /></div></div>
            <div class="flex items-end"><button type="submit" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer">${this.icon('Search')}<span>Search</span></button></div>
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
    ] : schema.fields;
    const columns = tableFields.map(field => {
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
    if (key !== 'ab-report') {
      if (!columns.some(column => column.field === 'status')) columns.push({ field: 'status', header: key === 'lots-list' ? 'AB Status' : 'Status', render: value => this.badge(value) });
      else columns.find(column => column.field === 'status').render = value => this.badge(value);
    }
    if (key === 'external-lab-report') columns.push({ field: 'coaFileName', header: 'COA Attachment', render: value => this.escape(value || 'Not attached') });
    this.table = new DataTable({
      containerId: 'qc-register-table', tableTitle: schema.title, columns, data: this.state[key],
      actions: key === 'lots-list' ? [] : [
        { label: 'Edit', icon: this.icon('Pencil'), onClick: row => this.openForm(key, row) },
        { label: 'Delete', icon: this.icon('Trash2'), onClick: row => this.deleteRecord(key, row) }
      ],
      onRowClick: row => this.showDetails(key, row)
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
    const status = document.getElementById('qc-filter-status').value;
    const lot = document.getElementById('qc-filter-lot').value;
    const from = document.getElementById('qc-filter-from').value;
    const to = document.getElementById('qc-filter-to').value;
    if (from && to && from > to) { Toast.show('From date must not be after To date.', 'warning'); return; }
    this.table.setData(this.state[key].filter(row => {
      const date = row.date || row.rmDate || row.auditDate || row.targetDate || '';
      return (status === 'ALL' || row.status === status) && (lot === 'ALL' || (row.lot || row.internalLotNo) === lot) && (!from || date >= from) && (!to || date <= to);
    }));
  },

  openForm(key, row = null) {
    if (key === 'ab-report' || !qcSchemas[key]) {
      this.openAbReportForm(row);
      return;
    }
    const schema = qcSchemas[key];
    const today = new Date().toISOString().slice(0, 10);
    Modal.open({
      title: `${row ? 'Edit' : 'Add'} ${schema.title}`,
      size: 'lg',
      content: `<form id="qc-record-form" class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        ${schema.fields.map(field => {
          const value = row?.[field.key] ?? (field.type === 'date' ? today : '');
          const options = field.type === 'lot' ? this.state['lots-list'].map(lot => lot.lot) : field.options;
          const numeric = ['number', 'temperature', 'percent', 'score'].includes(field.type);
          const inputType = numeric ? 'number' : ['date', 'time', 'datetime-local'].includes(field.type) ? field.type : 'text';
          const optional = ['certHealth', 'certCoa', 'certOrigin', 'bapNumber'].includes(field.key);
          const fieldId = `qc-field-${field.key.replace(/[^a-zA-Z0-9_-]/g, '-')}`;
          return `<div><label for="${fieldId}">${this.escape(field.label)}${optional ? '' : ' *'}</label>${options
            ? `<select id="${fieldId}" name="${this.escape(field.key)}" class="w-full" required><option value="">Select</option>${options.map(option => `<option value="${this.escape(option)}" ${option === value ? 'selected' : ''}>${this.escape(option)}</option>`).join('')}</select>`
            : `<input id="${fieldId}" name="${this.escape(field.key)}" type="${inputType}" value="${this.escape(value)}" class="w-full" ${optional ? '' : 'required'} ${numeric ? `step="any" min="${field.type === 'temperature' ? '-50' : field.type === 'score' ? '1' : '0'}" ${field.type === 'score' ? 'max="5"' : field.type === 'percent' ? 'max="100"' : ''}` : ''} />`}</div>`;
        }).join('')}
        ${key === 'external-lab-report' ? `<div class="sm:col-span-2"><label for="qc-coa-file">COA Attachment (PDF / PNG / JPEG, max 2 MB)</label><input id="qc-coa-file" type="file" accept="application/pdf,image/png,image/jpeg" class="w-full" />${row?.coaFileName ? `<span class="text-xs">${this.escape(row.coaFileName)}</span><label class="flex items-center gap-2 mt-2"><input id="qc-coa-remove" type="checkbox" />Remove attachment</label>` : ''}</div>` : ''}
      </form>`,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        { label: 'Save Record', type: 'primary', onClick: () => document.getElementById('qc-record-form')?.requestSubmit() }
      ]
    });
    const form = document.getElementById('qc-record-form');
    form.addEventListener('submit', event => { event.preventDefault(); this.saveRecord(key, row, form); });
    document.getElementById('qc-coa-file')?.addEventListener('change', event => {
      const file = event.target.files[0];
      form.qcAttachment = null;
      if (!file) return;
      if (!['application/pdf', 'image/png', 'image/jpeg'].includes(file.type) || file.size > 2 * 1024 * 1024) {
        event.target.value = '';
        Toast.show('Choose a PDF, PNG, or JPEG file no larger than 2 MB.', 'warning');
        return;
      }
      const reader = new FileReader();
      form.dataset.attachmentLoading = 'true';
      reader.onload = () => {
        if (event.target.files[0] !== file) return;
        form.qcAttachment = { coaFileName: file.name, coaFileData: reader.result };
        delete form.dataset.attachmentLoading;
      };
      reader.onerror = () => { delete form.dataset.attachmentLoading; Toast.show('The attachment could not be read.', 'error'); };
      reader.readAsDataURL(file);
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

    Modal.open({
      title: `${row ? 'Edit' : 'Add'} Antibiotic & Chemical Testing Record (ELISA)`,
      size: 'full',
      content: `
        <form id="qc-record-form" class="space-y-4" onsubmit="return false;">
          <!-- Section 1: Facility & Inspection Meta -->
          <div class="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#DFE1E6] space-y-3">
            <div class="flex items-center justify-between pb-1 border-b border-[#E2E8F0]">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                Inspection &amp; Facility Information
              </span>
              <span class="text-[11px] font-bold text-[#00A4B7]">QC LAB - ELISA &amp; CHEMICAL</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
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
          <div class="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#DFE1E6] space-y-3">
            <div class="flex items-center justify-between pb-1 border-b border-[#E2E8F0]">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Sample Specifications &amp; Loading Logistics
              </span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
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
          <div class="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#DFE1E6] space-y-3">
            <div class="flex items-center justify-between pb-1 border-b border-[#E2E8F0]">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Testing Protocol &amp; Sulphite Screening
              </span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
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
          <div class="bg-[#F0FDF4] p-3.5 rounded-xl border border-[#BBF7D0] space-y-3">
            <div class="flex items-center justify-between pb-1 border-b border-[#DCFCE7]">
              <div class="flex items-center gap-1.5">
                <span class="text-xs font-bold text-[#166534] uppercase tracking-wider flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  Antibiotic Residues (ppb / MRL: &lt; 0.10 ppb)
                </span>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D]">Zero Tolerance / USFDA &amp; EU MRL</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs">
              <!-- 16. AOZ -->
              <div>
                <label for="qcf-aoz" class="block text-[11px] font-bold text-[#166534] uppercase tracking-wider mb-0">AOZ (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-aoz" name="AOZ" value="${val('AOZ', 0.02)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#86EFAC] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#16A34A]" required />
              </div>

              <!-- 17. SEM -->
              <div>
                <label for="qcf-sem" class="block text-[11px] font-bold text-[#166534] uppercase tracking-wider mb-0">SEM (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-sem" name="SEM" value="${val('SEM', 0.02)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#86EFAC] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#16A34A]" required />
              </div>

              <!-- 18. CAP -->
              <div>
                <label for="qcf-cap" class="block text-[11px] font-bold text-[#166534] uppercase tracking-wider mb-0">CAP (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-cap" name="CAP" value="${val('CAP', 0.01)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#86EFAC] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#16A34A]" required />
              </div>

              <!-- 19. AHD -->
              <div>
                <label for="qcf-ahd" class="block text-[11px] font-bold text-[#166534] uppercase tracking-wider mb-0">AHD (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-ahd" name="AHD" value="${val('AHD', 0.02)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#86EFAC] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#16A34A]" required />
              </div>

              <!-- 20. AMOZ -->
              <div>
                <label for="qcf-amoz" class="block text-[11px] font-bold text-[#166534] uppercase tracking-wider mb-0">AMOZ (PPB) <span class="text-[#DE350B]">*</span></label>
                <input type="number" id="qcf-amoz" name="AMOZ" value="${val('AMOZ', 0.02)}" step="any" min="0" class="qc-ab-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#86EFAC] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#16A34A]" required />
              </div>
            </div>
          </div>

          <!-- Section 5: Evaluation & Remarks -->
          <div class="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#DFE1E6] space-y-3">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <!-- 21. RESULT -->
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

              <!-- 15. REMARKS -->
              <div class="md:col-span-2">
                <label for="qcf-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
                <input type="text" id="qcf-remarks" name="remarks" value="${this.escape(val('remarks', 'Compliant with USFDA & EU MRL standards. Cleared for processing.'))}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        { label: 'Save Record', type: 'primary', onClick: () => document.getElementById('qc-record-form')?.requestSubmit() }
      ]
    });

    const form = document.getElementById('qc-record-form');
    if (!form) return;

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

    form.addEventListener('submit', event => {
      event.preventDefault();
      this.saveAbReportRecord(row, form);
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
