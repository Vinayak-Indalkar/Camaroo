// Devi Fisheries ERP — Home View (Today's Tasks & Quick Operational Actions)
import { Toast } from '../components/toast.js';
import { Modal } from '../components/modal.js';
import { DataTable } from '../components/table.js';

export const HomeView = {
  tasks: [
    {
      id: "TSK-1001",
      code: "TASK-ARR-101",
      title: "Raw Material Gate Weighment & Inspection",
      description: "Verify inward weight and initial temperature (target <= 4°C) for Lot DFL-ARR-9042 (2,450 Kg Black Tiger Shrimp).",
      department: "Purchase & Arrivals",
      deptCode: "purchase",
      priority: "High",
      status: "Pending",
      dueTime: "09:30 AM",
      assignee: "Srinivas Rao (Gate In-charge)",
      facility: "Center #1 (Bhimavaram)",
      actionLabel: "Verify Arrival",
      actionHash: "#/purchase/arrivals/gate-entry"
    },
    {
      id: "TSK-1002",
      code: "TASK-QC-204",
      title: "Antibiotic Residue Screening (ELISA/Rapid)",
      description: "Run Chloramphenicol & Nitrofuran metabolites screening for pond harvest LOT-2026-00128 before grading.",
      department: "Quality Control Lab",
      deptCode: "quality",
      priority: "High",
      status: "In Progress",
      dueTime: "10:15 AM",
      assignee: "Dr. K. V. Sharma (QC Microbiologist)",
      facility: "Unit-5 Central Lab",
      actionLabel: "Enter QC Lab Results",
      actionHash: "#/quality/testing/antibiotic"
    },
    {
      id: "TSK-1003",
      code: "TASK-PRE-308",
      title: "De-heading & Yield Verification for Line #2",
      description: "Supervise manual de-heading batch. Verify net count yield and check recovery against 62.0% target.",
      department: "Pre-Processing",
      deptCode: "preprocessing",
      priority: "High",
      status: "Pending",
      dueTime: "11:00 AM",
      assignee: "Laxmi Narayana (Floor Supervisor)",
      facility: "Pre-Processing Hall B",
      actionLabel: "Log Deheading",
      actionHash: "#/preprocessing/operations/deheading"
    },
    {
      id: "TSK-1004",
      code: "TASK-PRE-312",
      title: "Size Grading Calibration & Count Audit",
      description: "Inspect mechanical grading calibration on Line #3 (Count check for 16/20 and 21/25 grades).",
      department: "Pre-Processing",
      deptCode: "preprocessing",
      priority: "Medium",
      status: "In Progress",
      dueTime: "11:45 AM",
      assignee: "Mallesh (Grading In-charge)",
      facility: "Grading Line #3",
      actionLabel: "Log Grading",
      actionHash: "#/preprocessing/operations/grading"
    },
    {
      id: "TSK-1005",
      code: "TASK-CHM-415",
      title: "Non-Phosphate Soaking Batch Setup",
      description: "Prepare chilled soaking solution (STPP-free formulation at 2°C) for peeled tail-on (PDTO) lot.",
      department: "Pre-Processing",
      deptCode: "preprocessing",
      priority: "Medium",
      status: "Pending",
      dueTime: "12:30 PM",
      assignee: "Ch. Venkat (Chemical Floor)",
      facility: "Soaking Tank #4",
      actionLabel: "Log Soaking",
      actionHash: "#/preprocessing/operations/soaking"
    },
    {
      id: "TSK-1006",
      code: "TASK-PRD-520",
      title: "IQF Freezing Tunnel #3 Temperature Clearance",
      description: "Audit blast tunnel cryogenic setpoints (-38°C core temperature) and log glacer ice water chlorination (5 PPM).",
      department: "Production",
      deptCode: "production",
      priority: "High",
      status: "Pending",
      dueTime: "02:00 PM",
      assignee: "P. R. Reddy (Freezing Lead)",
      facility: "DFL UNIT-5 (JPT)",
      actionLabel: "Record Freezing",
      actionHash: "#/production/operations/freezing"
    },
    {
      id: "TSK-1007",
      code: "TASK-CS-601",
      title: "Pallet Racking & Coldstore Putaway",
      description: "Transfer 450 master cartons of IQF Vannamei HLSO to Rack Bay R-04 in Chamber #2 (-20°C storage).",
      department: "Coldstore & Logistics",
      deptCode: "coldstore",
      priority: "Medium",
      status: "Pending",
      dueTime: "03:30 PM",
      assignee: "K. Murali (Warehouse Supervisor)",
      facility: "Deep Freeze Chamber #2",
      actionLabel: "Transfer Pallet",
      actionHash: "#/coldstore/warehouse/pallets"
    },
    {
      id: "TSK-1008",
      code: "TASK-EXP-714",
      title: "Commercial Invoice & Export Bill Filing",
      description: "Finalize customs shipping documentation and commercial invoice for Container CMAU-91829 to Los Angeles.",
      department: "Sales & Exports",
      deptCode: "sales",
      priority: "High",
      status: "Pending",
      dueTime: "04:30 PM",
      assignee: "A. Swaminathan (Export Documentation)",
      facility: "Head Office / Export Cell",
      actionLabel: "Process Invoices",
      actionHash: "#/sales/orders/custom-invoices"
    },
    {
      id: "TSK-1009",
      code: "TASK-SAN-802",
      title: "Pre-Shift Floor Sanitation & Swab Audit",
      description: "Verify contact surface microbial swabs and chlorine sanitizing dip footbaths before Shift B starts.",
      department: "Quality Control Lab",
      deptCode: "quality",
      priority: "Low",
      status: "Completed",
      dueTime: "08:00 AM",
      assignee: "Laxmi Narayana",
      facility: "Main Entrance Sanitizing Bay",
      actionLabel: "View QC Log",
      actionHash: "#/quality/inspections/daily-qc"
    },
    {
      id: "TSK-1010",
      code: "TASK-ARR-098",
      title: "Center Pond Harvest Arrival Reception",
      description: "Receive insulated transport vehicle AP-16-TX-8812 carrying 3,100 Kg fresh harvest from Amalapuram.",
      department: "Purchase & Arrivals",
      deptCode: "purchase",
      priority: "High",
      status: "Completed",
      dueTime: "07:30 AM",
      assignee: "Srinivas Rao",
      facility: "Receiving Dock #2",
      actionLabel: "View Gate Entry",
      actionHash: "#/purchase/arrivals/gate-entry"
    }
  ],

  filterState: {
    department: 'all',
    priority: 'all',
    status: 'all',
    search: ''
  },

  render(containerId, tabName, resolvedHash) {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) return;

    const totalTasks = this.tasks.length;
    const pendingTasks = this.tasks.filter(t => t.status === 'Pending').length;
    const inProgressTasks = this.tasks.filter(t => t.status === 'In Progress').length;
    const highPriorityTasks = this.tasks.filter(t => t.priority === 'High' && t.status !== 'Completed').length;
    const completedTasks = this.tasks.filter(t => t.status === 'Completed').length;

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in pb-12">
        <!-- 1. Header Line (Strictly Rule 2: Title ONLY, no subheadings, contextual actions on line) -->
        <div class="flex items-center justify-between gap-3">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Today's Tasks</h1>
          <div class="flex items-center gap-2">
            <button type="button" id="home-add-task-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Quick Task</span>
            </button>
          </div>
        </div>

        <!-- 2. KPI Summary Cards (4 Action-oriented Metric Cards) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Scheduled</span>
              <span class="text-2xl font-black text-[#172B4D] mt-1 block" id="kpi-total-tasks">${totalTasks}</span>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#F0F9FF] text-[#00A4B7] flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#DE350B] uppercase tracking-wider block">Urgent Action</span>
              <span class="text-2xl font-black text-[#DE350B] mt-1 block" id="kpi-high-priority">${highPriorityTasks}</span>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#FFEBE6] text-[#DE350B] flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#00A4B7] uppercase tracking-wider block">In Progress</span>
              <span class="text-2xl font-black text-[#00A4B7] mt-1 block" id="kpi-in-progress">${inProgressTasks}</span>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#006644] uppercase tracking-wider block">Completed</span>
              <span class="text-2xl font-black text-[#006644] mt-1 block" id="kpi-completed">${completedTasks}</span>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#E3FCEF] text-[#006644] flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
          </div>
        </div>

        <!-- 3. Search & Filter Card (Strictly Rule 3 of AGENTS.md) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center gap-2">
              <!-- Circular 32x32 Reset Button -->
              <button type="button" id="home-tasks-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>
              <!-- Circular 32x32 Collapse/Expand Toggle Button -->
              <button type="button" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
                <svg class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>

          <!-- Body: Margin-top 0, border-top none -->
          <div class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs" style="margin-top: 0px !important; border-top: none !important; padding-top: 0px !important;">
            <div>
              <label for="home-filter-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Department</label>
              <select id="home-filter-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="all">All Departments</option>
                <option value="purchase">Purchase &amp; Arrivals</option>
                <option value="preprocessing">Pre-Processing</option>
                <option value="quality">Quality Control Lab</option>
                <option value="production">Production &amp; Freezing</option>
                <option value="coldstore">Coldstore &amp; Logistics</option>
                <option value="sales">Sales &amp; Exports</option>
              </select>
            </div>

            <div>
              <label for="home-filter-priority" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Priority</label>
              <select id="home-filter-priority" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="all">All Priorities</option>
                <option value="High">High (Urgent)</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label for="home-filter-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Status</label>
              <select id="home-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="all">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <!-- MANDATORY Search button always placed after the last input field -->
            <div class="flex items-end">
              <button type="button" id="home-tasks-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 4. Tasks Data Table Container -->
        <div id="home-tasks-table-container"></div>
      </div>
    `;

    this.renderTasksTable();
    this.bindEvents();
  },

  getFilteredTasks() {
    return this.tasks.filter(t => {
      if (this.filterState.department !== 'all' && t.deptCode !== this.filterState.department) return false;
      if (this.filterState.priority !== 'all' && t.priority !== this.filterState.priority) return false;
      if (this.filterState.status !== 'all' && t.status !== this.filterState.status) return false;
      if (this.filterState.search) {
        const q = this.filterState.search.toLowerCase();
        return t.title.toLowerCase().includes(q) ||
               t.description.toLowerCase().includes(q) ||
               t.code.toLowerCase().includes(q) ||
               t.assignee.toLowerCase().includes(q) ||
               t.facility.toLowerCase().includes(q);
      }
      return true;
    });
  },

  renderTasksTable() {
    const tableContainer = document.getElementById('home-tasks-table-container');
    if (!tableContainer) return;

    const data = this.getFilteredTasks();

    new DataTable({
      container: tableContainer,
      title: 'Actionable Tasks',
      data: data,
      columns: [
        {
          key: 'code',
          label: 'Task Code',
          sortable: true,
          render: (val, row) => `
            <div class="flex items-center gap-1.5">
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${val}</span>
            </div>
          `
        },
        {
          key: 'department',
          label: 'Department',
          sortable: true,
          render: (val) => `
            <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAE6FF] text-[#403294] border border-[#D3C7FF] whitespace-nowrap">
              ${val}
            </span>
          `
        },
        {
          key: 'title',
          label: 'Task & Details',
          sortable: true,
          render: (val, row) => `
            <div class="max-w-md py-0.5">
              <div class="font-bold text-xs text-[#172B4D] hover:text-[#00A4B7] transition-colors">${val}</div>
              <div class="text-[11px] text-[#5E6C84] line-clamp-1 mt-0.5">${row.description}</div>
              <div class="text-[10px] text-[#8993A4] font-medium mt-0.5 flex items-center gap-1">
                <svg class="w-3 h-3 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>${row.facility}</span>
              </div>
            </div>
          `
        },
        {
          key: 'dueTime',
          label: 'Due Schedule',
          sortable: true,
          render: (val) => `
            <div class="flex items-center gap-1.5 whitespace-nowrap">
              <svg class="w-3.5 h-3.5 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="font-mono text-xs font-semibold text-[#172B4D]">${val}</span>
            </div>
          `
        },
        {
          key: 'priority',
          label: 'Priority',
          sortable: true,
          render: (val) => {
            if (val === 'High') {
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]">High</span>`;
            } else if (val === 'Medium') {
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FFFAE6] text-[#FF8B00] border border-[#FFE380]">Medium</span>`;
            } else {
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F1F5F9] text-[#172B4D] border border-[#DFE1E6]">Low</span>`;
            }
          }
        },
        {
          key: 'status',
          label: 'Status',
          sortable: true,
          render: (val) => {
            if (val === 'Completed') {
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">Completed</span>`;
            } else if (val === 'In Progress') {
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">In Progress</span>`;
            } else {
              return `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FFFAE6] text-[#FF8B00] border border-[#FFE380]">Pending</span>`;
            }
          }
        },
        {
          key: 'assignee',
          label: 'Assignee',
          sortable: true,
          render: (val) => `
            <div class="text-xs font-semibold text-[#172B4D] whitespace-nowrap">${val}</div>
          `
        },
        {
          key: 'actions',
          label: 'Quick Action',
          sortable: false,
          render: (val, row) => `
            <div class="inline-flex items-center gap-1.5">
              <!-- Direct Quick Action button: jumps to workflow -->
              <a 
                href="${row.actionHash}" 
                class="btn-primary px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1 shadow-2xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all whitespace-nowrap"
                title="Execute action in ERP"
              >
                <span>${row.actionLabel}</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>

              <!-- Toggle Complete Button (Circular 32x32) -->
              <button 
                type="button" 
                data-task-id="${row.id}" 
                class="btn-toggle-task-done dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center rounded-full border transition-colors cursor-pointer select-none ${row.status === 'Completed' ? 'bg-[#E3FCEF] border-[#ABF5D1] text-[#006644]' : 'bg-white hover:bg-[#E3FCEF] border-[#CBD5E1] hover:border-[#ABF5D1] text-[#64748B] hover:text-[#006644]'}" 
                title="${row.status === 'Completed' ? 'Mark as Pending' : 'Mark as Completed'}"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </button>
            </div>
          `
        }
      ]
    });

    this.bindTableEvents();
  },

  bindEvents() {
    // Search button
    const searchBtn = document.getElementById('home-tasks-filter-search-btn');
    if (searchBtn) {
      searchBtn.onclick = () => {
        this.filterState.department = document.getElementById('home-filter-dept')?.value || 'all';
        this.filterState.priority = document.getElementById('home-filter-priority')?.value || 'all';
        this.filterState.status = document.getElementById('home-filter-status')?.value || 'all';
        this.renderTasksTable();
      };
    }

    // Reset button
    const resetBtn = document.getElementById('home-tasks-filter-reset-btn');
    if (resetBtn) {
      resetBtn.onclick = () => {
        this.filterState = { department: 'all', priority: 'all', status: 'all', search: '' };
        const d = document.getElementById('home-filter-dept'); if (d) d.value = 'all';
        const p = document.getElementById('home-filter-priority'); if (p) p.value = 'all';
        const s = document.getElementById('home-filter-status'); if (s) s.value = 'all';
        this.renderTasksTable();
        Toast.show('Filters reset', 'info');
      };
    }

    // Add task button
    const addBtn = document.getElementById('home-add-task-btn');
    if (addBtn) {
      addBtn.onclick = () => this.openAddTaskModal();
    }
  },

  bindTableEvents() {
    // Toggle task completed state
    const doneButtons = document.querySelectorAll('.btn-toggle-task-done');
    doneButtons.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const taskId = btn.dataset.taskId;
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) return;

        if (task.status === 'Completed') {
          task.status = 'Pending';
          Toast.show(`Task ${task.code} marked as Pending`, 'info');
        } else {
          task.status = 'Completed';
          Toast.show(`Task ${task.code} completed successfully`, 'success');
        }
        this.updateKPICounters();
        this.renderTasksTable();
      };
    });
  },

  updateKPICounters() {
    const totalEl = document.getElementById('kpi-total-tasks');
    const highEl = document.getElementById('kpi-high-priority');
    const inProgEl = document.getElementById('kpi-in-progress');
    const compEl = document.getElementById('kpi-completed');

    if (totalEl) totalEl.textContent = this.tasks.length;
    if (highEl) highEl.textContent = this.tasks.filter(t => t.priority === 'High' && t.status !== 'Completed').length;
    if (inProgEl) inProgEl.textContent = this.tasks.filter(t => t.status === 'In Progress').length;
    if (compEl) compEl.textContent = this.tasks.filter(t => t.status === 'Completed').length;
  },

  openAddTaskModal() {
    Modal.show({
      title: "Add Today's Action Task",
      size: "md",
      content: `
        <form id="home-add-task-form" class="space-y-3.5 text-xs">
          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Task Title *</label>
            <input type="text" id="ntsk-title" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="e.g. Chemical check on Soaking Floor">
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Department *</label>
              <select id="ntsk-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                <option value="preprocessing">Pre-Processing</option>
                <option value="purchase">Purchase &amp; Arrivals</option>
                <option value="quality">Quality Control Lab</option>
                <option value="production">Production &amp; Freezing</option>
                <option value="coldstore">Coldstore &amp; Logistics</option>
                <option value="sales">Sales &amp; Exports</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Priority</label>
              <select id="ntsk-priority" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                <option value="High">High (Immediate Action)</option>
                <option value="Medium" selected>Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Due Schedule</label>
              <input type="text" id="ntsk-due" value="03:00 PM" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Assignee</label>
              <input type="text" id="ntsk-assignee" value="Laxmi Narayana" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Facility / Line</label>
            <input type="text" id="ntsk-facility" value="Pre-Processing Floor #2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Task Description</label>
            <textarea id="ntsk-desc" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7]" placeholder="Action details and critical instructions..."></textarea>
          </div>
        </form>
      `,
      buttons: [
        {
          label: "Cancel",
          type: "secondary",
          onClick: () => Modal.close()
        },
        {
          label: "Add Task",
          type: "primary",
          onClick: () => {
            const title = document.getElementById('ntsk-title')?.value?.trim();
            if (!title) {
              Toast.show('Please enter task title', 'warning');
              return;
            }
            const deptCode = document.getElementById('ntsk-dept')?.value || 'preprocessing';
            const deptLabels = {
              'preprocessing': 'Pre-Processing',
              'purchase': 'Purchase & Arrivals',
              'quality': 'Quality Control Lab',
              'production': 'Production & Freezing',
              'coldstore': 'Coldstore & Logistics',
              'sales': 'Sales & Exports'
            };
            const defaultHashes = {
              'preprocessing': '#/preprocessing/operations/deheading',
              'purchase': '#/purchase/arrivals/gate-entry',
              'quality': '#/quality/testing/antibiotic',
              'production': '#/production/operations/freezing',
              'coldstore': '#/coldstore/warehouse/pallets',
              'sales': '#/sales/orders/proforma-list'
            };

            const newTask = {
              id: 'TSK-' + (1000 + this.tasks.length + 1),
              code: 'TASK-' + deptCode.substring(0, 3).toUpperCase() + '-' + Math.floor(100 + Math.random() * 900),
              title: title,
              description: document.getElementById('ntsk-desc')?.value?.trim() || title,
              department: deptLabels[deptCode] || 'Operations',
              deptCode: deptCode,
              priority: document.getElementById('ntsk-priority')?.value || 'Medium',
              status: 'Pending',
              dueTime: document.getElementById('ntsk-due')?.value || '04:00 PM',
              assignee: document.getElementById('ntsk-assignee')?.value || 'Operator',
              facility: document.getElementById('ntsk-facility')?.value || 'Unit-5',
              actionLabel: 'Take Action',
              actionHash: defaultHashes[deptCode] || '#/preprocessing/operations/deheading'
            };

            this.tasks.unshift(newTask);
            Modal.close();
            Toast.show(`Task ${newTask.code} added successfully`, 'success');
            this.updateKPICounters();
            this.renderTasksTable();
          }
        }
      ]
    });
  }
};
