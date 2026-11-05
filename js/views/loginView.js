// Enterprise Login & Persona Switcher View

import { setCurrentUserRole, ERP_DATA } from '../data/mockData.js';
import { Toast } from '../components/toast.js';
import { LOGO_CAMAROO, LOGIN_ILLUSTRATION } from '../data/logos.js';

export const LoginView = {
  selectedRole: (typeof localStorage !== 'undefined' && localStorage.getItem('dfl_current_role') === 'Super Admin') ? 'Super Admin' : 'Admin',

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Check if target user was selected from Users Directory
    let targetUser = null;
    const storedUserJson = (typeof sessionStorage !== 'undefined') ? sessionStorage.getItem('dfl_login_user') : null;
    if (storedUserJson) {
      try {
        targetUser = JSON.parse(storedUserJson);
      } catch (e) {
        targetUser = null;
      }
    }

    const roleModulesMap = {
      'ROL-ADM': ['Sales & Exports', 'Purchases & Sourcing', 'Preprocessing', 'Quality Control', 'Production', 'Cold Storage', 'Inventory & Store', 'Reports & Analytics', 'Master Setup', 'Admin Settings'],
      'ROL-MGR': ['Commercial & Export Sales', 'Purchases & Sourcing', 'Preprocessing', 'Production', 'Cold Storage', 'Reports & Analytics'],
      'ROL-SUP': ['Preprocessing & Grading', 'Quality Control & Lab', 'Raw Material Weighbridge'],
      'ROL-OPR': ['Cold Storage & Pallets', 'Inventory & Store', 'Production Logs'],
      'ROL-VIE': ['Commercial & Export Invoices', 'Yield & Financial Reports']
    };

    const assignedModules = targetUser ? (roleModulesMap[targetUser.roleCode] || ['Home', 'Sales & Exports', 'Reports & Analytics']) : [];

    const isAdmin = this.selectedRole === 'Admin';
    const emailVal = targetUser ? targetUser.email : (isAdmin ? 'admin@devifisheries.com' : 'superadmin@devifisheries.com');
    const pwdVal = targetUser ? 'User@devi2026' : (isAdmin ? 'Admin@devi2024' : 'SuperAdmin@2026');

    container.innerHTML = `
      <div class="min-h-screen w-full h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
        
        <!-- Left Section: Image in separate section (70% width, Full height) -->
        <div class="w-full lg:w-[70%] h-72 sm:h-96 lg:h-full min-h-[300px] lg:min-h-screen bg-[#F3F7FA] flex items-center justify-start p-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#DFE1E6] select-none">
          <img src="${LOGIN_ILLUSTRATION}" alt="Seafood Logistics & Vessel Export" class="w-full h-full object-cover object-left" />
        </div>

        <!-- Right Section: Login Page in separate section (30% width, Full height) -->
        <div class="w-full lg:w-[30%] flex-1 lg:h-full bg-white flex flex-col items-center justify-center p-6 sm:p-8 lg:p-8 xl:p-10 overflow-y-auto">
          <div class="w-full max-w-[380px] flex flex-col justify-between my-auto">
            
            <!-- Top Brand Header -->
            <div>
              <div class="flex flex-col items-center text-center mb-6">
                <img src="${LOGO_CAMAROO}" alt="Camaroo ERP" class="h-12 w-auto max-w-[220px] object-contain mb-1" />
              </div>

              <!-- Sign In Heading -->
              <div class="mb-5 text-center">
                <h2 class="text-xl font-bold text-[#172B4D]">Sign In</h2>
                <p class="text-xs text-[#5E6C84] mt-1">${targetUser ? 'Authenticating assigned corporate credentials' : 'Select your access role and enter credentials'}</p>
              </div>

              ${targetUser ? `
                <!-- Selected User Identity Card with Assigned Menus & Modules -->
                <div class="mb-4 p-3.5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl shadow-2xs">
                  <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-[#BAE6FD]/70">
                    <div class="flex items-center gap-2.5">
                      ${targetUser.photo ? `
                        <img src="${targetUser.photo}" alt="${targetUser.name}" class="w-10 h-10 rounded-full object-cover shrink-0 border border-[#BAE6FD]" />
                      ` : `
                        <div class="w-10 h-10 rounded-full bg-[#00A4B7] text-white font-extrabold flex items-center justify-center text-xs shrink-0 shadow-xs">
                          ${targetUser.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                      `}
                      <div class="min-w-0">
                        <div class="flex items-center gap-1.5 flex-wrap">
                          <span class="font-bold text-xs text-[#172B4D] truncate">${targetUser.name}</span>
                          <span class="px-1.5 py-0.2 rounded text-[10px] font-extrabold uppercase bg-white text-[#00A4B7] border border-[#BAE6FD]">${targetUser.roleCode || 'USER'}</span>
                        </div>
                        <span class="text-[11px] text-[#5E6C84] block truncate mt-0.5">${targetUser.role} • ${targetUser.department}</span>
                      </div>
                    </div>
                    <button type="button" id="clear-target-user-btn" class="text-[11px] font-bold text-[#00A4B7] hover:underline whitespace-nowrap cursor-pointer" title="Return to standard login switcher">
                      Switch User
                    </button>
                  </div>

                  <!-- Assigned Menus & Modules List -->
                  <div class="pt-2.5">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider">Assigned Menus &amp; Modules:</span>
                      <span class="text-[10px] font-extrabold text-[#006644]">${assignedModules.length} Modules</span>
                    </div>
                    <div class="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                      ${assignedModules.map(m => `
                        <span class="px-2 py-0.5 rounded text-[10.5px] font-semibold bg-white text-[#172B4D] border border-[#DFE1E6] shadow-2xs">${m}</span>
                      `).join('')}
                    </div>
                  </div>
                </div>
              ` : `
                <!-- Role Selector: Admin / Super Admin -->
                <div class="mb-4">
                  <div class="grid grid-cols-2 p-1 bg-[#F4F5F7] rounded-full border border-[#DFE1E6] gap-1">
                    <button 
                      type="button" 
                      id="role-tab-admin" 
                      class="role-select-btn py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${isAdmin ? 'bg-white text-[#00A4B7] shadow-xs border border-[#DFE1E6]' : 'text-[#5E6C84] hover:text-[#172B4D]'}"
                      data-role="Admin"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                      <span>Admin</span>
                    </button>
                    <button 
                      type="button" 
                      id="role-tab-superadmin" 
                      class="role-select-btn py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${!isAdmin ? 'bg-white text-[#00A4B7] shadow-xs border border-[#DFE1E6]' : 'text-[#5E6C84] hover:text-[#172B4D]'}"
                      data-role="Super Admin"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                      <span>Super Admin</span>
                    </button>
                  </div>
                </div>
              `}

              <!-- Sign In Form -->
              <form id="login-form" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-[#172B4D] mb-0">Email</label>
                  <input 
                    type="text" 
                    id="login-email" 
                    required 
                    value="${emailVal}" 
                    class="w-full text-xs px-3.5 py-2.5 bg-[#FAFBFC] border border-[#DFE1E6] rounded-xl focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-[#172B4D] mb-0">Password</label>
                  <div class="relative flex items-center">
                    <input 
                      type="password" 
                      id="login-password" 
                      required 
                      value="${pwdVal}" 
                      class="w-full text-xs px-3.5 py-2.5 pr-10 bg-[#FAFBFC] border border-[#DFE1E6] rounded-xl focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all"
                    />
                    <button 
                      type="button" 
                      id="toggle-pwd-btn" 
                      class="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[#6B778C] hover:text-[#172B4D] transition-colors cursor-pointer bg-transparent border-0 p-0" 
                      title="Show password"
                      aria-label="Show password"
                    >
                      <svg id="eye-closed-icon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>
                      <svg id="eye-open-icon" class="w-4 h-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    </button>
                  </div>
                </div>

                <!-- Remember Me & Forgot Password -->
                <div class="flex items-center justify-between text-xs pt-0.5">
                  <label class="flex items-center gap-2 cursor-pointer select-none text-[#172B4D]">
                    <input 
                      type="checkbox" 
                      id="login-remember-me" 
                      checked 
                      class="rounded border-[#DFE1E6] text-[#0284C7] focus:ring-0 cursor-pointer"
                    />
                    <span class="font-medium text-[#42526E]">Remember me</span>
                  </label>
                  <button type="button" id="forgot-password-btn" class="text-xs text-[#0284C7] hover:underline font-medium">Forgot password?</button>
                </div>

                <div class="pt-2">
                  <button 
                    type="submit" 
                    id="submit-login-btn" 
                    class="w-full btn-primary py-3 rounded-full font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <span id="login-btn-text">${targetUser ? `Sign In as ${targetUser.name.split(' ')[0]}` : 'Sign In'}</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    `;

    this.bindEvents(containerId, targetUser);
  },

  bindEvents(containerId, targetUser) {
    const form = document.getElementById('login-form');
    const pwdInput = document.getElementById('login-password');
    const togglePwdBtn = document.getElementById('toggle-pwd-btn');
    const emailInput = document.getElementById('login-email');
    const submitBtn = document.getElementById('submit-login-btn');
    const btnText = document.getElementById('login-btn-text');
    const adminTab = document.getElementById('role-tab-admin');
    const superAdminTab = document.getElementById('role-tab-superadmin');
    const clearTargetUserBtn = document.getElementById('clear-target-user-btn');

    if (clearTargetUserBtn) {
      clearTargetUserBtn.addEventListener('click', () => {
        sessionStorage.removeItem('dfl_login_user');
        this.render(containerId);
      });
    }

    // Role switcher tabs
    const updateRoleUI = (role) => {
      this.selectedRole = role;
      if (role === 'Super Admin') {
        if (superAdminTab) {
          superAdminTab.className = 'role-select-btn py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-white text-[#00A4B7] shadow-xs border border-[#DFE1E6]';
        }
        if (adminTab) {
          adminTab.className = 'role-select-btn py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-[#5E6C84] hover:text-[#172B4D]';
        }
        if (emailInput) emailInput.value = 'superadmin@devifisheries.com';
        if (pwdInput) pwdInput.value = 'SuperAdmin@2026';
      } else {
        if (adminTab) {
          adminTab.className = 'role-select-btn py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-white text-[#00A4B7] shadow-xs border border-[#DFE1E6]';
        }
        if (superAdminTab) {
          superAdminTab.className = 'role-select-btn py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-[#5E6C84] hover:text-[#172B4D]';
        }
        if (emailInput) emailInput.value = 'admin@devifisheries.com';
        if (pwdInput) pwdInput.value = 'Admin@devi2024';
      }
    };

    if (adminTab) {
      adminTab.addEventListener('click', () => updateRoleUI('Admin'));
    }
    if (superAdminTab) {
      superAdminTab.addEventListener('click', () => updateRoleUI('Super Admin'));
    }

    // Toggle password visibility and switch eye icon
    if (togglePwdBtn && pwdInput) {
      togglePwdBtn.addEventListener('click', () => {
        const isPwd = pwdInput.type === 'password';
        pwdInput.type = isPwd ? 'text' : 'password';
        const eyeOpen = togglePwdBtn.querySelector('#eye-open-icon');
        const eyeClosed = togglePwdBtn.querySelector('#eye-closed-icon');
        if (eyeOpen && eyeClosed) {
          if (isPwd) {
            eyeOpen.classList.remove('hidden');
            eyeClosed.classList.add('hidden');
            togglePwdBtn.title = 'Hide password';
            togglePwdBtn.setAttribute('aria-label', 'Hide password');
          } else {
            eyeOpen.classList.add('hidden');
            eyeClosed.classList.remove('hidden');
            togglePwdBtn.title = 'Show password';
            togglePwdBtn.setAttribute('aria-label', 'Show password');
          }
        }
      });
    }

    // Forgot password
    const forgotBtn = document.getElementById('forgot-password-btn');
    if (forgotBtn) {
      forgotBtn.addEventListener('click', () => {
        Toast.show('A secure password reset link has been dispatched to your corporate email.', 'info', 'Password Reset Requested');
      });
    }

    // Form Submit
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        btnText.innerText = 'Authenticating Enterprise SSO...';
        submitBtn.classList.add('opacity-75', 'cursor-wait');

        setTimeout(() => {
          if (targetUser) {
            const user = {
              id: targetUser.id,
              empId: targetUser.empId,
              name: targetUser.name,
              role: targetUser.role,
              roleCode: targetUser.roleCode,
              email: targetUser.email,
              phone: targetUser.phone,
              department: targetUser.department,
              avatar: targetUser.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
              roles: [targetUser.role],
              company: 'Devi Fisheries Limited'
            };
            ERP_DATA.currentUser = user;
            localStorage.setItem('dfl_current_role', user.role);
            localStorage.setItem('dfl_current_user', JSON.stringify(user));
            sessionStorage.removeItem('dfl_login_user');

            localStorage.setItem('erp_layout_mode', 'option1');
            sessionStorage.removeItem('trigger_tour_on_login');

            const existing = document.getElementById('erp-app-shell');
            if (existing) existing.remove();

            Toast.show(`Welcome, ${user.name} (${user.role}) — viewing assigned modules`, 'success', 'Login Successful');

            // Navigate to first assigned module for this role
            if (targetUser.roleCode === 'ROL-SUP') {
              window.location.hash = '#/preprocessing/dashboard/overview';
            } else if (targetUser.roleCode === 'ROL-OPR') {
              window.location.hash = '#/coldstore/dashboard/overview';
            } else if (targetUser.roleCode === 'ROL-VIE') {
              window.location.hash = '#/sales/dashboard/overview';
            } else {
              window.location.hash = '#/purchase/dashboard/rm-dashboard';
            }
            return;
          }

          const email = (emailInput?.value || '').trim().toLowerCase();
          const targetRole = (this.selectedRole === 'Super Admin' || email.includes('superadmin')) ? 'Super Admin' : 'Admin';
          
          const user = setCurrentUserRole(targetRole);
          localStorage.removeItem('dfl_current_user');

          localStorage.setItem('erp_layout_mode', 'option1');
          sessionStorage.removeItem('trigger_tour_on_login');
          
          const existing = document.getElementById('erp-app-shell');
          if (existing) existing.remove();
          
          Toast.show(`Welcome back, ${user.name} (${user.role})`, 'success', 'Authentication Successful');
          
          if (targetRole === 'Super Admin') {
            window.location.hash = '#/dashboard/overview/system-overview';
          } else {
            window.location.hash = '#/purchase/dashboard/rm-dashboard';
          }
        }, 400);
      });
    }
  }
};
