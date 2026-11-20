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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 760" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Animated maritime and underwater split-view illustration" class="w-full h-full">
  <defs>
    <!-- Sky Gradient -->
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cee9fc"/>
      <stop offset="55%" stop-color="#e3f2fd"/>
      <stop offset="100%" stop-color="#f2f9ff"/>
    </linearGradient>

    <!-- Underwater Deep Ocean Gradient -->
    <linearGradient id="underwaterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4ab8d4"/>
      <stop offset="35%" stop-color="#1e7ca1"/>
      <stop offset="72%" stop-color="#0d4869"/>
      <stop offset="100%" stop-color="#06283e"/>
    </linearGradient>

    <!-- Water Surface Band Gradient -->
    <linearGradient id="surfaceGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d8f6fd" stop-opacity="0.92"/>
      <stop offset="55%" stop-color="#69cbe3" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#2c9ec0" stop-opacity="0.6"/>
    </linearGradient>

    <!-- Globe Gradient -->
    <radialGradient id="globeGrad" cx="42%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#d4ebfb" stop-opacity="0.92"/>
      <stop offset="55%" stop-color="#a8d1ee" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#8ab8de" stop-opacity="0.85"/>
    </radialGradient>

    <!-- Globe Clip -->
    <clipPath id="globeClip">
      <circle cx="345" cy="252" r="100"/>
    </clipPath>

    <!-- Underwater Clip -->
    <clipPath id="underwaterClip">
      <rect x="0" y="392" width="1024" height="368"/>
    </clipPath>

    <!-- Reusable Buoy -->
    <g id="buoy-shape">
      <ellipse cx="0" cy="4" rx="20" ry="3" fill="#e6f7fc" opacity="0.55" class="ripple-pulse"/>
      <path d="M -14,2 C -14,-3 -8,-5 0,-5 C 8,-5 14,-3 14,2 C 14,4.5 9,5.5 0,5.5 C -9,5.5 -14,4.5 -14,2 Z" fill="#e56947"/>
      <path d="M -12,1.5 C -12,-1.5 -7,-3 0,-3 C 7,-3 12,-1.5 12,1.5 Z" fill="#f08358"/>
      <polygon points="-10,0 10,0 1.4,-20 -1.4,-20" fill="#e8a740"/>
      <polygon points="-10,0 0,0 0,-20 -1.4,-20" fill="#d99432"/>
      <polygon points="-3.6,-3 3.6,-3 0,-12" fill="#95dcf0" opacity="0.85"/>
      <rect x="-1.1" y="-27" width="2.2" height="7.5" fill="#c77d28"/>
      <circle cx="0" cy="-28.5" r="3.2" fill="#f2b84b"/>
      <circle cx="0" cy="-28.5" r="5.2" fill="#ffd978" opacity="0.4" class="beacon-glow"/>
    </g>

    <!-- Reusable Bird -->
    <g id="bird-shape">
      <path d="M -10,2 Q -5,-4 0,1 Q 5,-4 10,2 Q 5,-1 0,3 Q -5,-1 -10,2 Z" fill="#4f5f72"/>
    </g>

    <!-- Container Rib Pattern -->
    <pattern id="ribs" width="5" height="20" patternUnits="userSpaceOnUse">
      <line x1="2.5" y1="0" x2="2.5" y2="20" stroke="#000000" stroke-opacity="0.1" stroke-width="1"/>
    </pattern>

    <!-- Lattice Gantry Crane -->
    <g id="gantry-crane">
      <line x1="0" y1="0" x2="0" y2="-112" stroke="#c5d2e1" stroke-width="3.2"/>
      <line x1="26" y1="0" x2="26" y2="-112" stroke="#c5d2e1" stroke-width="3.2"/>
      <line x1="0" y1="-15" x2="26" y2="-35" stroke="#c5d2e1" stroke-width="1.6"/>
      <line x1="26" y1="-15" x2="0" y2="-35" stroke="#c5d2e1" stroke-width="1.6"/>
      <line x1="0" y1="-35" x2="26" y2="-55" stroke="#c5d2e1" stroke-width="1.6"/>
      <line x1="26" y1="-35" x2="0" y2="-55" stroke="#c5d2e1" stroke-width="1.6"/>
      <line x1="0" y1="-55" x2="26" y2="-75" stroke="#c5d2e1" stroke-width="1.6"/>
      <line x1="26" y1="-55" x2="0" y2="-75" stroke="#c5d2e1" stroke-width="1.6"/>
      <line x1="0" y1="-75" x2="26" y2="-95" stroke="#c5d2e1" stroke-width="1.6"/>
      <line x1="26" y1="-75" x2="0" y2="-95" stroke="#c5d2e1" stroke-width="1.6"/>
      <line x1="0" y1="-15" x2="26" y2="-15" stroke="#c5d2e1" stroke-width="2"/>
      <line x1="0" y1="-55" x2="26" y2="-55" stroke="#c5d2e1" stroke-width="2"/>
      <rect x="-58" y="-98" width="118" height="4" fill="#c5d2e1"/>
      <rect x="-4" y="-108" width="38" height="10" fill="#c5d2e1"/>
      <polygon points="0,-108 13,-132 26,-108" fill="none" stroke="#c5d2e1" stroke-width="2.2"/>
      <line x1="13" y1="-132" x2="-56" y2="-97" stroke="#c5d2e1" stroke-width="1.8"/>
      <line x1="13" y1="-132" x2="56" y2="-97" stroke="#c5d2e1" stroke-width="1.8"/>
    </g>

    <!-- Reusable Prawn / Shrimp ("Fron") facing right -->
    <g id="prawn-shape">
      <!-- Long curved antennae -->
      <path d="M 19,-4 C 31,-14 45,-12 56,-6" fill="none" stroke="#f7a06d" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M 18,-1 C 32,-6 44,-2 53,5" fill="none" stroke="#f07e4d" stroke-width="1" stroke-linecap="round" opacity="0.85"/>
      <!-- Swimmeret legs -->
      <g stroke="#e0653a" stroke-width="1.3" stroke-linecap="round" fill="none">
        <path d="M 12,4 L 15,12"/>
        <path d="M 7,5 L 9,13"/>
        <path d="M 2,5 L 3,12.5"/>
        <path d="M -3,4 L -4,11"/>
        <path d="M -8,3 L -10,9.5"/>
      </g>
      <!-- Tail fan -->
      <path d="M -21,5 L -33,1 L -29,8 L -34,13 L -22,11 Z" fill="#dc5a32"/>
      <path d="M -21,6 L -30,4 L -28,10 Z" fill="#f59563" opacity="0.7"/>
      <!-- Segmented curved prawn body -->
      <path d="M -22,6 C -21,-3 -13,-10 -2,-10 C 8,-10 17,-6 22,-1 C 19,5 12,7 4,6 C -4,5 -11,4 -16,9 C -19,11 -22,10 -22,6 Z" fill="#f07b49"/>
      <!-- Highlight & carapace segment bands -->
      <path d="M -16,2 C -12,-5 -4,-8 6,-7 C 12,-6 17,-4 20,-1 C 15,-2 8,-3 1,-2 C -7,-1 -12,1 -16,2 Z" fill="#f9ad7c" opacity="0.75"/>
      <path d="M -11,-6 C -11,-2 -10,2 -12,5" fill="none" stroke="#c94f29" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M -4,-9 C -3,-4 -3,1 -5,5" fill="none" stroke="#c94f29" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M 3,-9 C 4,-4 4,1 2,6" fill="none" stroke="#c94f29" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M 10,-7 C 11,-3 11,2 9,6" fill="none" stroke="#c94f29" stroke-width="1.4" stroke-linecap="round"/>
      <!-- Rostrum tip & glossy eye -->
      <path d="M 20,-2 L 26,-4 L 21,1 Z" fill="#e0653a"/>
      <circle cx="16.5" cy="-2.5" r="2" fill="#182230"/>
      <circle cx="17.2" cy="-3.2" r="0.65" fill="#ffffff"/>
    </g>

    <!-- Reusable Dark Ocean Fish (facing right, inspired by reference) -->
    <g id="fish-dark">
      <g class="tail-wag">
        <path d="M -20,0 L -34,-11 L -29,0 L -34,11 Z" fill="#123850"/>
      </g>
      <path d="M -22,0 C -14,-11 4,-13 20,-3 C 24,-1 25,0 25,0 C 25,0 24,2 20,4 C 4,13 -14,11 -22,0 Z" fill="#16435e"/>
      <path d="M -14,-2 C -6,-9 6,-9 18,-2 C 8,-4 -4,-4 -14,-2 Z" fill="#2c6f91" opacity="0.65"/>
      <!-- Dorsal & pectoral fins -->
      <path d="M -4,-9 L 5,-17 L 9,-7 Z" fill="#123850"/>
      <path d="M 1,4 L -5,13 L 6,8 Z" fill="#103247"/>
      <circle cx="16.5" cy="-1.5" r="1.8" fill="#e8fbff"/>
      <circle cx="17" cy="-1.5" r="1" fill="#081a26"/>
    </g>

    <!-- Reusable Golden Reef Fish (facing right) -->
    <g id="fish-gold">
      <g class="tail-wag">
        <path d="M -14,0 L -25,-9 L -21,0 L -25,9 Z" fill="#e08934"/>
      </g>
      <path d="M -16,0 C -10,-11 5,-12 17,-2 C 19,0 19,1 17,3 C 5,12 -10,11 -16,0 Z" fill="#f5b342"/>
      <!-- Stripes -->
      <path d="M 2,-9 C 4,-3 4,3 2,9" fill="none" stroke="#fff3d1" stroke-width="2.4" opacity="0.8"/>
      <path d="M -5,-8 C -3,-2 -3,3 -5,8" fill="none" stroke="#d97228" stroke-width="2" opacity="0.7"/>
      <path d="M -2,-9 L 4,-15 L 8,-7 Z" fill="#e08934"/>
      <circle cx="11.5" cy="-1.5" r="1.7" fill="#1a2533"/>
      <circle cx="12" cy="-2" r="0.6" fill="#ffffff"/>
    </g>

    <!-- Reusable Tropical Cyan Fish (facing right) -->
    <g id="fish-cyan">
      <g class="tail-wag">
        <path d="M -13,0 L -23,-8 L -19,0 L -23,8 Z" fill="#32a4c7"/>
      </g>
      <path d="M -14,0 C -8,-10 5,-11 16,-1 C 18,0 18,1 16,2 C 5,11 -8,10 -14,0 Z" fill="#5fd2eb"/>
      <path d="M -6,-5 C 0,-8 7,-7 12,-2" fill="none" stroke="#c8f7ff" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M -3,-8 L 3,-13 L 7,-6 Z" fill="#32a4c7"/>
      <circle cx="10.5" cy="-1" r="1.5" fill="#122738"/>
      <circle cx="11" cy="-1.5" r="0.5" fill="#ffffff"/>
    </g>

    <!-- Reusable Tiny School Fish (facing right) -->
    <g id="fish-tiny">
      <path d="M -8,0 L -14,-4.5 L -12,0 L -14,4.5 Z" fill="#164e6e"/>
      <path d="M -9,0 C -4,-4.5 4,-4.5 10,0 C 4,4.5 -4,4.5 -9,0 Z" fill="#1d5f82"/>
    </g>

    <!-- Reusable Rising Bubble -->
    <g id="bubble-shape">
      <circle cx="0" cy="0" r="5" fill="#c8f7ff" fill-opacity="0.22" stroke="#dffbff" stroke-width="1.1" stroke-opacity="0.72"/>
      <circle cx="-1.6" cy="-1.6" r="1.3" fill="#ffffff" opacity="0.85"/>
    </g>

    <style><![CDATA[
      /* Cloud parallax drifts */
      .cloud-slow { animation: cloudDriftSlow 18s ease-in-out infinite; }
      .cloud-med { animation: cloudDriftMed 14s ease-in-out infinite; }
      .cloud-fast { animation: cloudDriftFast 11s ease-in-out infinite; }
      .cloud-globe { animation: cloudDriftGlobe 10s ease-in-out infinite; }

      @keyframes cloudDriftSlow { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(26px); } }
      @keyframes cloudDriftMed { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(-22px); } }
      @keyframes cloudDriftFast { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(18px); } }
      @keyframes cloudDriftGlobe { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(12px); } }

      /* Globe rotating continents */
      .globe-continents { animation: globeSpin 22s linear infinite; }
      @keyframes globeSpin { 0% { transform: translateX(0px); } 100% { transform: translateX(180px); } }

      /* Map pin gentle float & radar pulse */
      .pin-red-anim { animation: pinFloat 3.6s ease-in-out infinite; transform-origin: 391px 224px; }
      .pin-yellow-anim { animation: pinFloat 4.2s ease-in-out -1.5s infinite; transform-origin: 249px 274px; }
      @keyframes pinFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5.5px); } }

      .pin-pulse { animation: pulseRing 3s ease-out infinite; transform-box: fill-box; transform-origin: center; }
      .pin-pulse-delay { animation: pulseRing 3s ease-out -1.5s infinite; transform-box: fill-box; transform-origin: center; }
      @keyframes pulseRing { 0% { transform: scale(0.5); opacity: 0.75; } 100% { transform: scale(2.2); opacity: 0; } }

      /* Surface Ships & Buoys */
      .main-ship { animation: mainShipBob 6s ease-in-out infinite; transform-origin: 395px 392px; }
      @keyframes mainShipBob {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        35% { transform: translateY(-3.5px) rotate(-0.42deg); }
        70% { transform: translateY(2px) rotate(0.32deg); }
      }

      .distant-ship { animation: distantBob 5.2s ease-in-out -1s infinite; transform-origin: 0px 0px; }
      @keyframes distantBob {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        50% { transform: translate(5px, -1.8px) rotate(-0.5deg); }
      }

      .crane-barge { animation: bargeBob 5.4s ease-in-out -0.8s infinite; transform-origin: 0px 0px; }
      @keyframes bargeBob {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        45% { transform: translate(2.5px, -3.5px) rotate(0.65deg); }
        75% { transform: translate(-2px, 1.8px) rotate(-0.45deg); }
      }

      .barge-crane-arm { animation: craneSway 7s ease-in-out infinite; transform-origin: 136px -4px; }
      @keyframes craneSway { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(2.4deg); } }

      .tugboat { animation: tugBob 4.4s ease-in-out -1.8s infinite; transform-origin: 0px 0px; }
      @keyframes tugBob {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        50% { transform: translate(-4px, -2.8px) rotate(-1deg); }
      }

      .flag-flutter { animation: flagWave 1.4s ease-in-out infinite; transform-box: fill-box; transform-origin: left center; }
      @keyframes flagWave { 0%, 100% { transform: scaleX(1) skewY(0deg); } 50% { transform: scaleX(0.82) skewY(-8deg); } }

      .buoy-1 { animation: buoyBob 3.8s ease-in-out 0s infinite; transform-origin: 0px 0px; }
      .buoy-2 { animation: buoyBob 4.2s ease-in-out -1.3s infinite; transform-origin: 0px 0px; }
      .buoy-3 { animation: buoyBob 3.6s ease-in-out -2.4s infinite; transform-origin: 0px 0px; }
      @keyframes buoyBob { 0%, 100% { transform: translateY(0px) rotate(-2.5deg); } 50% { transform: translateY(-4px) rotate(3deg); } }

      .beacon-glow { animation: beaconBlink 2.4s ease-in-out infinite; }
      @keyframes beaconBlink { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.9; } }

      .ripple-pulse { animation: rippleAnim 3.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
      @keyframes rippleAnim { 0%, 100% { transform: scaleX(0.92); opacity: 0.45; } 50% { transform: scaleX(1.12); opacity: 0.75; } }

      /* Water Surface Wave Meniscus */
      .surface-wave-back { animation: surfaceSlide1 8s ease-in-out infinite; }
      .surface-wave-front { animation: surfaceSlide2 6.5s ease-in-out infinite; }
      @keyframes surfaceSlide1 { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(20px); } }
      @keyframes surfaceSlide2 { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(-22px); } }

      /* Fishing rod & underwater line gentle sway */
      .fishing-rod { animation: rodFlex 4.4s ease-in-out -1.8s infinite; transform-origin: 24px -26px; }
      @keyframes rodFlex {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(-2.5deg); }
      }
      .underwater-line { animation: lineSway 4.4s ease-in-out -1.8s infinite; transform-origin: 73px -55px; }
      @keyframes lineSway {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(1.8deg); }
      }

      /* Fish & Prawn Swimming Loops */
      .swim-right-1 { animation: swimR1 22s linear infinite; }
      .swim-right-2 { animation: swimR2 26s linear -9s infinite; }
      .swim-left-1 { animation: swimL1 24s linear -4s infinite; }
      .swim-left-2 { animation: swimL2 19s linear -11s infinite; }
      .swim-school { animation: swimSchool 28s linear -6s infinite; }

      @keyframes swimR1 {
        0% { transform: translate(-120px, 0px); }
        25% { transform: translate(230px, -10px); }
        50% { transform: translate(580px, 4px); }
        75% { transform: translate(920px, -8px); }
        100% { transform: translate(1160px, 0px); }
      }
      @keyframes swimR2 {
        0% { transform: translate(-100px, 0px); }
        30% { transform: translate(290px, 12px); }
        65% { transform: translate(720px, -9px); }
        100% { transform: translate(1140px, 0px); }
      }
      @keyframes swimL1 {
        0% { transform: translate(1140px, 0px); }
        30% { transform: translate(760px, -11px); }
        65% { transform: translate(340px, 8px); }
        100% { transform: translate(-120px, 0px); }
      }
      @keyframes swimL2 {
        0% { transform: translate(1120px, 0px); }
        35% { transform: translate(680px, 10px); }
        70% { transform: translate(250px, -8px); }
        100% { transform: translate(-120px, 0px); }
      }
      @keyframes swimSchool {
        0% { transform: translate(-160px, 0px); }
        50% { transform: translate(510px, -14px); }
        100% { transform: translate(1180px, 0px); }
      }

      /* Prawns gentle hovering & darting glide */
      .prawn-glide-1 { animation: prawnSwimR 18s ease-in-out infinite; }
      .prawn-glide-2 { animation: prawnSwimL 21s ease-in-out -5s infinite; }
      .prawn-glide-3 { animation: prawnSwimR2 16s ease-in-out -8s infinite; }
      .prawn-glide-4 { animation: prawnHover 6s ease-in-out -2s infinite; }

      @keyframes prawnSwimR {
        0% { transform: translate(-90px, 0px) rotate(0deg); }
        25% { transform: translate(240px, -14px) rotate(-4deg); }
        50% { transform: translate(560px, 8px) rotate(3deg); }
        75% { transform: translate(860px, -12px) rotate(-3deg); }
        100% { transform: translate(1130px, 0px) rotate(0deg); }
      }
      @keyframes prawnSwimL {
        0% { transform: translate(1120px, 0px) rotate(0deg); }
        30% { transform: translate(740px, 12px) rotate(4deg); }
        65% { transform: translate(310px, -10px) rotate(-4deg); }
        100% { transform: translate(-100px, 0px) rotate(0deg); }
      }
      @keyframes prawnSwimR2 {
        0%, 100% { transform: translate(0px, 0px) rotate(-2deg); }
        50% { transform: translate(75px, -14px) rotate(4deg); }
      }
      @keyframes prawnHover {
        0%, 100% { transform: translate(0px, 0px) rotate(2deg); }
        50% { transform: translate(-38px, -10px) rotate(-5deg); }
      }

      /* Fish tail wag */
      .tail-wag { animation: tailBeat 0.85s ease-in-out infinite; transform-box: fill-box; transform-origin: right center; }
      @keyframes tailBeat { 0%, 100% { transform: scaleX(1) skewY(0deg); } 50% { transform: scaleX(0.76) skewY(7deg); } }

      /* Swaying Kelp & Seaweed */
      .kelp-sway-1 { animation: kelpSway 5.5s ease-in-out infinite; transform-box: fill-box; transform-origin: bottom center; }
      .kelp-sway-2 { animation: kelpSway 6.8s ease-in-out -2s infinite; transform-box: fill-box; transform-origin: bottom center; }
      .kelp-sway-3 { animation: kelpSway 4.8s ease-in-out -1.1s infinite; transform-box: fill-box; transform-origin: bottom center; }
      @keyframes kelpSway {
        0%, 100% { transform: rotate(-4deg) skewX(-2deg); }
        50% { transform: rotate(5deg) skewX(3deg); }
      }

      /* Rising Bubbles */
      .bubble-rise-1 { animation: bubbleUp 8s ease-in infinite; }
      .bubble-rise-2 { animation: bubbleUp 10s ease-in -3.2s infinite; }
      .bubble-rise-3 { animation: bubbleUp 7.2s ease-in -5.5s infinite; }
      .bubble-rise-4 { animation: bubbleUp 9.4s ease-in -1.8s infinite; }
      @keyframes bubbleUp {
        0% { transform: translate(0px, 0px) scale(0.6); opacity: 0; }
        15% { opacity: 0.85; }
        50% { transform: translate(8px, -150px) scale(0.95); opacity: 0.78; }
        85% { opacity: 0.5; }
        100% { transform: translate(-6px, -310px) scale(1.1); opacity: 0; }
      }

      /* Birds gliding & wing flapping */
      .flock-left { animation: flockGlideLeft 12s ease-in-out infinite; }
      .flock-right { animation: flockGlideRight 14s ease-in-out infinite; }
      @keyframes flockGlideLeft { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(18px, -7px); } }
      @keyframes flockGlideRight { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(-15px, -6px); } }

      .wing-a { animation: flap 1.6s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
      .wing-b { animation: flap 1.9s ease-in-out -0.7s infinite; transform-box: fill-box; transform-origin: center; }
      @keyframes flap { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.35); } }
    ]]></style>
  </defs>

  <!-- ========================================================= -->
  <!-- ABOVE WATERLINE: SKY, CLOUDS, BIRDS, HARBOR, GLOBE, SHIPS -->
  <!-- ========================================================= -->

  <!-- 1. SKY BACKGROUND -->
  <rect x="0" y="0" width="1024" height="398" fill="url(#skyGrad)"/>

  <!-- 2. DISTANT PALE BACKGROUND CLOUDS -->
  <g class="cloud-slow" opacity="0.92">
    <path d="M -10,42 L 68,42 C 68,31 59,23 48,23 C 45,23 42,24 40,26 C 35,19 26,15 17,17 C 8,19 2,26 0,34 L -10,34 Z" fill="#d3dce9"/>
    <path d="M 526,123 L 700,123 C 700,111 690,103 678,103 C 674,103 670,104 667,106 C 663,97 654,91 643,91 C 638,91 634,92 630,95 C 623,86 611,82 599,86 C 591,89 585,95 582,102 C 578,100 573,99 568,100 C 560,102 554,108 552,115 C 547,114 541,115 537,118 C 532,120 528,121 526,123 Z" fill="#d3dce9"/>
    <path d="M 428,162 L 474,162 C 474,155 468,151 462,151 C 460,151 458,152 456,153 C 453,148 446,147 441,150 C 438,152 436,154 435,157 C 431,157 428,159 428,162 Z" fill="#d3dce9"/>
    <path d="M 73,228 L 135,228 C 135,221 129,216 122,216 C 119,216 116,217 114,218 C 111,212 103,209 96,212 C 92,213 89,216 88,220 C 85,219 81,220 78,222 C 75,223 73,226 73,228 Z" fill="#d6dfec"/>
    <path d="M 571,248 L 635,248 C 635,240 628,235 620,235 C 617,235 614,236 612,238 C 608,231 599,228 591,231 C 587,233 584,237 583,241 C 578,240 572,243 571,248 Z" fill="#d3dce9"/>
    <path d="M 764,238 L 856,238 C 856,227 847,219 836,219 C 832,219 828,220 825,223 C 820,211 807,205 795,209 C 788,211 783,216 780,222 C 773,221 765,228 764,238 Z" fill="#d3dce9"/>
    <path d="M 838,259 L 930,259 C 930,251 922,246 914,246 C 910,246 907,247 904,249 C 899,240 888,236 878,240 C 873,242 869,246 867,250 C 861,249 855,252 852,256 C 846,256 841,257 838,259 Z" fill="#d6dfec"/>
  </g>

  <!-- 3. FOREGROUND TEAL CLOUDS -->
  <g class="cloud-med">
    <path d="M 35,89 L 214,89 C 214,76 203,66 190,66 C 186,66 182,67 178,69 C 174,60 165,55 154,56 C 149,56 144,58 140,61 C 133,47 116,40 100,45 C 89,48 81,56 77,66 C 72,62 64,61 57,64 C 49,67 43,75 43,83 C 38,83 35,86 35,89 Z" fill="#4897be"/>
    <path d="M 440,59 L 542,59 C 542,50 535,43 526,43 C 524,43 522,44 520,45 C 516,35 505,30 495,34 C 490,36 486,39 484,44 C 479,41 472,41 467,45 C 463,47 461,51 460,54 C 456,51 450,51 445,54 C 442,55 440,57 440,59 Z" fill="#4897be"/>
    <path d="M 795,89 L 975,89 C 975,75 964,65 950,65 C 946,65 942,66 939,68 C 934,58 923,53 912,56 C 908,57 905,59 902,61 C 895,46 878,39 862,44 C 851,48 843,56 839,66 C 833,62 825,61 818,64 C 810,68 805,75 804,83 C 799,83 795,85 795,89 Z" fill="#4897be"/>
  </g>

  <g class="cloud-fast">
    <path d="M 173,177 L 223,177 C 223,171 218,167 212,167 C 210,167 208,168 206,169 C 203,163 195,161 189,165 C 186,166 184,169 183,172 C 178,171 174,173 173,177 Z" fill="#4e9bc0"/>
    <path d="M 505,212 L 587,212 C 587,204 581,198 573,198 C 570,198 567,199 565,200 C 562,191 551,187 542,191 C 538,193 535,196 533,200 C 529,197 523,197 518,200 C 514,202 512,205 511,208 C 508,208 505,209 505,212 Z" fill="#4897be"/>
    <path d="M 902,217 L 986,217 C 986,210 980,205 973,205 C 970,205 968,206 966,207 C 962,198 951,194 942,198 C 937,200 934,204 932,208 C 927,205 920,206 916,210 C 911,210 905,212 902,217 Z" fill="#4e9bc0"/>
  </g>

  <!-- 4. BIRDS FLOCKS -->
  <g class="flock-left">
    <g transform="translate(101,164) scale(1.8)"><use href="#bird-shape" class="wing-a"/></g>
    <g transform="translate(141,170) scale(1.1)"><use href="#bird-shape" class="wing-b"/></g>
    <g transform="translate(56,163) scale(0.95)"><use href="#bird-shape" class="wing-b"/></g>
    <g transform="translate(46,169) scale(0.85)"><use href="#bird-shape" class="wing-a"/></g>
    <g transform="translate(21,176) scale(0.75)"><use href="#bird-shape" class="wing-b"/></g>
    <g transform="translate(36,182) scale(0.7)"><use href="#bird-shape" class="wing-a"/></g>
    <g transform="translate(61,180) scale(0.65)"><use href="#bird-shape" class="wing-b"/></g>
    <g transform="translate(53,191) scale(1.05)"><use href="#bird-shape" class="wing-a"/></g>
    <g transform="translate(38,204) scale(0.75)"><use href="#bird-shape" class="wing-b"/></g>
    <g transform="translate(174,194) scale(0.55)"><use href="#bird-shape" class="wing-a"/></g>
    <g transform="translate(22,257) scale(0.65)"><use href="#bird-shape" class="wing-b"/></g>
  </g>

  <g class="flock-right" opacity="0.75">
    <g transform="translate(858,177) scale(0.75)"><use href="#bird-shape" class="wing-b"/></g>
    <g transform="translate(879,163) scale(0.55)"><use href="#bird-shape" class="wing-a"/></g>
    <g transform="translate(845,189) scale(0.55)"><use href="#bird-shape" class="wing-a"/></g>
    <g transform="translate(818,181) scale(0.5)"><use href="#bird-shape" class="wing-b"/></g>
    <g transform="translate(863,195) scale(0.45)"><use href="#bird-shape" class="wing-b"/></g>
    <g transform="translate(888,185) scale(0.48)"><use href="#bird-shape" class="wing-a"/></g>
  </g>

  <!-- 5. DISTANT HARBOR PIER & GANTRY CRANES -->
  <g id="harbor-background">
    <rect x="520" y="376" width="504" height="16" fill="#d1dce8"/>
    <g transform="translate(528,378)"><use href="#gantry-crane"/></g>
    <g transform="translate(643,378)"><use href="#gantry-crane"/></g>
    <g transform="translate(935,378) scale(0.72)"><use href="#gantry-crane"/></g>
    <g transform="translate(998,378) scale(0.72)"><use href="#gantry-crane"/></g>
  </g>

  <!-- 6. GLOBAL NETWORK GLOBE & LOCATION PINS -->
  <g id="globe-group" transform="translate(300, 0)">
    <circle cx="345" cy="252" r="100" fill="url(#globeGrad)"/>
    <g clip-path="url(#globeClip)">
      <g class="globe-continents" fill="#82b0d6" opacity="0.58">
        <path d="M 255,182 C 272,176 295,177 306,190 C 314,200 308,216 296,224 C 288,230 292,240 302,248 C 315,258 322,277 314,294 C 304,314 288,326 276,318 C 266,310 272,288 266,274 C 258,258 244,246 246,224 C 248,206 244,188 255,182 Z"/>
        <path d="M 342,166 C 368,158 404,166 422,186 C 434,200 426,218 414,226 C 424,236 432,254 424,274 C 414,298 394,318 378,310 C 366,304 368,280 358,266 C 346,250 338,236 344,218 C 350,202 330,178 342,166 Z"/>
        <path d="M 75,182 C 92,176 115,177 126,190 C 134,200 128,216 116,224 C 108,230 112,240 122,248 C 135,258 142,277 134,294 C 124,314 108,326 96,318 C 86,310 92,288 86,274 C 78,258 64,246 66,224 C 68,206 64,188 75,182 Z"/>
        <path d="M 162,166 C 188,158 224,166 242,186 C 254,200 246,218 234,226 C 244,236 252,254 244,274 C 234,298 214,318 198,310 C 186,304 188,280 178,266 C 166,250 158,236 164,218 C 170,202 150,178 162,166 Z"/>
      </g>
      <g fill="none" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.48">
        <line x1="240" y1="210" x2="450" y2="210"/>
        <line x1="240" y1="252" x2="450" y2="252"/>
        <line x1="240" y1="294" x2="450" y2="294"/>
        <ellipse cx="345" cy="252" rx="48" ry="100"/>
        <ellipse cx="345" cy="252" rx="82" ry="100"/>
        <line x1="345" y1="152" x2="345" y2="352"/>
      </g>
    </g>

    <g class="cloud-globe" fill="#eef7fe" opacity="0.92">
      <path d="M 244,214 L 303,214 C 303,208 298,204 292,204 C 289,204 287,205 285,206 C 282,200 274,197 268,200 C 264,202 262,205 261,208 C 256,206 249,208 244,214 Z"/>
      <path d="M 322,257 L 382,257 C 382,251 376,247 370,247 C 367,247 365,248 363,249 C 359,242 350,240 343,244 C 339,246 337,249 336,252 C 331,251 325,253 322,257 Z"/>
    </g>

    <!-- Red Map Pin -->
    <g class="pin-red-anim">
      <circle cx="391" cy="226" r="5" fill="none" stroke="#e05a4d" stroke-width="1.8" class="pin-pulse"/>
      <path d="M 391,195 C 384,195 379,200.5 379,207.5 C 379,216 391,226 391,226 C 391,226 403,216 403,207.5 C 403,200.5 398,195 391,195 Z" fill="#e05a4d"/>
      <circle cx="391" cy="207" r="4.6" fill="#f7f9fc"/>
    </g>

    <!-- Yellow Map Pin -->
    <g class="pin-yellow-anim">
      <circle cx="249" cy="275" r="5" fill="none" stroke="#e8af41" stroke-width="1.8" class="pin-pulse-delay"/>
      <path d="M 249,245 C 242,245 237,250.5 237,257.5 C 237,266 249,275 249,275 C 249,275 261,266 261,257.5 C 261,250.5 256,245 249,245 Z" fill="#e8af41"/>
      <circle cx="249" cy="257" r="4.6" fill="#f7f9fc"/>
    </g>
  </g>

  <!-- ========================================================= -->
  <!-- UNDERWATER CROSS-SECTION (Split-View Perspective)         -->
  <!-- ========================================================= -->

  <!-- 7. DEEP OCEAN BACKDROP -->
  <rect x="0" y="394" width="1024" height="366" fill="url(#underwaterGrad)"/>

  <g clip-path="url(#underwaterClip)">

    <!-- Underwater Shadow of Main Ship Hull -->
    <path d="M 196,406 L 568,406 C 550,428 485,436 382,436 C 275,436 212,428 196,406 Z" fill="#07314a" opacity="0.38"/>

    <!-- Distant School of Tiny Fish (gliding through sunbeams) -->
    <g class="swim-school" opacity="0.62">
      <g transform="translate(0,555) scale(0.95)"><use href="#fish-tiny"/></g>
      <g transform="translate(22,547) scale(0.8)"><use href="#fish-tiny"/></g>
      <g transform="translate(38,560) scale(0.9)"><use href="#fish-tiny"/></g>
      <g transform="translate(56,552) scale(0.75)"><use href="#fish-tiny"/></g>
      <g transform="translate(18,568) scale(0.7)"><use href="#fish-tiny"/></g>
      <g transform="translate(68,563) scale(0.85)"><use href="#fish-tiny"/></g>
    </g>

    <!-- Distant Mid-Depth Silhouetted Fish (Right) -->
    <g opacity="0.34">
      <g class="swim-left-2" transform="translate(0,540)">
        <g transform="scale(-0.72,0.72)"><use href="#fish-dark"/></g>
      </g>
    </g>

    <!-- SWIMMING UNDERWATER CREATURES: PRAWNS ("FRONS") & FISH -->

    <!-- Prawn 1 (Mid-left to right, coral-orange, clear & lively) -->
    <g transform="translate(0,510)">
      <g class="prawn-glide-1">
        <g transform="scale(1.22)"><use href="#prawn-shape"/></g>
      </g>
    </g>

    <!-- Prawn 2 (Lower-right to left, facing left) -->
    <g transform="translate(0,618)">
      <g class="prawn-glide-2">
        <g transform="scale(-1.12,1.12)"><use href="#prawn-shape"/></g>
      </g>
    </g>

    <!-- Prawn 3 (Near left coral reef, gentle forward-back darting) -->
    <g transform="translate(230,656)">
      <g class="prawn-glide-3">
        <g transform="scale(0.95)"><use href="#prawn-shape"/></g>
      </g>
    </g>

    <!-- Prawn 4 (Near right sunlit slope, facing left) -->
    <g transform="translate(748,546)">
      <g class="prawn-glide-4">
        <g transform="scale(-0.88,0.88)"><use href="#prawn-shape"/></g>
      </g>
    </g>

    <!-- Hero Dark Ocean Fish #1 (swimming right, lower-mid like reference) -->
    <g transform="translate(0,598)">
      <g class="swim-right-1">
        <g transform="scale(1.25)"><use href="#fish-dark"/></g>
      </g>
    </g>

    <!-- Hero Dark Ocean Fish #2 (smaller, upper-right swimming left like reference) -->
    <g transform="translate(0,482)">
      <g class="swim-left-1">
        <g transform="scale(-0.92,0.92)"><use href="#fish-dark"/></g>
      </g>
    </g>

    <!-- Golden Reef Fish (swimming right in lower sunlit zone) -->
    <g transform="translate(0,668)">
      <g class="swim-right-2">
        <g transform="scale(1.05)"><use href="#fish-gold"/></g>
      </g>
    </g>

    <!-- Tropical Cyan Fish (swimming left in upper-mid zone) -->
    <g transform="translate(0,536)">
      <g class="swim-left-2">
        <g transform="scale(-1,1)"><use href="#fish-cyan"/></g>
      </g>
    </g>

    <!-- RISING AIR BUBBLES -->
    <g transform="translate(172,715)"><g class="bubble-rise-1"><use href="#bubble-shape" transform="scale(0.95)"/></g></g>
    <g transform="translate(210,725)"><g class="bubble-rise-2"><use href="#bubble-shape" transform="scale(0.65)"/></g></g>
    <g transform="translate(365,745)"><g class="bubble-rise-3"><use href="#bubble-shape" transform="scale(0.75)"/></g></g>
    <g transform="translate(530,740)"><g class="bubble-rise-4"><use href="#bubble-shape" transform="scale(0.6)"/></g></g>
    <g transform="translate(670,735)"><g class="bubble-rise-2"><use href="#bubble-shape" transform="scale(0.85)"/></g></g>
    <g transform="translate(830,710)"><g class="bubble-rise-1"><use href="#bubble-shape" transform="scale(1.05)"/></g></g>
    <g transform="translate(868,720)"><g class="bubble-rise-3"><use href="#bubble-shape" transform="scale(0.62)"/></g></g>

    <!-- ROCKY SEABED SLOPES, SWAYING KELP & CORAL REEF -->
    <!-- Back Seabed Slope (Left & Right framing central deep channel) -->
    <path d="M 0,555 L 78,585 L 158,620 L 235,685 L 335,738 L 410,760 L 0,760 Z" fill="#0c3d59"/>
    <path d="M 1024,545 L 938,578 L 848,618 L 760,682 L 668,735 L 605,760 L 1024,760 Z" fill="#0c3d59"/>

    <!-- Swaying Seaweed / Kelp (Left Slope) -->
    <g class="kelp-sway-1">
      <path d="M 122,672 C 115,642 126,612 114,582 C 127,594 134,612 132,630 C 142,616 150,602 152,588 C 156,608 148,628 138,644 C 149,636 158,626 164,616 C 162,636 146,654 132,672 Z" fill="#90b84b"/>
      <path d="M 118,672 C 106,652 96,635 90,618 C 104,628 112,642 122,660 Z" fill="#6f9c42"/>
    </g>
    <g class="kelp-sway-2">
      <path d="M 52,612 C 44,588 52,566 44,548 C 56,558 62,572 60,588 C 68,576 74,564 78,554 C 80,572 72,592 60,612 Z" fill="#7da846"/>
    </g>
    <g class="kelp-sway-3">
      <path d="M 244,742 C 238,718 248,698 242,678 C 254,688 258,704 256,718 C 264,708 272,696 276,686 C 276,704 266,724 254,742 Z" fill="#b4cf57"/>
    </g>

    <!-- Swaying Seaweed / Kelp (Right Slope) -->
    <g class="kelp-sway-2">
      <path d="M 906,658 C 912,620 898,582 914,542 C 896,558 888,580 890,602 C 878,584 870,566 866,548 C 862,574 872,600 884,620 C 870,610 858,596 850,582 C 852,608 872,634 892,658 Z" fill="#a9c74e"/>
      <path d="M 914,658 C 928,632 940,610 950,588 C 934,602 924,620 908,644 Z" fill="#7ba642"/>
    </g>
    <g class="kelp-sway-1">
      <path d="M 758,718 C 752,696 760,676 754,658 C 764,668 770,682 768,696 C 776,686 782,676 786,666 C 786,684 776,702 766,718 Z" fill="#7da846"/>
    </g>

    <!-- Foreground Faceted Seabed Rocks (Left) -->
    <g>
      <polygon points="0,636 62,648 118,696 154,760 0,760" fill="#184f6b"/>
      <polygon points="0,636 62,648 44,698 0,686" fill="#2c6f8e"/>
      <polygon points="96,688 168,682 228,722 252,760 110,760" fill="#14445e"/>
      <polygon points="108,688 168,682 184,716 124,724" fill="#256582"/>
      <polygon points="205,726 276,720 332,760 198,760" fill="#1b5470"/>
      <polygon points="215,726 276,720 286,742 230,746" fill="#317794"/>
    </g>

    <!-- Foreground Faceted Seabed Rocks (Right) -->
    <g>
      <polygon points="1024,622 954,638 892,690 854,760 1024,760" fill="#184f6b"/>
      <polygon points="1024,622 954,638 972,692 1024,680" fill="#2c6f8e"/>
      <polygon points="914,680 834,676 774,718 750,760 898,760" fill="#14445e"/>
      <polygon points="902,680 834,676 820,712 882,720" fill="#256582"/>
      <polygon points="796,722 726,718 668,760 806,760" fill="#1b5470"/>
      <polygon points="786,722 726,718 716,742 772,746" fill="#317794"/>
    </g>

    <!-- Vibrant Coral Clusters (Left & Right foreground, echoing reference) -->
    <!-- Left Coral-Red Cluster -->
    <g transform="translate(88,754)">
      <path d="M -52,6 C -54,-14 -40,-28 -26,-24 C -24,-38 -6,-42 6,-30 C 18,-40 36,-32 36,-16 C 48,-16 56,-4 52,6 Z" fill="#e85d4a"/>
      <path d="M -36,6 C -38,-8 -26,-18 -14,-14 C -10,-26 6,-28 14,-16 C 24,-22 36,-14 34,6 Z" fill="#f5836b"/>
      <circle cx="-18" cy="-12" r="3.5" fill="#c94334" opacity="0.6"/>
      <circle cx="4" cy="-18" r="4" fill="#c94334" opacity="0.6"/>
      <circle cx="20" cy="-8" r="3.2" fill="#c94334" opacity="0.6"/>
    </g>

    <!-- Right Warm Orange & Pink Coral Clusters -->
    <g transform="translate(868,754)">
      <path d="M -46,6 C -48,-12 -36,-24 -22,-20 C -18,-36 2,-38 12,-24 C 24,-34 42,-24 40,-8 C 50,-6 54,2 50,6 Z" fill="#f08f35"/>
      <path d="M -30,6 C -30,-6 -20,-14 -10,-12 C -6,-22 8,-22 14,-12 C 24,-16 32,-8 30,6 Z" fill="#f8b655"/>
    </g>
    <!-- Small Pink Reef Coral -->
    <g transform="translate(918,698)">
      <circle cx="0" cy="0" r="13" fill="#e66c85"/>
      <circle cx="-4" cy="-4" r="6" fill="#f596aa" opacity="0.65"/>
    </g>
    <!-- Small Golden Coral (Right-Center) -->
    <g transform="translate(778,754)">
      <path d="M -28,6 C -28,-8 -18,-18 -6,-14 C -2,-26 14,-24 18,-12 C 26,-16 34,-6 30,6 Z" fill="#edc04c"/>
    </g>
  </g>

  <!-- ========================================================= -->
  <!-- FLOATING SURFACE VESSELS & TRANSLUCENT WATERLINE MENISCUS -->
  <!-- ========================================================= -->

  <!-- 8. DISTANT SMALL CARGO SHIP (Far Left on Waterline) -->
  <g transform="translate(76,396)">
    <g class="distant-ship">
      <rect x="-27" y="-15" width="11" height="6" fill="#d9a546"/>
      <rect x="-15" y="-15" width="12" height="6" fill="#c75449"/>
      <rect x="-2" y="-15" width="11" height="6" fill="#4f5482"/>
      <rect x="10" y="-15" width="10" height="6" fill="#3a809c"/>
      <rect x="-13" y="-20" width="10" height="5" fill="#d9a546"/>
      <rect x="-2" y="-20" width="11" height="5" fill="#c75449"/>
      <rect x="20" y="-24" width="14" height="15" fill="#e1e6ee"/>
      <rect x="23" y="-21" width="8" height="2.2" fill="#3b3e52"/>
      <rect x="27" y="-29" width="4" height="5" fill="#c44b42"/>
      <polygon points="-38,-10 43,-10 38,-2 -34,-2" fill="#312e43"/>
      <polygon points="-34,-3 38,-3 36,1 -32,1" fill="#c44b42"/>
    </g>
  </g>

  <!-- 9. MAIN CONTAINER SHIP (Sitting right on the Split Waterline) -->
  <g class="main-ship">
    <!-- Superstructure / Bridge -->
    <line x1="281" y1="218" x2="281" y2="240" stroke="#3c4254" stroke-width="1.4"/>
    <line x1="286" y1="221" x2="286" y2="240" stroke="#3c4254" stroke-width="1.2"/>
    <rect x="274" y="236" width="21" height="32" fill="#d3d8e2"/>
    <rect x="274" y="236" width="6" height="32" fill="#bfc6d4"/>
    <rect x="242" y="268" width="64" height="12" fill="#c9d0dc"/>
    <rect x="260" y="263" width="24" height="6" fill="#b4bcc9"/>
    <rect x="226" y="280" width="97" height="15" fill="#d9dfe8"/>
    <rect x="226" y="280" width="97" height="4" fill="#8f98a8"/>
    <g fill="#36394c">
      <rect x="246" y="287" width="5" height="3.2"/>
      <rect x="255" y="287" width="5" height="3.2"/>
      <rect x="264" y="287" width="5" height="3.2"/>
      <rect x="273" y="287" width="5" height="3.2"/>
      <rect x="282" y="287" width="5" height="3.2"/>
      <rect x="291" y="287" width="5" height="3.2"/>
      <rect x="300" y="287" width="5" height="3.2"/>
      <rect x="309" y="287" width="5" height="3.2"/>
    </g>
    <rect x="234" y="295" width="84" height="58" fill="#d4dbe5"/>
    <rect x="234" y="295" width="16" height="58" fill="#9ea7b8"/>
    <rect x="230" y="305" width="12" height="3.5" fill="#6f788a"/>
    <rect x="230" y="319" width="12" height="3.5" fill="#6f788a"/>
    <rect x="230" y="333" width="12" height="3.5" fill="#6f788a"/>
    <rect x="230" y="346" width="12" height="3.5" fill="#6f788a"/>
    <g fill="#3b3f52">
      <rect x="256" y="304" width="5" height="3.5"/>
      <rect x="266" y="304" width="5" height="3.5"/>
      <rect x="276" y="304" width="5" height="3.5"/>
      <rect x="286" y="304" width="5" height="3.5"/>
      <rect x="256" y="318" width="5" height="3.5"/>
      <rect x="266" y="318" width="5" height="3.5"/>
      <rect x="276" y="318" width="5" height="3.5"/>
      <rect x="286" y="318" width="5" height="3.5"/>
      <rect x="256" y="332" width="5" height="3.5"/>
      <rect x="266" y="332" width="5" height="3.5"/>
      <rect x="276" y="332" width="5" height="3.5"/>
      <rect x="286" y="332" width="5" height="3.5"/>
    </g>

    <!-- Stacked Shipping Containers -->
    <g>
      <rect x="310" y="284" width="21" height="19" fill="#3a809c"/>
      <rect x="331" y="284" width="16" height="19" fill="#4f5482"/>
      <rect x="296" y="303" width="21" height="19" fill="#9eaab8"/>
      <rect x="317" y="303" width="15" height="19" fill="#d4a548"/>
      <rect x="332" y="303" width="15" height="19" fill="#c75449"/>
      <rect x="347" y="303" width="17" height="19" fill="#4f5482"/>
      <rect x="364" y="303" width="18" height="19" fill="#b4beca"/>
      <rect x="406" y="304" width="44" height="18" fill="#3a809c"/>
      <rect x="450" y="304" width="18" height="18" fill="#4f5482"/>
      <rect x="285" y="322" width="27" height="19" fill="#d4a548"/>
      <rect x="312" y="322" width="38" height="19" fill="#3a809c"/>
      <rect x="350" y="322" width="15" height="19" fill="#4f5482"/>
      <rect x="365" y="322" width="15" height="19" fill="#d4a548"/>
      <rect x="380" y="322" width="15" height="19" fill="#c75449"/>
      <rect x="410" y="322" width="44" height="19" fill="#9da9b7"/>
      <rect x="454" y="322" width="23" height="19" fill="#b3bdc9"/>
      <rect x="491" y="319" width="44" height="22" fill="#3a809c"/>
      <rect x="535" y="319" width="18" height="22" fill="#4f5482"/>
      <rect x="206" y="341" width="48" height="18" fill="#d4a548"/>
      <rect x="254" y="341" width="20" height="18" fill="#c75449"/>
      <rect x="274" y="341" width="22" height="18" fill="#4f5482"/>
      <rect x="296" y="341" width="36" height="18" fill="#a2aebc"/>
      <rect x="332" y="341" width="16" height="18" fill="#c75449"/>
      <rect x="348" y="341" width="18" height="18" fill="#d4a548"/>
      <rect x="366" y="341" width="17" height="18" fill="#4f5482"/>
      <rect x="383" y="341" width="17" height="18" fill="#9da9b7"/>
      <rect x="400" y="341" width="40" height="18" fill="#3a809c"/>
      <rect x="440" y="341" width="14" height="18" fill="#4f5482"/>
      <rect x="454" y="341" width="24" height="18" fill="#d4a548"/>
    </g>
    <g fill="url(#ribs)" pointer-events="none">
      <rect x="310" y="284" width="37" height="19"/>
      <rect x="296" y="303" width="86" height="19"/>
      <rect x="406" y="304" width="62" height="18"/>
      <rect x="285" y="322" width="110" height="19"/>
      <rect x="410" y="322" width="67" height="19"/>
      <rect x="491" y="319" width="62" height="22"/>
      <rect x="206" y="341" width="272" height="18"/>
    </g>

    <!-- Bow Mast -->
    <g stroke="#312e43" stroke-width="1.6" fill="none">
      <line x1="564" y1="298" x2="564" y2="338"/>
      <line x1="559" y1="301" x2="569" y2="301"/>
      <line x1="564" y1="310" x2="548" y2="338"/>
      <line x1="564" y1="310" x2="580" y2="338"/>
    </g>

    <!-- Main Hull (dips slightly into translucent waterline) -->
    <polygon points="189,357 475,357 488,336 612,336 574,390 194,390" fill="#312e43"/>
    <path d="M 194,390 L 574,390 L 566,406 C 556,410 544,410 532,406 C 520,402 508,410 494,410 C 480,410 468,404 456,407 C 444,410 432,410 420,406 C 408,402 396,410 382,410 C 368,410 356,404 344,407 C 332,410 320,410 308,406 C 296,402 284,410 270,410 C 256,410 244,404 232,407 C 220,410 206,410 198,407 Z" fill="#c44b42"/>
  </g>

  <!-- 10. TUGBOAT WITH FISHERMAN (Right of Main Ship on Waterline) -->
  <g transform="translate(668,395) scale(1.12)">
    <g class="tugboat">
      <!-- Mast & Fluttering Flag -->
      <line x1="-22" y1="-34" x2="-22" y2="-21" stroke="#312e43" stroke-width="1.8"/>
      <path d="M -21,-33 Q -13,-35 -6,-31 Q -13,-28 -21,-29 Z" fill="#e5b343" class="flag-flutter"/>
      <!-- Funnel & Cabin -->
      <rect x="-29" y="-31" width="5" height="10" fill="#4f5482"/>
      <rect x="-40" y="-22" width="22" height="20" fill="#e6ebf2"/>
      <rect x="-38" y="-19" width="14" height="5" fill="#312e43"/>
      <rect x="-40" y="-9" width="22" height="7" fill="#c75449"/>

      <!-- FISHERMAN standing on bow deck -->
      <g id="fisherman">
        <!-- Legs & Boots -->
        <rect x="9" y="-14" width="4.5" height="12" rx="1.5" fill="#26344a"/>
        <rect x="15" y="-14" width="4.5" height="12" rx="1.5" fill="#2f415c"/>
        <!-- Torso (Warm Jacket / Shirt) -->
        <path d="M 8,-28 C 8,-31 20,-31 20,-28 L 21,-13 L 8,-13 Z" fill="#e06246"/>
        <!-- Life Vest / Collar detail -->
        <rect x="11" y="-29" width="7" height="14" rx="1.5" fill="#f0b343" opacity="0.9"/>
        <!-- Arms holding the fishing rod -->
        <path d="M 17,-26 L 26,-24 L 25,-20 L 15,-22 Z" fill="#e06246"/>
        <circle cx="26" cy="-22.5" r="2.2" fill="#f3c299"/>
        <!-- Head -->
        <circle cx="15" cy="-35" r="5.2" fill="#f3c299"/>
        <!-- Eye & subtle beard/smile -->
        <circle cx="17.4" cy="-35.6" r="0.8" fill="#232938"/>
        <!-- Wide-brim Fisherman Hat -->
        <path d="M 7,-38 C 11,-40 19,-40 24,-37.5 L 22,-36 C 17,-37.5 11,-37.5 8,-36.5 Z" fill="#d99a36"/>
        <path d="M 10,-38.5 C 11,-44 19,-44 20.5,-38 Z" fill="#ebb64d"/>
        <rect x="10.5" y="-39.4" width="9.5" height="1.6" fill="#313954"/>

        <!-- Fishing Rod, Reel & Line dropping into underwater scene -->
        <g class="fishing-rod">
          <!-- Rod handle & reel -->
          <line x1="19" y1="-19" x2="28" y2="-24" stroke="#4b3428" stroke-width="2.4" stroke-linecap="round"/>
          <circle cx="27" cy="-21.5" r="2.3" fill="#9aa6b5" stroke="#313954" stroke-width="0.9"/>
          <!-- Curved flexible fishing rod -->
          <path d="M 27,-23.5 Q 48,-44 73,-55" fill="none" stroke="#3a4359" stroke-width="1.8" stroke-linecap="round"/>
          <!-- Fishing line from rod tip down through waterline into deep ocean -->
          <g class="underwater-line">
            <path d="M 73,-55 L 73,4 Q 75,62 70,136" fill="none" stroke="#e6f9ff" stroke-width="1.1" stroke-dasharray="none" opacity="0.88"/>
            <!-- Red & White Bobber on the waterline -->
            <g transform="translate(73,1)">
              <circle cx="0" cy="0" r="3.6" fill="#ffffff"/>
              <path d="M -3.6,0 A 3.6,3.6 0 0 1 3.6,0 Z" fill="#e84c3d"/>
              <line x1="0" y1="-3.6" x2="0" y2="-6.5" stroke="#e84c3d" stroke-width="1.1"/>
            </g>
            <!-- Underwater J-Hook & small coral bait -->
            <g transform="translate(70,136)">
              <path d="M 0,0 L 0,8 C 0,12 -5,12 -5,8.5 L -4,7" fill="none" stroke="#dceef7" stroke-width="1.4" stroke-linecap="round"/>
              <circle cx="-2.5" cy="9" r="2.4" fill="#f58769"/>
            </g>
          </g>
        </g>
      </g>

      <!-- Small Tackle Bucket on deck -->
      <rect x="-9" y="-10" width="10" height="8" rx="1" fill="#d9a546"/>
      <rect x="-10" y="-11" width="12" height="2" fill="#b8822a"/>

      <!-- Yellow Trim & Dark Hull -->
      <polygon points="-48,-2 45,-2 42,1 -46,1" fill="#e5b343"/>
      <path d="M -46,1 L 42,1 C 37,6 28,9 14,7 C 0,5 -14,9 -28,8 C -37,7 -43,5 -46,1 Z" fill="#312e43"/>
    </g>
  </g>

  <!-- 11. CRANE BARGE (Right side on Waterline) -->
  <g transform="translate(808,395) scale(0.8)">
    <g class="crane-barge">
      <g class="barge-crane-arm">
        <line x1="136" y1="-4" x2="88" y2="-75" stroke="#313954" stroke-width="2.6"/>
        <line x1="143" y1="-7" x2="94" y2="-78" stroke="#313954" stroke-width="2.6"/>
        <polyline points="136,-4 132,-18 124,-19 122,-32 114,-33 112,-46 104,-47 102,-60 94,-61 91,-76" fill="none" stroke="#313954" stroke-width="1.5"/>
        <polyline points="143,-7 128,-14 132,-22 118,-28 122,-36 108,-42 112,-50 98,-56 102,-64 88,-75" fill="none" stroke="#313954" stroke-width="1.4"/>
        <line x1="90" y1="-76" x2="90" y2="-32" stroke="#4f5482" stroke-width="1.2"/>
        <path d="M 90,-76 L 90,-83 L 80,-80 Z" fill="#e5b343" class="flag-flutter"/>
      </g>
      <g>
        <rect x="48" y="-35" width="44" height="17" fill="#d9a546"/>
        <rect x="92" y="-35" width="12" height="17" fill="#c75449"/>
        <rect x="46" y="-18" width="54" height="18" fill="#3a809c"/>
        <rect x="100" y="-18" width="21" height="18" fill="#c75449"/>
        <rect x="48" y="-35" width="56" height="17" fill="url(#ribs)"/>
        <rect x="46" y="-18" width="75" height="18" fill="url(#ribs)"/>
      </g>
      <rect x="6" y="-16" width="35" height="17" fill="#dfe4ec"/>
      <rect x="16" y="-34" width="25" height="18" fill="#e7ebf2"/>
      <rect x="20" y="-30" width="18" height="4" fill="#36394c"/>
      <rect x="20" y="-22" width="18" height="4" fill="#36394c"/>
      <path d="M 0,-2 L 180,-2 C 180,12 170,21 150,21 C 134,21 122,17 106,19 C 90,21 74,16 58,19 C 42,22 24,20 12,17 C 4,15 0,7 0,-2 Z" fill="#52538a"/>
      <g fill="none" stroke="#c86752" stroke-width="3.6">
        <circle cx="18" cy="2" r="4.8"/>
        <circle cx="37" cy="2" r="4.8"/>
        <circle cx="57" cy="2" r="4.8"/>
        <circle cx="121" cy="2" r="4.8"/>
        <circle cx="141" cy="2" r="4.8"/>
        <circle cx="161" cy="2" r="4.8"/>
        <circle cx="177" cy="0" r="4.2"/>
      </g>
    </g>
  </g>

  <!-- 12. NAVIGATION BUOYS ON WATERLINE -->
  <g transform="translate(152,396) scale(0.84)"><g class="buoy-1"><use href="#buoy-shape"/></g></g>
  <g transform="translate(600,396) scale(0.72)"><g class="buoy-2"><use href="#buoy-shape"/></g></g>
  <g transform="translate(968,396) scale(0.8)"><g class="buoy-3"><use href="#buoy-shape"/></g></g>

  <!-- 13. TRANSLUCENT UNDULATING WATERLINE SURFACE (Over-Under Divider) -->
  <g pointer-events="none">
    <!-- Soft back water crest -->
    <path class="surface-wave-back" d="M -40,394 C 40,384 120,400 200,392 C 280,384 360,400 440,392 C 520,384 600,400 680,392 C 760,384 840,400 920,392 C 980,386 1020,394 1064,394 L 1064,412 L -40,412 Z" fill="url(#surfaceGrad)" opacity="0.65"/>
    <!-- Foreground glossy surface ribbon & foam meniscus -->
    <path class="surface-wave-front" d="M -40,398 C 35,406 110,390 190,398 C 270,406 350,390 430,398 C 510,406 590,390 670,398 C 750,406 830,390 910,398 C 970,404 1020,394 1064,398 L 1064,408 C 1015,404 965,413 905,407 C 825,399 745,415 665,407 C 585,399 505,415 425,407 C 345,399 265,415 185,407 C 105,399 30,415 -40,407 Z" fill="#c7f5fc" opacity="0.58"/>
    <path class="surface-wave-front" d="M -40,398 C 35,406 110,390 190,398 C 270,406 350,390 430,398 C 510,406 590,390 670,398 C 750,406 830,390 910,398 C 970,404 1020,394 1064,398" fill="none" stroke="#f0fdff" stroke-width="2.4" opacity="0.88"/>
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

