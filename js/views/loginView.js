// Enterprise Login & Persona Switcher View

import { setCurrentUserRole, ERP_DATA } from '../data/mockData.js';
import { Toast } from '../components/toast.js';
import { LOGO_CAMAROO } from '../data/logos.js';

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
        
        <!-- Left Section: Animated Maritime Global Logistics (70% width, Full height) -->
        <div class="w-full lg:w-[70%] h-72 sm:h-96 lg:h-full min-h-[300px] lg:min-h-screen bg-[#cee9fc] flex items-center justify-center p-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#DFE1E6] select-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 571" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Animated maritime global logistics illustration" class="w-full h-full">
  <defs>
    <!-- Sky Gradient -->
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cee9fc"></stop>
      <stop offset="55%" stop-color="#e3f2fd"></stop>
      <stop offset="100%" stop-color="#f2f9ff"></stop>
    </linearGradient>

    <!-- Sea Gradient -->
    <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#79c4e0"></stop>
      <stop offset="100%" stop-color="#6dbbd9"></stop>
    </linearGradient>

    <!-- Globe Gradient -->
    <radialGradient id="globeGrad" cx="42%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#d4ebfb" stop-opacity="0.92"></stop>
      <stop offset="55%" stop-color="#a8d1ee" stop-opacity="0.88"></stop>
      <stop offset="100%" stop-color="#8ab8de" stop-opacity="0.85"></stop>
    </radialGradient>

    <!-- Globe Clip -->
    <clipPath id="globeClip">
      <circle cx="345" cy="260" r="102"></circle>
    </clipPath>

    <!-- Sea Clip -->
    <clipPath id="seaClip">
      <rect x="0" y="388" width="1024" height="183"></rect>
    </clipPath>

    <!-- Reusable Buoy -->
    <g id="buoy-shape">
      <!-- Base water ripple -->
      <ellipse cx="0" cy="4" rx="22" ry="3.2" fill="#e6f7fc" opacity="0.55" class="ripple-pulse"></ellipse>
      <!-- Orange float ring -->
      <path d="M -15,2 C -15,-3 -9,-5 0,-5 C 9,-5 15,-3 15,2 C 15,4.5 10,5.5 0,5.5 C -10,5.5 -15,4.5 -15,2 Z" fill="#e56947"></path>
      <path d="M -13,1.5 C -13,-1.5 -8,-3 0,-3 C 8,-3 13,-1.5 13,1.5 Z" fill="#f08358"></path>
      <!-- Cone body -->
      <polygon points="-11,0 11,0 1.5,-22 -1.5,-22" fill="#e8a740"></polygon>
      <polygon points="-11,0 0,0 0,-22 -1.5,-22" fill="#d99432"></polygon>
      <!-- Inner triangular cutout / strut -->
      <polygon points="-4,-3 4,-3 0,-13" fill="#76c0dd" opacity="0.85"></polygon>
      <!-- Top mast & beacon -->
      <rect x="-1.2" y="-29" width="2.4" height="8" fill="#c77d28"></rect>
      <circle cx="0" cy="-30.5" r="3.4" fill="#f2b84b"></circle>
      <circle cx="0" cy="-30.5" r="5.5" fill="#ffd978" opacity="0.4" class="beacon-glow"></circle>
    </g>

    <!-- Reusable Bird -->
    <g id="bird-shape">
      <path d="M -10,2 Q -5,-4 0,1 Q 5,-4 10,2 Q 5,-1 0,3 Q -5,-1 -10,2 Z" fill="#4f5f72"></path>
    </g>

    <!-- Container Rib Pattern -->
    <pattern id="ribs" width="5" height="20" patternUnits="userSpaceOnUse">
      <line x1="2.5" y1="0" x2="2.5" y2="20" stroke="#000000" stroke-opacity="0.1" stroke-width="1"></line>
    </pattern>

    <!-- Lattice Crane Boom Pattern -->
    <g id="gantry-crane">
      <!-- Legs -->
      <line x1="0" y1="0" x2="0" y2="-112" stroke="#c5d2e1" stroke-width="3.2"></line>
      <line x1="26" y1="0" x2="26" y2="-112" stroke="#c5d2e1" stroke-width="3.2"></line>
      <!-- Cross braces -->
      <line x1="0" y1="-15" x2="26" y2="-35" stroke="#c5d2e1" stroke-width="1.6"></line>
      <line x1="26" y1="-15" x2="0" y2="-35" stroke="#c5d2e1" stroke-width="1.6"></line>
      <line x1="0" y1="-35" x2="26" y2="-55" stroke="#c5d2e1" stroke-width="1.6"></line>
      <line x1="26" y1="-35" x2="0" y2="-55" stroke="#c5d2e1" stroke-width="1.6"></line>
      <line x1="0" y1="-55" x2="26" y2="-75" stroke="#c5d2e1" stroke-width="1.6"></line>
      <line x1="26" y1="-55" x2="0" y2="-75" stroke="#c5d2e1" stroke-width="1.6"></line>
      <line x1="0" y1="-75" x2="26" y2="-95" stroke="#c5d2e1" stroke-width="1.6"></line>
      <line x1="26" y1="-75" x2="0" y2="-95" stroke="#c5d2e1" stroke-width="1.6"></line>
      <line x1="0" y1="-15" x2="26" y2="-15" stroke="#c5d2e1" stroke-width="2"></line>
      <line x1="0" y1="-55" x2="26" y2="-55" stroke="#c5d2e1" stroke-width="2"></line>
      <!-- Horizontal boom -->
      <rect x="-58" y="-98" width="118" height="4" fill="#c5d2e1"></rect>
      <!-- Cabin -->
      <rect x="-4" y="-108" width="38" height="10" fill="#c5d2e1"></rect>
      <!-- Top A-frame & cables -->
      <polygon points="0,-108 13,-132 26,-108" fill="none" stroke="#c5d2e1" stroke-width="2.2"></polygon>
      <line x1="13" y1="-132" x2="-56" y2="-97" stroke="#c5d2e1" stroke-width="1.8"></line>
      <line x1="13" y1="-132" x2="56" y2="-97" stroke="#c5d2e1" stroke-width="1.8"></line>
    </g>

    <style>
      /* Cloud parallax drifts */
      .cloud-slow {
        animation: cloudDriftSlow 18s ease-in-out infinite;
      }
      .cloud-med {
        animation: cloudDriftMed 14s ease-in-out infinite;
      }
      .cloud-fast {
        animation: cloudDriftFast 11s ease-in-out infinite;
      }
      .cloud-globe {
        animation: cloudDriftGlobe 10s ease-in-out infinite;
      }

      @keyframes cloudDriftSlow {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(26px); }
      }
      @keyframes cloudDriftMed {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(-22px); }
      }
      @keyframes cloudDriftFast {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(18px); }
      }
      @keyframes cloudDriftGlobe {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(12px); }
      }

      /* Globe rotating continents &amp; flowing orbit */
      .globe-continents {
        animation: globeSpin 22s linear infinite;
      }
      @keyframes globeSpin {
        0% { transform: translateX(0px); }
        100% { transform: translateX(180px); }
      }

      /* Map pin gentle float &amp; radar pulse */
      .pin-red-anim {
        animation: pinFloat 3.6s ease-in-out infinite;
        transform-origin: 391px 232px;
      }
      .pin-yellow-anim {
        animation: pinFloat 4.2s ease-in-out -1.5s infinite;
        transform-origin: 249px 282px;
      }
      @keyframes pinFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5.5px); }
      }

      .pin-pulse {
        animation: pulseRing 3s ease-out infinite;
        transform-box: fill-box;
        transform-origin: center;
      }
      .pin-pulse-delay {
        animation: pulseRing 3s ease-out -1.5s infinite;
        transform-box: fill-box;
        transform-origin: center;
      }
      @keyframes pulseRing {
        0% { transform: scale(0.5); opacity: 0.75; }
        100% { transform: scale(2.2); opacity: 0; }
      }

      /* Main Cargo Ship weighty bob &amp; subtle pitch */
      .main-ship {
        animation: mainShipBob 6s ease-in-out infinite;
        transform-origin: 395px 395px;
      }
      @keyframes mainShipBob {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        35% { transform: translateY(-3.5px) rotate(-0.42deg); }
        70% { transform: translateY(2.2px) rotate(0.35deg); }
      }

      .main-ship-shadow {
        animation: shadowBreath 6s ease-in-out infinite;
        transform-origin: 395px 410px;
      }
      @keyframes shadowBreath {
        0%, 100% { transform: scaleX(1); opacity: 0.55; }
        35% { transform: scaleX(0.985); opacity: 0.45; }
        70% { transform: scaleX(1.015); opacity: 0.62; }
      }

      /* Distant Small Cargo Ship */
      .distant-ship {
        animation: distantBob 5.2s ease-in-out -1s infinite;
        transform-origin: 78px 390px;
      }
      @keyframes distantBob {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        50% { transform: translate(6px, -1.8px) rotate(-0.5deg); }
      }

      /* Foreground Crane Barge */
      .crane-barge {
        animation: bargeBob 5.4s ease-in-out -0.8s infinite;
        transform-origin: 286px 525px;
      }
      @keyframes bargeBob {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        45% { transform: translate(3px, -4px) rotate(0.65deg); }
        75% { transform: translate(-2px, 2px) rotate(-0.45deg); }
      }

      .barge-crane-arm {
        animation: craneSway 7s ease-in-out infinite;
        transform-origin: 332px 518px;
      }
      @keyframes craneSway {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(2.2deg); }
      }

      /* Tugboat */
      .tugboat {
        animation: tugBob 4.4s ease-in-out -1.8s infinite;
        transform-origin: 470px 472px;
      }
      @keyframes tugBob {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        50% { transform: translate(-5px, -3.2px) rotate(-1.1deg); }
      }

      /* Flag flutter */
      .flag-flutter {
        animation: flagWave 1.4s ease-in-out infinite;
        transform-box: fill-box;
        transform-origin: left center;
      }
      @keyframes flagWave {
        0%, 100% { transform: scaleX(1) skewY(0deg); }
        50% { transform: scaleX(0.82) skewY(-8deg); }
      }

      /* Buoys bobbing out of phase */
      .buoy-1 { animation: buoyBob 3.8s ease-in-out 0s infinite; transform-origin: 0px 0px; }
      .buoy-2 { animation: buoyBob 4.2s ease-in-out -1.1s infinite; transform-origin: 0px 0px; }
      .buoy-3 { animation: buoyBob 3.6s ease-in-out -2.2s infinite; transform-origin: 0px 0px; }
      .buoy-4 { animation: buoyBob 4.5s ease-in-out -0.6s infinite; transform-origin: 0px 0px; }

      @keyframes buoyBob {
        0%, 100% { transform: translateY(0px) rotate(-2.5deg); }
        50% { transform: translateY(-4.5px) rotate(3deg); }
      }

      .beacon-glow {
        animation: beaconBlink 2.4s ease-in-out infinite;
      }
      @keyframes beaconBlink {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.9; }
      }

      .ripple-pulse {
        animation: rippleAnim 3.2s ease-in-out infinite;
        transform-box: fill-box;
        transform-origin: center;
      }
      @keyframes rippleAnim {
        0%, 100% { transform: scaleX(0.92); opacity: 0.45; }
        50% { transform: scaleX(1.12); opacity: 0.75; }
      }

      /* Sea waves undulation */
      .wave-layer-1 {
        animation: waveSlide1 9s ease-in-out infinite;
      }
      .wave-layer-2 {
        animation: waveSlide2 11s ease-in-out infinite;
      }
      @keyframes waveSlide1 {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(16px); }
      }
      @keyframes waveSlide2 {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(-18px); }
      }

      /* Water shimmer lines */
      .shimmer {
        animation: shimmerDrift 5s ease-in-out infinite;
      }
      .shimmer-delay {
        animation: shimmerDrift 5s ease-in-out -2.5s infinite;
      }
      @keyframes shimmerDrift {
        0%, 100% { transform: translateX(0px); opacity: 0.75; }
        50% { transform: translateX(10px); opacity: 0.35; }
      }

      /* Sparkle glint on lower right sea */
      .sparkle {
        animation: sparkleTwinkle 4s ease-in-out infinite;
        transform-origin: 935px 482px;
      }
      @keyframes sparkleTwinkle {
        0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.5; }
        50% { transform: scale(1.18) rotate(8deg); opacity: 0.95; }
      }

      /* Birds gliding &amp; wing flapping */
      .flock-left {
        animation: flockGlideLeft 12s ease-in-out infinite;
      }
      .flock-right {
        animation: flockGlideRight 14s ease-in-out infinite;
      }
      @keyframes flockGlideLeft {
        0%, 100% { transform: translate(0px, 0px); }
        50% { transform: translate(18px, -7px); }
      }
      @keyframes flockGlideRight {
        0%, 100% { transform: translate(0px, 0px); }
        50% { transform: translate(-15px, -6px); }
      }

      .wing-a {
        animation: flap 1.6s ease-in-out infinite;
        transform-box: fill-box;
        transform-origin: center;
      }
      .wing-b {
        animation: flap 1.9s ease-in-out -0.7s infinite;
        transform-box: fill-box;
        transform-origin: center;
      }
      @keyframes flap {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(0.35); }
      }
    </style>
  </defs>

  <!-- 1. SKY BACKGROUND -->
  <rect x="0" y="0" width="1024" height="390" fill="url(#skyGrad)"></rect>

  <!-- 2. DISTANT PALE BACKGROUND CLOUDS -->
  <g class="cloud-slow" opacity="0.92">
    <!-- Far top-left edge -->
    <path d="M -10,42 L 68,42 C 68,31 59,23 48,23 C 45,23 42,24 40,26 C 35,19 26,15 17,17 C 8,19 2,26 0,34 L -10,34 Z" fill="#d3dce9"></path>
    <!-- Large upper-center-right pale cloud -->
    <path d="M 526,123 L 700,123 C 700,111 690,103 678,103 C 674,103 670,104 667,106 C 663,97 654,91 643,91 C 638,91 634,92 630,95 C 623,86 611,82 599,86 C 591,89 585,95 582,102 C 578,100 573,99 568,100 C 560,102 554,108 552,115 C 547,114 541,115 537,118 C 532,120 528,121 526,123 Z" fill="#d3dce9"></path>
    <!-- Small pale cloud center -->
    <path d="M 428,162 L 474,162 C 474,155 468,151 462,151 C 460,151 458,152 456,153 C 453,148 446,147 441,150 C 438,152 436,154 435,157 C 431,157 428,159 428,162 Z" fill="#d3dce9"></path>
    <!-- Small pale cloud mid-left -->
    <path d="M 73,228 L 135,228 C 135,221 129,216 122,216 C 119,216 116,217 114,218 C 111,212 103,209 96,212 C 92,213 89,216 88,220 C 85,219 81,220 78,222 C 75,223 73,226 73,228 Z" fill="#d6dfec"></path>
    <!-- Pale clouds right -->
    <path d="M 571,248 L 635,248 C 635,240 628,235 620,235 C 617,235 614,236 612,238 C 608,231 599,228 591,231 C 587,233 584,237 583,241 C 578,240 572,243 571,248 Z" fill="#d3dce9"></path>
    <path d="M 764,238 L 856,238 C 856,227 847,219 836,219 C 832,219 828,220 825,223 C 820,211 807,205 795,209 C 788,211 783,216 780,222 C 773,221 765,228 764,238 Z" fill="#d3dce9"></path>
    <path d="M 838,259 L 930,259 C 930,251 922,246 914,246 C 910,246 907,247 904,249 C 899,240 888,236 878,240 C 873,242 869,246 867,250 C 861,249 855,252 852,256 C 846,256 841,257 838,259 Z" fill="#d6dfec"></path>
  </g>

  <!-- 3. FOREGROUND TEAL CLOUDS -->
  <g class="cloud-med">
    <!-- Top-left large teal cloud -->
    <path d="M 35,89 L 214,89 C 214,76 203,66 190,66 C 186,66 182,67 178,69 C 174,60 165,55 154,56 C 149,56 144,58 140,61 C 133,47 116,40 100,45 C 89,48 81,56 77,66 C 72,62 64,61 57,64 C 49,67 43,75 43,83 C 38,83 35,86 35,89 Z" fill="#4897be"></path>
    <!-- Top-center medium teal cloud -->
    <path d="M 440,59 L 542,59 C 542,50 535,43 526,43 C 524,43 522,44 520,45 C 516,35 505,30 495,34 C 490,36 486,39 484,44 C 479,41 472,41 467,45 C 463,47 461,51 460,54 C 456,51 450,51 445,54 C 442,55 440,57 440,59 Z" fill="#4897be"></path>
    <!-- Top-right large teal cloud -->
    <path d="M 795,89 L 975,89 C 975,75 964,65 950,65 C 946,65 942,66 939,68 C 934,58 923,53 912,56 C 908,57 905,59 902,61 C 895,46 878,39 862,44 C 851,48 843,56 839,66 C 833,62 825,61 818,64 C 810,68 805,75 804,83 C 799,83 795,85 795,89 Z" fill="#4897be"></path>
  </g>

  <g class="cloud-fast">
    <!-- Small teal cloud mid-left -->
    <path d="M 173,177 L 223,177 C 223,171 218,167 212,167 C 210,167 208,168 206,169 C 203,163 195,161 189,165 C 186,166 184,169 183,172 C 178,171 174,173 173,177 Z" fill="#4e9bc0"></path>
    <!-- Medium teal cloud center-right -->
    <path d="M 505,212 L 587,212 C 587,204 581,198 573,198 C 570,198 567,199 565,200 C 562,191 551,187 542,191 C 538,193 535,196 533,200 C 529,197 523,197 518,200 C 514,202 512,205 511,208 C 508,208 505,209 505,212 Z" fill="#4897be"></path>
    <!-- Small teal cloud far-right -->
    <path d="M 902,217 L 986,217 C 986,210 980,205 973,205 C 970,205 968,206 966,207 C 962,198 951,194 942,198 C 937,200 934,204 932,208 C 927,205 920,206 916,210 C 911,210 905,212 902,217 Z" fill="#4e9bc0"></path>
  </g>

  <!-- 4. BIRDS FLOCKS -->
  <!-- Left Flock -->
  <g class="flock-left">
    <g transform="translate(101,164) scale(1.8)"><use href="#bird-shape" class="wing-a"></use></g>
    <g transform="translate(141,170) scale(1.1)"><use href="#bird-shape" class="wing-b"></use></g>
    <g transform="translate(56,163) scale(0.95)"><use href="#bird-shape" class="wing-b"></use></g>
    <g transform="translate(46,169) scale(0.85)"><use href="#bird-shape" class="wing-a"></use></g>
    <g transform="translate(21,176) scale(0.75)"><use href="#bird-shape" class="wing-b"></use></g>
    <g transform="translate(36,182) scale(0.7)"><use href="#bird-shape" class="wing-a"></use></g>
    <g transform="translate(61,180) scale(0.65)"><use href="#bird-shape" class="wing-b"></use></g>
    <g transform="translate(53,191) scale(1.05)"><use href="#bird-shape" class="wing-a"></use></g>
    <g transform="translate(38,204) scale(0.75)"><use href="#bird-shape" class="wing-b"></use></g>
    <g transform="translate(174,194) scale(0.55)"><use href="#bird-shape" class="wing-a"></use></g>
    <g transform="translate(22,257) scale(0.65)"><use href="#bird-shape" class="wing-b"></use></g>
  </g>

  <!-- Right Flock -->
  <g class="flock-right" opacity="0.75">
    <g transform="translate(858,177) scale(0.75)"><use href="#bird-shape" class="wing-b"></use></g>
    <g transform="translate(879,163) scale(0.55)"><use href="#bird-shape" class="wing-a"></use></g>
    <g transform="translate(845,189) scale(0.55)"><use href="#bird-shape" class="wing-a"></use></g>
    <g transform="translate(818,181) scale(0.5)"><use href="#bird-shape" class="wing-b"></use></g>
    <g transform="translate(863,195) scale(0.45)"><use href="#bird-shape" class="wing-b"></use></g>
    <g transform="translate(888,185) scale(0.48)"><use href="#bird-shape" class="wing-a"></use></g>
  </g>

  <!-- 5. DISTANT HARBOR PIER & GANTRY CRANES -->
  <g id="harbor-background">
    <!-- Pale horizon pier -->
    <rect x="520" y="374" width="504" height="15" fill="#d1dce8"></rect>
    <!-- 2 Closer Gantry Cranes -->
    <g transform="translate(528,376)"><use href="#gantry-crane"></use></g>
    <g transform="translate(643,376)"><use href="#gantry-crane"></use></g>
    <!-- 2 Farther Smaller Gantry Cranes -->
    <g transform="translate(935,376) scale(0.72)"><use href="#gantry-crane"></use></g>
    <g transform="translate(998,376) scale(0.72)"><use href="#gantry-crane"></use></g>
  </g>

  <!-- 6. GLOBAL NETWORK GLOBE, ORBIT & LOCATION PINS -->
  <g id="globe-group" transform="translate(50, 0)">
    <!-- Base Translucent Globe Sphere -->
    <circle cx="345" cy="260" r="102" fill="url(#globeGrad)"></circle>

    <!-- Clipped Rotating Continents & Graticule -->
    <g clip-path="url(#globeClip)">
      <!-- Continents (duplicated at x-180 for seamless infinite scroll) -->
      <g class="globe-continents" fill="#82b0d6" opacity="0.58">
        <!-- Set 1 -->
        <path d="M 255,190 C 272,184 295,185 306,198 C 314,208 308,224 296,232 C 288,238 292,248 302,256 C 315,266 322,285 314,302 C 304,322 288,334 276,326 C 266,318 272,296 266,282 C 258,266 244,254 246,232 C 248,214 244,196 255,190 Z"></path>
        <path d="M 342,174 C 368,166 404,174 422,194 C 434,208 426,226 414,234 C 424,244 432,262 424,282 C 414,306 394,326 378,318 C 366,312 368,288 358,274 C 346,258 338,244 344,226 C 350,210 330,186 342,174 Z"></path>
        <!-- Set 2 (shifted -180px for seamless wrap) -->
        <path d="M 75,190 C 92,184 115,185 126,198 C 134,208 128,224 116,232 C 108,238 112,248 122,256 C 135,266 142,285 134,302 C 124,322 108,334 96,326 C 86,318 92,296 86,282 C 78,266 64,254 66,232 C 68,214 64,196 75,190 Z"></path>
        <path d="M 162,174 C 188,166 224,174 242,194 C 254,208 246,226 234,234 C 244,244 252,262 244,282 C 234,306 214,326 198,318 C 186,312 188,288 178,274 C 166,258 158,244 164,226 C 170,210 150,186 162,174 Z"></path>
      </g>

      <!-- Latitude & Longitude Lines -->
      <g fill="none" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.48">
        <line x1="240" y1="218" x2="450" y2="218"></line>
        <line x1="240" y1="260" x2="450" y2="260"></line>
        <line x1="240" y1="302" x2="450" y2="302"></line>
        <ellipse cx="345" cy="260" rx="48" ry="102"></ellipse>
        <ellipse cx="345" cy="260" rx="82" ry="102"></ellipse>
        <line x1="345" y1="158" x2="345" y2="362"></line>
      </g>
    </g>

    <!-- White Wispy Clouds in front of Globe -->
    <g class="cloud-globe" fill="#eef7fe" opacity="0.92">
      <path d="M 244,222 L 303,222 C 303,216 298,212 292,212 C 289,212 287,213 285,214 C 282,208 274,205 268,208 C 264,210 262,213 261,216 C 256,214 249,216 244,222 Z"></path>
      <path d="M 322,265 L 382,265 C 382,259 376,255 370,255 C 367,255 365,256 363,257 C 359,250 350,248 343,252 C 339,254 337,257 336,260 C 331,259 325,261 322,265 Z"></path>
    </g>

    <!-- Red Map Pin (upper right of globe) -->
    <g class="pin-red-anim">
      <circle cx="391" cy="234" r="5" fill="none" stroke="#e05a4d" stroke-width="1.8" class="pin-pulse"></circle>
      <path d="M 391,203 C 384,203 379,208.5 379,215.5 C 379,224 391,234 391,234 C 391,234 403,224 403,215.5 C 403,208.5 398,203 391,203 Z" fill="#e05a4d"></path>
      <circle cx="391" cy="215" r="4.6" fill="#f7f9fc"></circle>
    </g>

    <!-- Yellow Map Pin (left near bridge) -->
    <g class="pin-yellow-anim">
      <circle cx="249" cy="283" r="5" fill="none" stroke="#e8af41" stroke-width="1.8" class="pin-pulse-delay"></circle>
      <path d="M 249,253 C 242,253 237,258.5 237,265.5 C 237,274 249,283 249,283 C 249,283 261,274 261,265.5 C 261,258.5 256,253 249,253 Z" fill="#e8af41"></path>
      <circle cx="249" cy="265" r="4.6" fill="#f7f9fc"></circle>
    </g>
  </g>

  <!-- 7. SEA BASE & ANIMATED CURRENTS -->
  <rect x="0" y="388" width="1024" height="183" fill="url(#seaGrad)"></rect>

  <g clip-path="url(#seaClip)">
    <!-- Soft darker wave currents (Layer 1) -->
    <g class="wave-layer-1" fill="#63b5d4" opacity="0.72">
      <!-- Left sweeping wave -->
      <path d="M -40,408 C 20,406 85,420 125,442 C 165,464 140,492 95,505 C 55,516 10,518 -40,510 Z"></path>
      <!-- Right sweeping swirl -->
      <path d="M 730,412 C 795,405 845,416 838,434 C 831,452 758,458 766,474 C 774,490 885,488 942,472 C 990,458 1030,468 1060,482 L 1060,575 L 745,575 C 765,552 805,536 775,522 C 745,508 615,528 548,524 C 488,520 495,498 542,482 C 585,468 670,476 708,460 C 742,446 675,418 730,412 Z"></path>
    </g>

    <!-- Deeper accent currents (Layer 2) -->
    <g class="wave-layer-2" fill="#58a9c8" opacity="0.45">
      <path d="M 795,420 C 860,414 960,422 1060,438 L 1060,474 C 985,466 910,480 845,470 C 795,462 760,424 795,420 Z"></path>
      <path d="M -30,525 C 70,515 190,536 310,552 C 365,560 410,562 455,575 L -30,575 Z"></path>
    </g>

    <!-- Subtle Diamond Water Sparkle (lower right) -->
    <path class="sparkle" d="M 935,463 C 937,475 942,480 954,482 C 942,484 937,489 935,501 C 933,489 928,484 916,482 C 928,480 933,475 935,463 Z" fill="#a8dff2"></path>
  </g>

  <!-- 8. DISTANT SMALL CARGO SHIP (Far Left) -->
  <g transform="translate(50, 0)">
    <g class="distant-ship">
      <!-- Reflection -->
      <path d="M 42,396 L 116,396 L 111,401 L 47,401 Z" fill="#5daac8" opacity="0.6"></path>
      <!-- Containers -->
      <rect x="49" y="381" width="11" height="6" fill="#d9a546"></rect>
      <rect x="61" y="381" width="12" height="6" fill="#c75449"></rect>
      <rect x="74" y="381" width="11" height="6" fill="#4f5482"></rect>
      <rect x="86" y="381" width="10" height="6" fill="#3a809c"></rect>
      <rect x="63" y="376" width="10" height="5" fill="#d9a546"></rect>
      <rect x="74" y="376" width="11" height="5" fill="#c75449"></rect>
      <!-- Tiny White Bridge -->
      <rect x="96" y="372" width="14" height="15" fill="#e1e6ee"></rect>
      <rect x="99" y="375" width="8" height="2.2" fill="#3b3e52"></rect>
      <rect x="103" y="367" width="4" height="5" fill="#c44b42"></rect>
      <!-- Dark Hull & Red Waterline -->
      <polygon points="38,386 119,386 114,394 42,394" fill="#312e43"></polygon>
      <polygon points="42,393 114,393 112,396 44,396" fill="#c44b42"></polygon>
    </g>
  </g>

  <!-- 9. MAIN CONTAINER SHIP -->
  <g id="main-ship-wrapper" transform="translate(50, 0)">
    <!-- Water Shadow Reflection -->
    <polygon class="main-ship-shadow" points="196,412 572,412 606,433 216,433" fill="#5ba8c7"></polygon>

    <g class="main-ship">
      <!-- SUPERSTRUCTURE / BRIDGE (Stern - Left) -->
      <!-- Antennas / Masts -->
      <line x1="281" y1="224" x2="281" y2="246" stroke="#3c4254" stroke-width="1.4"></line>
      <line x1="286" y1="227" x2="286" y2="246" stroke="#3c4254" stroke-width="1.2"></line>
      <!-- Funnel / Top Tower -->
      <rect x="274" y="242" width="21" height="32" fill="#d3d8e2"></rect>
      <rect x="274" y="242" width="6" height="32" fill="#bfc6d4"></rect>
      <!-- Upper Bridge Deck -->
      <rect x="242" y="274" width="64" height="12" fill="#c9d0dc"></rect>
      <rect x="260" y="269" width="24" height="6" fill="#b4bcc9"></rect>
      <!-- Main Bridge Block -->
      <rect x="226" y="286" width="97" height="15" fill="#d9dfe8"></rect>
      <rect x="226" y="286" width="97" height="4" fill="#8f98a8"></rect>
      <!-- Bridge Windows Row 1 -->
      <g fill="#36394c">
        <rect x="246" y="293" width="5" height="3.2"></rect>
        <rect x="255" y="293" width="5" height="3.2"></rect>
        <rect x="264" y="293" width="5" height="3.2"></rect>
        <rect x="273" y="293" width="5" height="3.2"></rect>
        <rect x="282" y="293" width="5" height="3.2"></rect>
        <rect x="291" y="293" width="5" height="3.2"></rect>
        <rect x="300" y="293" width="5" height="3.2"></rect>
        <rect x="309" y="293" width="5" height="3.2"></rect>
      </g>
      <!-- Lower Accommodation Block -->
      <rect x="234" y="301" width="84" height="58" fill="#d4dbe5"></rect>
      <!-- Left Balcony Side Shadow -->
      <rect x="234" y="301" width="16" height="58" fill="#9ea7b8"></rect>
      <!-- Left Balcony Levels -->
      <rect x="230" y="311" width="12" height="3.5" fill="#6f788a"></rect>
      <rect x="230" y="325" width="12" height="3.5" fill="#6f788a"></rect>
      <rect x="230" y="339" width="12" height="3.5" fill="#6f788a"></rect>
      <rect x="230" y="352" width="12" height="3.5" fill="#6f788a"></rect>
      <!-- Accommodation Windows -->
      <g fill="#3b3f52">
        <rect x="256" y="310" width="5" height="3.5"></rect>
        <rect x="266" y="310" width="5" height="3.5"></rect>
        <rect x="276" y="310" width="5" height="3.5"></rect>
        <rect x="286" y="310" width="5" height="3.5"></rect>
        <rect x="256" y="324" width="5" height="3.5"></rect>
        <rect x="266" y="324" width="5" height="3.5"></rect>
        <rect x="276" y="324" width="5" height="3.5"></rect>
        <rect x="286" y="324" width="5" height="3.5"></rect>
        <rect x="256" y="338" width="5" height="3.5"></rect>
        <rect x="266" y="338" width="5" height="3.5"></rect>
        <rect x="276" y="338" width="5" height="3.5"></rect>
        <rect x="286" y="338" width="5" height="3.5"></rect>
      </g>

      <!-- STACKED SHIPPING CONTAINERS -->
      <!-- Tier 4 (Top Left) -->
      <g>
        <rect x="310" y="290" width="21" height="19" fill="#3a809c"></rect>
        <rect x="331" y="290" width="16" height="19" fill="#4f5482"></rect>
      </g>

      <!-- Tier 3 -->
      <g>
        <rect x="296" y="309" width="21" height="19" fill="#9eaab8"></rect>
        <rect x="317" y="309" width="15" height="19" fill="#d4a548"></rect>
        <rect x="332" y="309" width="15" height="19" fill="#c75449"></rect>
        <rect x="347" y="309" width="17" height="19" fill="#4f5482"></rect>
        <rect x="364" y="309" width="18" height="19" fill="#b4beca"></rect>
        <!-- Mid-right stack -->
        <rect x="406" y="310" width="44" height="18" fill="#3a809c"></rect>
        <rect x="450" y="310" width="18" height="18" fill="#4f5482"></rect>
      </g>

      <!-- Tier 2 -->
      <g>
        <rect x="285" y="328" width="27" height="19" fill="#d4a548"></rect>
        <rect x="312" y="328" width="38" height="19" fill="#3a809c"></rect>
        <rect x="350" y="328" width="15" height="19" fill="#4f5482"></rect>
        <rect x="365" y="328" width="15" height="19" fill="#d4a548"></rect>
        <rect x="380" y="328" width="15" height="19" fill="#c75449"></rect>
        <!-- Mid-right stack -->
        <rect x="410" y="328" width="44" height="19" fill="#9da9b7"></rect>
        <rect x="454" y="328" width="23" height="19" fill="#b3bdc9"></rect>
        <!-- Bow stack -->
        <rect x="491" y="325" width="44" height="22" fill="#3a809c"></rect>
        <rect x="535" y="325" width="18" height="22" fill="#4f5482"></rect>
      </g>

      <!-- Tier 1 (Deck Level) -->
      <g>
        <rect x="206" y="347" width="48" height="18" fill="#d4a548"></rect>
        <rect x="254" y="347" width="20" height="18" fill="#c75449"></rect>
        <rect x="274" y="347" width="22" height="18" fill="#4f5482"></rect>
        <rect x="296" y="347" width="36" height="18" fill="#a2aebc"></rect>
        <rect x="332" y="347" width="16" height="18" fill="#c75449"></rect>
        <rect x="348" y="347" width="18" height="18" fill="#d4a548"></rect>
        <rect x="366" y="347" width="17" height="18" fill="#4f5482"></rect>
        <rect x="383" y="347" width="17" height="18" fill="#9da9b7"></rect>
        <rect x="400" y="347" width="40" height="18" fill="#3a809c"></rect>
        <rect x="440" y="347" width="14" height="18" fill="#4f5482"></rect>
        <rect x="454" y="347" width="24" height="18" fill="#d4a548"></rect>
      </g>

      <!-- Subtle Corrugation Ribs Overlay strictly on Containers -->
      <g fill="url(#ribs)" pointer-events="none">
        <rect x="310" y="290" width="37" height="19"></rect>
        <rect x="296" y="309" width="86" height="19"></rect>
        <rect x="406" y="310" width="62" height="18"></rect>
        <rect x="285" y="328" width="110" height="19"></rect>
        <rect x="410" y="328" width="67" height="19"></rect>
        <rect x="491" y="325" width="62" height="22"></rect>
        <rect x="206" y="347" width="272" height="18"></rect>
      </g>

      <!-- Bow Mast / Crane Antenna -->
      <g stroke="#312e43" stroke-width="1.6" fill="none">
        <line x1="564" y1="304" x2="564" y2="344"></line>
        <line x1="559" y1="307" x2="569" y2="307"></line>
        <line x1="564" y1="316" x2="548" y2="344"></line>
        <line x1="564" y1="316" x2="580" y2="344"></line>
      </g>

      <!-- MAIN HULL -->
      <!-- Upper Dark Charcoal Hull -->
      <polygon points="189,363 475,363 488,342 612,342 574,396 194,396" fill="#312e43"></polygon>
      <!-- Lower Red-Orange Hull with Wavy Waterline -->
      <path d="M 194,396 L 574,396 L 566,410 C 556,414 544,414 532,410 C 520,406 508,414 494,414 C 480,414 468,408 456,411 C 444,414 432,414 420,410 C 408,406 396,414 382,414 C 368,414 356,408 344,411 C 332,414 320,414 308,410 C 296,406 284,414 270,414 C 256,414 244,408 232,411 C 220,414 206,414 198,411 Z" fill="#c44b42"></path>
    </g>
  </g>

  <!-- 10. TUGBOAT / PILOT BOAT (Center-Bottom) -->
  <g transform="translate(50, 0)">
    <g class="tugboat">
      <!-- Reflection -->
      <ellipse cx="470" cy="482" rx="40" ry="4" fill="#5daac8" opacity="0.55"></ellipse>
      <!-- Mast & Fluttering Flag -->
      <line x1="454" y1="439" x2="454" y2="452" stroke="#312e43" stroke-width="2"></line>
      <path d="M 455,440 Q 463,438 470,442 Q 463,445 455,444 Z" fill="#e5b343" class="flag-flutter"></path>
      <!-- Funnel & Cabin -->
      <rect x="447" y="442" width="5" height="10" fill="#4f5482"></rect>
      <rect x="436" y="451" width="21" height="20" fill="#e6ebf2"></rect>
      <rect x="438" y="454" width="14" height="5" fill="#312e43"></rect>
      <rect x="436" y="464" width="21" height="7" fill="#c75449"></rect>
      <!-- Deck Cargo -->
      <rect x="462" y="465" width="14" height="6" fill="#d9a546"></rect>
      <rect x="479" y="467" width="14" height="4" fill="#4f5482"></rect>
      <!-- Yellow Trim & Dark Hull -->
      <polygon points="424,471 515,471 512,474 426,474" fill="#e5b343"></polygon>
      <path d="M 426,474 L 512,474 C 507,479 498,482 484,480 C 470,478 456,482 442,481 C 433,480 429,478 426,474 Z" fill="#312e43"></path>
    </g>
  </g>

  <!-- 11. FOREGROUND CRANE BARGE (Bottom-Left) -->
  <g transform="translate(50, 0)">
    <g class="crane-barge">
      <!-- Water Shadow -->
      <polygon points="205,544 374,544 388,558 220,558" fill="#5aa8c7" opacity="0.6"></polygon>

      <!-- Lattice Crane Boom (angled up-left) -->
      <g class="barge-crane-arm">
        <!-- Main Boom Rails -->
        <line x1="330" y1="520" x2="282" y2="449" stroke="#313954" stroke-width="2.6"></line>
        <line x1="337" y1="517" x2="288" y2="446" stroke="#313954" stroke-width="2.6"></line>
        <!-- Lattice Zigzag Braces -->
        <polyline points="330,520 326,506 318,505 316,492 308,491 306,478 298,477 296,464 288,463 285,448" fill="none" stroke="#313954" stroke-width="1.5"></polyline>
        <polyline points="337,517 322,510 326,502 312,496 316,488 302,482 306,474 292,468 296,460 282,449" fill="none" stroke="#313954" stroke-width="1.4"></polyline>
        <!-- Cable dropping down -->
        <line x1="284" y1="448" x2="284" y2="492" stroke="#4f5482" stroke-width="1.2"></line>
        <!-- Small Flag at Crane Tip -->
        <path d="M 284,448 L 284,441 L 274,444 Z" fill="#e5b343" class="flag-flutter"></path>
      </g>

      <!-- Stacked Containers on Barge -->
      <g>
        <!-- Top Row -->
        <rect x="242" y="489" width="44" height="17" fill="#d9a546"></rect>
        <rect x="286" y="489" width="12" height="17" fill="#c75449"></rect>
        <!-- Bottom Row -->
        <rect x="240" y="506" width="54" height="18" fill="#3a809c"></rect>
        <rect x="294" y="506" width="21" height="18" fill="#c75449"></rect>
        <rect x="242" y="489" width="56" height="17" fill="url(#ribs)"></rect>
        <rect x="240" y="506" width="75" height="18" fill="url(#ribs)"></rect>
      </g>

      <!-- White Cabin (Left) -->
      <rect x="200" y="508" width="35" height="17" fill="#dfe4ec"></rect>
      <rect x="210" y="490" width="25" height="18" fill="#e7ebf2"></rect>
      <rect x="214" y="494" width="18" height="4" fill="#36394c"></rect>
      <rect x="214" y="502" width="18" height="4" fill="#36394c"></rect>

      <!-- Indigo-Purple Barge Hull -->
      <path d="M 194,522 L 374,522 C 374,536 364,545 344,545 C 328,545 316,541 300,543 C 284,545 268,540 252,543 C 236,546 218,544 206,541 C 198,539 194,531 194,522 Z" fill="#52538a"></path>

      <!-- Orange Tire Fenders along Hull -->
      <g fill="none" stroke="#c86752" stroke-width="3.6">
        <circle cx="212" cy="526" r="4.8"></circle>
        <circle cx="231" cy="526" r="4.8"></circle>
        <circle cx="251" cy="526" r="4.8"></circle>
        <circle cx="315" cy="526" r="4.8"></circle>
        <circle cx="335" cy="526" r="4.8"></circle>
        <circle cx="355" cy="526" r="4.8"></circle>
        <circle cx="371" cy="524" r="4.2"></circle>
      </g>
    </g>
  </g>

  <!-- 12. FOUR FLOATING NAVIGATION BUOYS -->
  <g transform="translate(36,494) scale(0.85)"><g class="buoy-1"><use href="#buoy-shape"></use></g></g>
  <g transform="translate(216,456) scale(0.95)"><g class="buoy-2"><use href="#buoy-shape"></use></g></g>
  <g transform="translate(416,536) scale(0.82)"><g class="buoy-3"><use href="#buoy-shape"></use></g></g>
  <g transform="translate(552,450) scale(0.75)"><g class="buoy-4"><use href="#buoy-shape"></use></g></g>

  <!-- 13. FOREGROUND WATER FOAM SHIMMER DASHES -->
  <g fill="#e8f7fc" opacity="0.72">
    <rect class="shimmer" x="157" y="538" width="17" height="2.4" rx="1.2"></rect>
    <rect class="shimmer-delay" x="179" y="538" width="9" height="2.4" rx="1.2"></rect>
    <rect class="shimmer" x="74" y="492" width="11" height="2" rx="1"></rect>
    <rect class="shimmer-delay" x="456" y="542" width="11" height="2.2" rx="1.1"></rect>
    <rect class="shimmer" x="441" y="542" width="7" height="2.2" rx="1.1"></rect>
    <rect class="shimmer-delay" x="472" y="500" width="17" height="2.2" rx="1.1"></rect>
    <rect class="shimmer" x="534" y="456" width="11" height="1.8" rx="0.9"></rect>
    <rect class="shimmer-delay" x="564" y="456" width="14" height="1.8" rx="0.9"></rect>
  </g>
</svg>
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

