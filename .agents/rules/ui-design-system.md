# Devi Fisheries ERP — UI Design System Rules & Guidelines

All screens, views, components, and user workflows MUST strictly conform to the following Enterprise UI Design System rules across the application.

---

## 1. Color Palette & Typography
- **Primary Brand Teal**: `#00A4B7` (Hover: `#008F9F`, Active/Border: `#007A87`)
- **Dark Neutral Text**: `#172B4D` (Primary headers and bold text)
- **Muted Neutral Text**: `#5E6C84` (Labels, metadata, captions)
- **Borders & Dividers**: `#DFE1E6` (Cards, table cells, inputs), `#F1F5F9` (Subtle dividers)
- **Backgrounds**:
  - Page Background: `#F4F5F7` / `#F8FAFC`
  - Card & Container Background: `#FFFFFF`
  - Subtle Highlight Background: `#F8FAFC` / `#F4F5F7`
  - Accent Light: `#F0F9FF` (Border: `#BAE6FD`, Text: `#00A4B7`)
- **Status Lozenges / Badges**:
  - Success / Active / Verified: `bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]`
  - Warning / In-Progress / Due: `bg-[#FFFAE6] text-[#FF8B00] border border-[#FFE380]`
  - Danger / Rejected / Overdue: `bg-[#FFEBE6] text-[#DE350B] border border-[#FFBDAD]`
  - Default / Neutral: `bg-[#F1F5F9] text-[#172B4D] border border-[#DFE1E6]`

---

## 2. Page Headers & Headings
- **Page Title**:
  ```html
  <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Page Title</h1>
  ```
- **Contextual Inputs on Heading Line** (e.g. Report Type dropdown):
  - Placed alongside heading in a flex container:
  ```html
  <div class="flex items-center gap-2">
    <label for="flt-type" class="text-xs font-bold text-[#5E6C84] whitespace-nowrap uppercase tracking-wider">Report Type:</label>
    <select id="flt-type" class="text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] min-w-[240px]">...</select>
  </div>
  ```
- **Primary Action Buttons** (e.g. Add Record):
  ```html
  <button type="button" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
    <span>Add Record</span>
  </button>
  ```

---

## 3. Search & Filter Cards
- **Card Wrapper**:
  ```html
  <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
    <div class="flex items-center justify-between pb-1">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
        <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
      </div>
      <div class="inline-flex items-center gap-2">
        <!-- Circular 32x32 Reset Button -->
        <button type="button" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
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
      <!-- Input fields here -->
      <!-- MANDATORY Search button always placed after the last input field -->
      <div class="flex items-end">
        <button type="button" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span>Search</span>
        </button>
      </div>
    </div>
  </div>
  ```
- **Labels**: `block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1`
- **Inputs & Selects**: `w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs`

---

## 4. Data Tables (`DataTable`)
- Always construct using `new DataTable({...})`.
- **Title**: `${sectionTitle} (${recordCount})`
- **Toolbar**: Column visibility dropdown, Export menu (Excel, CSV, PDF), quick search.
- **Selection**: When selection is needed, set `selectable: true` and `showSelectedCount: false` so that popup count banners are suppressed.
- **Action Column**:
  - Must use circular 32x32 action buttons (`dt-action-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-full text-[#334155]`).
  - Never add eye icon for view; clicking the row opens the detail modal.
  - Actions column button styles:
    - Download: Teal icon (`d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"`)
    - Edit: Teal pencil icon
    - Delete: Red trash icon

---

## 5. Modals, Forms & Confirmation Popups
- **Confirmation Popups**:
  - Always use `Modal.confirm({ title, message, confirmText, cancelText, isDestructive, onConfirm })`.
  - Destructive actions (Delete, Void) must set `isDestructive: true`.
- **Detail Views & Form Modals**:
  - Always call `Modal.open({ title, size: 'md'|'lg'|'xl', content, buttons })`.
  - `Modal.show` also supports passing an options object (`{ title, content, buttons }`) or `(title, content)`.
  - Details modals display:
    - Header card with entity identifier and status pill (`bg-[#E0F2FE] text-[#0284C7]`).
    - Key-value list: `py-2.5 border-b border-[#F1F5F9] flex justify-between items-center text-xs`.
    - Footer buttons: Cancel/Close (`type: 'secondary'`) and Confirm/Download (`type: 'primary'`).

---

## 6. Tabs & Navigation
- **Sidebar**:
  - Dark floating sidebar with `#00A4B7` teal active indicator.
  - Submenu accordion with left teal border `border-l-2 border-[#00A4B7]`.
  - Direct routing on hash change.
- **Tabs**:
  - Tab bar pills: Active tab has `bg-[#00A4B7] text-white font-bold`, inactive tabs have `text-[#5E6C84] hover:bg-[#EBECF0]`.

---

## 7. CRUD Operations Standard Flow
1. **Create**: Trigger button (`Add Record`) -> clean modal / form card -> client validation -> optimistic update -> `Toast.show('... added successfully', 'success')`.
2. **Read**: Search & Filter + responsive DataTable with sorting, pagination, and column resizing.
3. **Update**: Action button / click -> pre-populated modal -> update -> `Toast.show('... updated successfully', 'success')`.
4. **Delete**: Action button -> `Modal.confirm` destructive popup -> removal from dataset -> table refresh -> `Toast.show('... deleted', 'success')`.

