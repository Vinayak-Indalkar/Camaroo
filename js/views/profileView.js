// My Profile View for Devi Fisheries ERP
import { ERP_DATA } from '../data/mockData.js';
import { Toast } from '../components/toast.js';
import { Header } from '../components/header.js';

export const ProfileView = {
  tempAvatarUrl: null,

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const user = ERP_DATA.currentUser || {
      id: 'ADM-001',
      name: 'P. Rama Krishna',
      role: 'Admin',
      email: 'ramakrishna.p@devifisheries.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      roles: ['Admin'],
      company: 'Devi Fisheries Limited',
      phone: '+91 98480 12345'
    };

    const currentPhone = user.phone || '+91 98480 12345';
    const currentAltPhone = user.altPhone || '+91 891 2788900';
    const currentAvatar = this.tempAvatarUrl || user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';

    container.innerHTML = `
      <div class="profile-page-container w-full space-y-4 px-[6px]">
        <!-- Page Header -->
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">My Profile</h1>
        </div>

        <!-- Profile Hero & Picture Card (Editable Profile Picture) -->
        <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          <div class="flex items-center gap-4">
            <!-- Profile Avatar with Upload Indicator -->
            <div class="relative group">
              <img id="profile-preview-avatar" src="${currentAvatar}" alt="${user.name}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#00A4B7] shadow-xs bg-white" />
              <label for="profile-avatar-file-input" class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#00A4B7] hover:bg-[#008F9F] text-white flex items-center justify-center cursor-pointer shadow-xs transition-transform transform hover:scale-110" title="Upload new photo">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </label>
              <input type="file" id="profile-avatar-file-input" accept="image/*" class="hidden" />
            </div>

            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h2 class="text-base font-extrabold text-[#0F172A]">${user.name}</h2>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#E0F2FE] text-[#00A4B7] border border-[#BAE6FD]">
                  ${user.role}
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
                  Active
                </span>
              </div>
              <div class="text-xs text-[#5E6C84] mt-0.5">${user.email} • ID: <span class="font-mono font-bold text-[#172B4D]">${user.id}</span></div>
              <div class="text-[11px] text-[#64748B] mt-1 flex items-center gap-2">
                <span>${user.company || 'Devi Fisheries Limited'}</span>
                <span>•</span>
                <span>Visakhapatnam Plant 1 (EIA 1018)</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button type="button" id="btn-trigger-upload" class="px-3.5 py-1.5 bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#172B4D] hover:text-[#00A4B7] rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs">
              <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
              <span>Change Photo</span>
            </button>
            <button type="button" id="btn-remove-avatar" style="padding: 6px !important; min-height: auto !important;" class="p-[6px] bg-white hover:bg-[#FFEBE6] border border-[#CBD5E1] hover:border-[#DE350B] text-[#5E6C84] hover:text-[#DE350B] rounded-full inline-flex items-center justify-center transition-colors cursor-pointer shadow-2xs" title="Reset photo to default">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Section 1: Contact Information (EDITABLE Contact No.) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">1</span>
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Contact Information</h3>
            </div>

            <div>
              <label for="prof-phone-input" class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                Primary Contact Number <span class="text-[#DE350B]">*</span>
              </label>
              <input 
                type="text" 
                id="prof-phone-input" 
                value="${currentPhone}" 
                placeholder="+91 98480 12345" 
                class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" 
              />
              <p class="text-[10px] text-[#5E6C84] mt-1">Used for urgent SMS dispatch notifications and OTP verification.</p>
            </div>

            <div>
              <label for="prof-alt-phone-input" class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">
                Alternate Contact / WhatsApp Number
              </label>
              <input 
                type="text" 
                id="prof-alt-phone-input" 
                value="${currentAltPhone}" 
                placeholder="+91 891 2788900" 
                class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" 
              />
            </div>
          </div>

          <!-- Section 2: Security & Password (EDITABLE Change Password) -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3">
            <div class="flex items-center gap-2 border-b border-[#F1F5F9]">
              <span class="w-6 h-6 rounded-md bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center font-bold text-xs">2</span>
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Change Password</h3>
            </div>

            <div>
              <label for="prof-current-pwd" class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">Current Password</label>
              <div class="relative">
                <input 
                  type="password" 
                  id="prof-current-pwd" 
                  placeholder="Enter current password" 
                  autocomplete="current-password"
                  class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs pr-8" 
                />
                <button type="button" style="padding: 6px !important; min-height: auto !important;" class="pwd-toggle-btn p-[6px] absolute right-2 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#172B4D] cursor-pointer rounded-full hover:bg-[#F1F5F9] transition-colors" data-target="prof-current-pwd">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label for="prof-new-pwd" class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">New Password</label>
                <div class="relative">
                  <input 
                    type="password" 
                    id="prof-new-pwd" 
                    placeholder="Min 6 characters" 
                    autocomplete="new-password"
                    class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs pr-8" 
                  />
                  <button type="button" style="padding: 6px !important; min-height: auto !important;" class="pwd-toggle-btn p-[6px] absolute right-2 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#172B4D] cursor-pointer rounded-full hover:bg-[#F1F5F9] transition-colors" data-target="prof-new-pwd">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </button>
                </div>
              </div>

              <div>
                <label for="prof-confirm-pwd" class="block text-[11px] font-bold text-[#172B4D] uppercase tracking-wider mb-1">Confirm New Password</label>
                <div class="relative">
                  <input 
                    type="password" 
                    id="prof-confirm-pwd" 
                    placeholder="Re-type new password" 
                    autocomplete="new-password"
                    class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs pr-8" 
                  />
                  <button type="button" style="padding: 6px !important; min-height: auto !important;" class="pwd-toggle-btn p-[6px] absolute right-2 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#172B4D] cursor-pointer rounded-full hover:bg-[#F1F5F9] transition-colors" data-target="prof-confirm-pwd">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <p class="text-[10px] text-[#5E6C84]">Leave blank if you do not wish to change your password.</p>
          </div>
        </div>

        <!-- Section 3: Identity & Enterprise Roles (DISABLED PER USER INSTRUCTIONS) -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-2xs space-y-3">
          <div class="flex items-center gap-2 border-b border-[#F1F5F9] pb-2">
            <span class="w-6 h-6 rounded-md bg-[#F1F5F9] text-[#5E6C84] flex items-center justify-center font-bold text-xs">3</span>
            <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Enterprise Identity & Organization Details</h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Full Name</label>
              <input type="text" value="${user.name}" disabled readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-semibold text-[#5E6C84] cursor-not-allowed select-none shadow-none" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Employee ID</label>
              <input type="text" value="${user.id}" disabled readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#5E6C84] cursor-not-allowed select-none shadow-none" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Work Email Address</label>
              <input type="text" value="${user.email}" disabled readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-semibold text-[#5E6C84] cursor-not-allowed select-none shadow-none" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Primary Role</label>
              <input type="text" value="${user.role}" disabled readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-semibold text-[#5E6C84] cursor-not-allowed select-none shadow-none" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Company / Organization</label>
              <input type="text" value="${user.company || 'Devi Fisheries Limited'}" disabled readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-semibold text-[#5E6C84] cursor-not-allowed select-none shadow-none" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Department</label>
              <input type="text" value="Operations & Cold Chain Management" disabled readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-semibold text-[#5E6C84] cursor-not-allowed select-none shadow-none" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Assigned Plant Scope</label>
              <input type="text" value="Vizag Processing Unit 1 (EIA 1018)" disabled readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-semibold text-[#5E6C84] cursor-not-allowed select-none shadow-none" />
            </div>

            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">Account Security Status</label>
              <div class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-semibold text-[#006644] cursor-not-allowed select-none flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#006644]"></span>
                <span>Active & Compliant</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 4: Bottom Save Bar -->
        <div class="flex items-center justify-end gap-3 pt-2">
          <button type="button" id="btn-cancel-profile" class="px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#172B4D] transition-all cursor-pointer">
            Cancel
          </button>
          <button type="button" id="btn-save-user-profile-bottom" class="btn-primary px-6 py-2 rounded-full text-xs font-bold inline-flex items-center justify-center cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <span>Save Profile</span>
          </button>
        </div>
      </div>
    `;

    this.bindEvents();
  },

  bindEvents() {
    const fileInput = document.getElementById('profile-avatar-file-input');
    const triggerBtn = document.getElementById('btn-trigger-upload');
    const removeBtn = document.getElementById('btn-remove-avatar');
    const previewImg = document.getElementById('profile-preview-avatar');

    // Trigger file dialog
    if (triggerBtn && fileInput) {
      triggerBtn.onclick = () => fileInput.click();
    }

    // Handle avatar file upload
    if (fileInput && previewImg) {
      fileInput.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
          Toast.show('Please select a valid image file (PNG, JPG, WebP)', 'error');
          return;
        }

        if (file.size > 5 * 1024 * 1024) {
          Toast.show('Image size exceeds 5MB limit', 'warning');
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          this.tempAvatarUrl = event.target.result;
          previewImg.src = this.tempAvatarUrl;
          Toast.show('Photo selected. Click "Save Profile" to apply changes.', 'info');
        };
        reader.readAsDataURL(file);
      };
    }

    // Reset avatar
    if (removeBtn && previewImg) {
      removeBtn.onclick = () => {
        const defaultAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
        this.tempAvatarUrl = defaultAvatar;
        previewImg.src = defaultAvatar;
        Toast.show('Photo reset to default. Click "Save Profile" to persist.', 'info');
      };
    }

    // Password visibility toggles
    document.querySelectorAll('.pwd-toggle-btn').forEach(btn => {
      btn.onclick = () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        if (!input) return;
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        btn.innerHTML = isPassword
          ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>`
          : `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
      };
    });

    // Save profile handler
    const saveProfile = () => {
      const phoneInput = document.getElementById('prof-phone-input');
      const altPhoneInput = document.getElementById('prof-alt-phone-input');
      const currentPwd = document.getElementById('prof-current-pwd');
      const newPwd = document.getElementById('prof-new-pwd');
      const confirmPwd = document.getElementById('prof-confirm-pwd');

      const phone = phoneInput ? phoneInput.value.trim() : '';
      const altPhone = altPhoneInput ? altPhoneInput.value.trim() : '';

      if (!phone) {
        Toast.show('Primary Contact Number is required', 'warning');
        phoneInput?.focus();
        return;
      }

      // Password validation if entered
      if (newPwd && newPwd.value.trim()) {
        const np = newPwd.value.trim();
        const cp = confirmPwd ? confirmPwd.value.trim() : '';
        const curp = currentPwd ? currentPwd.value.trim() : '';

        if (!curp) {
          Toast.show('Please enter your current password to authorize changes', 'warning');
          currentPwd?.focus();
          return;
        }

        if (np.length < 6) {
          Toast.show('New password must be at least 6 characters long', 'warning');
          newPwd?.focus();
          return;
        }

        if (np !== cp) {
          Toast.show('New password and confirmation password do not match', 'error');
          confirmPwd?.focus();
          return;
        }
      }

      // Apply changes to ERP_DATA.currentUser
      ERP_DATA.currentUser.phone = phone;
      ERP_DATA.currentUser.altPhone = altPhone;
      if (this.tempAvatarUrl) {
        ERP_DATA.currentUser.avatar = this.tempAvatarUrl;
      }

      // Persist to localStorage
      try {
        localStorage.setItem('dfl_current_user', JSON.stringify(ERP_DATA.currentUser));
      } catch (err) {
        console.warn('Failed to persist user profile', err);
      }

      // Update header avatar & details in real time
      Header.render('header-container');

      // Clear password fields
      if (currentPwd) currentPwd.value = '';
      if (newPwd) newPwd.value = '';
      if (confirmPwd) confirmPwd.value = '';

      Toast.show('My Profile updated successfully', 'success', 'Profile Saved');
    };

    const saveBtn = document.getElementById('btn-save-user-profile');
    const saveBtnBottom = document.getElementById('btn-save-user-profile-bottom');
    const cancelBtn = document.getElementById('btn-cancel-profile');

    if (saveBtn) saveBtn.onclick = saveProfile;
    if (saveBtnBottom) saveBtnBottom.onclick = saveProfile;

    if (cancelBtn) {
      cancelBtn.onclick = () => {
        window.history.back();
      };
    }
  }
};

