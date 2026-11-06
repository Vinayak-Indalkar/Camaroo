// Devi Fisheries ERP — Configuration Module Views (Masters & Forms Builder)
// Unified configuration access for both Super Admin and Admin portal

import { SettingsView } from './settingsView.js';

export const ConfigurationView = {
  render(containerId, submenu = 'masters', tab = 'master-records', resolvedHash = '') {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) return;

    const submenuClean = (submenu || '').toLowerCase();
    const tabClean = (tab || '').toLowerCase();

    // 1. Masters Submenu: All enterprise master entities from Admin site settings
    if (submenuClean === 'masters' || submenuClean === 'master' || submenuClean === 'master-setup') {
      SettingsView.initMasterData();
      SettingsView.activeMasterModule = SettingsView.activeMasterModule || 'coldstore';
      SettingsView.masterSearchQuery = '';
      SettingsView.masterStatusFilter = 'All';
      SettingsView.renderMasterSetupTab(container, '', 'Masters');
      return;
    }

    // 2. Forms Builder Submenu: Forms, Fields Customizer, and Query Editor from Super Admin Settings
    let activeTab = 'forms';
    if (
      tabClean === 'fields-customizer' ||
      tabClean === 'field-builder' ||
      tabClean === 'fields' ||
      tabClean === 'custom-fields' ||
      (resolvedHash && resolvedHash.includes('fields-customizer'))
    ) {
      activeTab = 'fields-customizer';
    } else if (
      tabClean === 'query-editor' ||
      tabClean === 'query-editer' ||
      (resolvedHash && resolvedHash.includes('query-editor'))
    ) {
      activeTab = 'query-editor';
    } else {
      activeTab = 'forms';
    }

    const isFormsActive = activeTab === 'forms';
    const isFieldsActive = activeTab === 'fields-customizer';
    const isQueryActive = activeTab === 'query-editor';

    // Horizontal Tab Bar strictly adhering to Design System Rule 6
    const formBuilderTabsBarHtml = `
      <div class="border-b border-[#DFE1E6] mb-4">
        <div role="tablist" aria-label="Forms Builder views" id="configuration-tab-bar-container-tablist" class="flex items-center gap-1 overflow-x-auto bg-transparent p-0 scrollbar-thin">
          <a id="tab-cfg-forms" role="tab" href="#/configuration/form-builder/forms" aria-selected="${isFormsActive ? 'true' : 'false'}" tabindex="${isFormsActive ? '0' : '-1'}" aria-controls="panel-forms" class="select-none px-3 pt-2 pb-2 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent border-b-2 ${isFormsActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent'}">
            <span class="select-none">Forms</span>
          </a>
          <a id="tab-cfg-fields-customizer" role="tab" href="#/configuration/form-builder/fields-customizer" aria-selected="${isFieldsActive ? 'true' : 'false'}" tabindex="${isFieldsActive ? '0' : '-1'}" aria-controls="panel-fields-customizer" class="select-none px-3 pt-2 pb-2 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent border-b-2 ${isFieldsActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent'}">
            <span class="select-none">Fields Customizer</span>
          </a>
          <a id="tab-cfg-query-editor" role="tab" href="#/configuration/form-builder/query-editor" aria-selected="${isQueryActive ? 'true' : 'false'}" tabindex="${isQueryActive ? '0' : '-1'}" aria-controls="panel-query-editor" class="select-none px-3 pt-2 pb-2 text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 outline-none bg-transparent border-b-2 ${isQueryActive ? 'tab-active text-[#00A4B7] border-[#00A4B7] font-bold' : 'text-[#5E6C84] hover:text-[#172B4D] border-transparent'}">
            <span class="select-none">Query Editor</span>
          </a>
        </div>
      </div>
    `;

    if (activeTab === 'fields-customizer') {
      SettingsView.renderFieldsCustomizerTab(container, formBuilderTabsBarHtml);
    } else if (activeTab === 'query-editor') {
      SettingsView.renderQueryEditorTab(container, formBuilderTabsBarHtml);
    } else {
      SettingsView.renderFormsTab(container, formBuilderTabsBarHtml);
    }
  }
};

window.ConfigurationView = ConfigurationView;

