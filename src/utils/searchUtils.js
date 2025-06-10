// src/utils/searchUtils.js
// Utilidades para manejo de búsqueda contextual

export function getCurrentVersion() {
    const path = window.location.pathname;
    if (path.includes('/pro6/')) return 'pro6';
    if (path.includes('/pro7/')) return 'pro7';
    if (path.includes('/prox/')) return 'prox';
    if (path.includes('/chatbuho/')) return 'chatbuho';
    if (path.includes('/qrbuho/')) return 'qrbuho';
    return 'sistema';
  }
  
  export function getVersionFilter(version) {
    if (!version || version === 'sistema') return null;
    return `version:${version}`;
  }
  
  // Debug: mostrar en consola la versión actual
  if (typeof window !== 'undefined') {
    console.log('Current version:', getCurrentVersion());
  }