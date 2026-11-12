// Devi Fisheries ERP — Home View (Executive Operations Dashboard)
import { Charts } from '../components/charts.js';

export const HomeView = {
  render(containerId, tabName, resolvedHash) {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) return;

    // Cross-menu metrics for the executive overview
    const menuCards = [
      {
        title: 'Purchase & Arrivals',
        section: 'Procurement & Intake',
        count: '12 Batches Received',
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>`
      },
      {
        title: 'Pre-Processing',
        section: 'Deheading & Grading',
        count: '8 Runs (66% Yield)',
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a3 3 0 11-4.242-4.242L10.758 4.758M12 12L4.758 19.242a3 3 0 01-4.242-4.242L3.395 12"/></svg>`
      },
      {
        title: 'Quality Control Lab',
        section: 'Testing & Compliance',
        count: '100% Cleared Lots',
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
      },
      {
        title: 'Production & Freezing',
        section: 'IQF & Blast Freezers',
        count: '6 Freezing Runs',
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`
      },
      {
        title: 'Coldstore & Warehousing',
        section: 'Finished Stock Vaults',
        count: '1,840 MT (82% Cap)',
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`
      },
      {
        title: 'Sales & Global Exports',
        section: 'Commercial Execution',
        count: '18 Containers Active',
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
      }
    ];

    container.innerHTML = `
      <div class="space-y-4 animate-fade-in select-none">
        <!-- Page Title (Strictly Rule 2: Title ONLY, no subheadings) -->
        <div class="flex items-center justify-between mb-1">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Executive Operations Dashboard</h1>
        </div>

        <!-- 4 Minimalist Executive KPI Cards (Static Overview) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">RM Intake Today</div>
            <div class="text-2xl font-black text-[#172B4D] mt-1 font-mono">24,500 <span class="text-xs font-semibold text-[#5E6C84]">KG</span></div>
            <div class="text-[11px] font-semibold text-[#00A4B7] mt-1">Live Center Intake</div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Factory Output</div>
            <div class="text-2xl font-black text-[#006644] mt-1 font-mono">16,170 <span class="text-xs font-semibold text-[#5E6C84]">KG</span></div>
            <div class="text-[11px] font-semibold text-[#006644] mt-1">66.0% Recovery Yield</div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Coldstore Holding</div>
            <div class="text-2xl font-black text-[#172B4D] mt-1 font-mono">1,840 <span class="text-xs font-semibold text-[#5E6C84]">MT</span></div>
            <div class="text-[11px] font-semibold text-[#00A4B7] mt-1">82% Chamber Capacity</div>
          </div>
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Export Revenue</div>
            <div class="text-2xl font-black text-[#172B4D] mt-1 font-mono">$1.42M</div>
            <div class="text-[11px] font-semibold text-[#5E6C84] mt-1">18 Containers In Transit</div>
          </div>
        </div>

        <!-- Cross-Menu Operations Sections (6 Clean Static Cards, Zero Clicks) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          ${menuCards.map(card => `
            <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-xs flex items-center justify-between cursor-default">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] text-[#00A4B7] flex items-center justify-center shrink-0">
                  ${card.icon}
                </div>
                <div>
                  <div class="text-xs font-bold text-[#172B4D]">${card.title}</div>
                  <div class="text-[10px] font-semibold text-[#5E6C84] uppercase tracking-wider mt-0.5">${card.section}</div>
                </div>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6]">${card.count}</span>
            </div>
          `).join('')}
        </div>

        <!-- Clean Visual Graphs (Related to Enterprise Menus, Replacing Tables) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <!-- Graph 1: Plant Throughput Across Menus (KG) -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Plant Throughput Across Operations (KG)</h3>
              <span class="text-[11px] font-semibold text-[#5E6C84]">Shift Flow</span>
            </div>
            <div class="h-64 w-full">
              <canvas id="home-throughput-chart"></canvas>
            </div>
          </div>

          <!-- Graph 2: Monthly Commercial Export Revenue Trend ($k USD) -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-4 shadow-xs">
            <div class="flex items-center justify-between pb-3 border-b border-[#F4F5F7] mb-3">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Export Revenue &amp; Realization ($k USD)</h3>
              <span class="text-[11px] font-semibold text-[#006644] font-mono">Target: $250k/mo</span>
            </div>
            <div class="h-64 w-full">
              <canvas id="home-revenue-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;

    // Render Charts safely after DOM insertion
    setTimeout(() => {
      const chartHelper = typeof Charts !== 'undefined' ? Charts : (typeof window !== 'undefined' ? window.Charts : null);
      if (chartHelper && typeof Chart !== 'undefined') {
        // 1. Throughput by Menu Stage Bar Chart
        if (typeof chartHelper.renderBarChart === 'function') {
          chartHelper.renderBarChart(
            'home-throughput-chart',
            ['RM Intake', 'Deheading', 'Grading', 'IQF Freezing', 'Coldstore Stock'],
            [
              {
                label: 'Throughput (KG)',
                data: [24500, 16170, 15800, 15200, 14800],
                backgroundColor: '#00A4B7',
                borderRadius: 6
              }
            ],
            {
              plugins: {
                legend: { display: false }
              },
              scales: {
                y: {
                  grid: { color: '#F1F5F9' },
                  ticks: {
                    font: { size: 10, family: 'Inter' },
                    color: '#5E6C84',
                    callback: v => `${v.toLocaleString()} KG`
                  }
                },
                x: {
                  grid: { display: false },
                  ticks: { font: { size: 10, family: 'Inter', weight: 'bold' }, color: '#172B4D' }
                }
              }
            }
          );
        }

        // 2. Export Revenue vs Target Line Chart
        if (typeof chartHelper.renderLineChart === 'function') {
          chartHelper.renderLineChart(
            'home-revenue-chart',
            ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
            [
              {
                label: 'Realized Revenue ($k)',
                data: [190, 215, 230, 245, 260, 280],
                borderColor: '#00A4B7',
                backgroundColor: 'rgba(0, 164, 183, 0.1)',
                fill: true,
                pointBackgroundColor: '#00A4B7',
                pointRadius: 4
              },
              {
                label: 'Order Booking ($k)',
                data: [210, 230, 250, 265, 280, 295],
                borderColor: '#5E6C84',
                borderDash: [4, 4],
                backgroundColor: 'transparent',
                pointRadius: 3
              }
            ],
            {
              scales: {
                y: {
                  grid: { color: '#F1F5F9' },
                  ticks: {
                    font: { size: 10, family: 'Inter' },
                    color: '#5E6C84',
                    callback: v => `$${v}k`
                  }
                },
                x: {
                  grid: { display: false },
                  ticks: { font: { size: 10, family: 'Inter', weight: 'bold' }, color: '#172B4D' }
                }
              }
            }
          );
        }
      }
    }, 60);
  }
};
