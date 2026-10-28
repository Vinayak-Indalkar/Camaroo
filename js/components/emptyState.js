const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

export function renderEmptyState({
  moduleName = 'Module',
  tabName = 'Section',
  title = `No ${tabName} data available`,
  description = `There are no ${moduleName} records available in this section yet.`
} = {}) {
  return `
    <section class="min-h-[300px] flex items-center justify-center px-4 py-10 animate-fade-in" role="status">
      <div class="max-w-xl text-center">
        <p class="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">No data</p>
        <h2 class="mt-2 text-lg font-bold text-[#172B4D]">${escapeHtml(title)}</h2>
        <p class="mt-2 text-sm leading-relaxed text-[#5E6C84]">${escapeHtml(description)}</p>
      </div>
    </section>
  `;
}

export function renderRouteMessage({
  code,
  title,
  message,
  actionLabel = 'Go to dashboard',
  actionHref = '#/purchase/dashboard/rm-dashboard'
}) {
  return `
    <section class="min-h-[55vh] flex items-center justify-center px-4 py-10" role="alert">
      <div class="max-w-xl text-center">
        <p class="font-mono text-5xl font-bold text-[#0284C7]">${escapeHtml(code)}</p>
        <h1 class="mt-3 text-xl font-bold text-[#172B4D]">${escapeHtml(title)}</h1>
        <p class="mt-2 text-sm leading-relaxed text-[#5E6C84]">${escapeHtml(message)}</p>
        <a href="${escapeHtml(actionHref)}" class="btn-primary inline-flex items-center justify-center mt-6 px-4 py-2 rounded font-semibold text-sm">${escapeHtml(actionLabel)}</a>
      </div>
    </section>
  `;
}
