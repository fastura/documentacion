// src/utils/searchUtils.js
// Utilidades para manejo de búsqueda contextual

function getCurrentVersion(path) {
    if (path.includes('Pro6')) return 'Pro6';
    if (path.includes('Pro7')) return 'Pro7';
    if (path.includes('ProX')) return 'ProX';
    if (path.includes('ChatBuho')) return 'ChatBuho';
    return 'Sistema';
  }
  
  export function getVersionFilter(path) {

    let version = getCurrentVersion(path);
    if (!version || version === 'sistema') return null;
    return `version:${version}`;
  }
  