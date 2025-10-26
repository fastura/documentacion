// Script para enlace API en navbar - Solo Pro7
console.log('🚀 API Navbar Script LOADED');

(function() {
  'use strict';

  function addApiLink() {
    console.log('🔨 Intentando agregar enlace API');
    
    // Verificar si estamos en Pro7
    const path = window.location.pathname;
    const isPro7 = path.includes('/Pro7/') || path.startsWith('/Pro7');
    
    console.log('📍 Path:', path);
    console.log('✅ Es Pro7:', isPro7);
    
    if (!isPro7) {
      console.log('❌ No es Pro7, saliendo');
      const existingLink = document.getElementById('api-navbar-link');
      if (existingLink) {
        existingLink.remove();
      }
      return;
    }
    
    // Buscar navbar
    const navbar = document.querySelector('.navbar__items');
    if (!navbar) {
      console.log('❌ No se encontró navbar');
      return;
    }
    
    // Verificar si ya existe
    if (document.getElementById('api-navbar-link')) {
      console.log('ℹ️ El enlace ya existe');
      return;
    }
    
    console.log('✅ Creando enlace API');
    
    // Crear enlace
    const apiLink = document.createElement('a');
    apiLink.id = 'api-navbar-link';
    apiLink.className = 'navbar__item navbar__link navbar__api-link';
    apiLink.href = '/Pro7/Devs/api';
    apiLink.textContent = 'API';
    apiLink.style.cssText = `
      display: inline-block !important;
      margin: 0 15px;
      padding: 4px 20px;
      border: 1px solid var(--ifm-toc-border-color);
      border-radius: 20px;
      background-color: var(--ifm-color-primary);
      color: white !important;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;
    `;
    
    // Agregar hover effect
    apiLink.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'var(--ifm-color-primary-dark)';
      this.style.transform = 'translateY(-1px)';
      this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    });
    
    apiLink.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'var(--ifm-color-primary)';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
    
    // Insertar en el navbar
    const versionDropdown = document.querySelector('.navbar__item.dropdown');
    if (versionDropdown) {
      versionDropdown.parentNode.insertBefore(apiLink, versionDropdown.nextSibling);
      console.log('✅ Enlace insertado después del dropdown');
    } else {
      navbar.appendChild(apiLink);
      console.log('✅ Enlace insertado al final del navbar');
    }
  }
  
  // Ejecutar múltiples veces
  function runMultipleTimes() {
    const delays = [0, 100, 300, 500, 1000, 2000];
    delays.forEach(delay => {
      setTimeout(addApiLink, delay);
    });
  }
  
  // Ejecutar al cargar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runMultipleTimes);
  } else {
    runMultipleTimes();
  }
  
  // Observar cambios de URL
  let currentPath = window.location.pathname;
  setInterval(() => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname;
      console.log('🔄 URL cambió:', currentPath);
      setTimeout(addApiLink, 100);
    }
  }, 500);
  
})();

console.log('✅ Script API Navbar configurado');