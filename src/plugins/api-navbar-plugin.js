module.exports = function (context, options) {
  return {
    name: 'api-navbar-plugin',
    
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              console.log('🚀 API Navbar Plugin cargado');
              
              (function() {
                'use strict';

                function addApiLink() {
                  console.log('🔨 Ejecutando addApiLink');
                  
                  const path = window.location.pathname;
                  const isPro7 = path.includes('/Pro7/') || path.startsWith('/Pro7');
                  
                  console.log('📍 Path:', path);
                  console.log('✅ Es Pro7:', isPro7);
                  
                  if (!isPro7) {
                    const existingLink = document.getElementById('api-navbar-link');
                    if (existingLink) {
                      existingLink.remove();
                      console.log('🗑️ Enlace removido (no es Pro7)');
                    }
                    return;
                  }
                  
                  const navbar = document.querySelector('.navbar__items');
                  if (!navbar) {
                    console.log('❌ No se encontró navbar');
                    return;
                  }
                  
                  if (document.getElementById('api-navbar-link')) {
                    console.log('ℹ️ El enlace ya existe');
                    return;
                  }
                  
                  console.log('✅ Creando enlace API');
                  
                  const apiLink = document.createElement('a');
                  apiLink.id = 'api-navbar-link';
                  apiLink.className = 'navbar__item navbar__link navbar__api-link';
                  apiLink.href = '/Pro7/api';
                  apiLink.textContent = 'API';
                  apiLink.style.cssText = \`
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
                  \`;
                  
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
                  
                  const versionDropdown = document.querySelector('.navbar__item.dropdown');
                  if (versionDropdown) {
                    versionDropdown.parentNode.insertBefore(apiLink, versionDropdown.nextSibling);
                    console.log('✅ Enlace insertado después del dropdown');
                  } else {
                    navbar.appendChild(apiLink);
                    console.log('✅ Enlace insertado al final');
                  }
                }
                
                function runMultipleTimes() {
                  const delays = [0, 100, 300, 500, 1000, 2000];
                  delays.forEach(delay => {
                    setTimeout(addApiLink, delay);
                  });
                }
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', runMultipleTimes);
                } else {
                  runMultipleTimes();
                }
                
                let currentPath = window.location.pathname;
                setInterval(() => {
                  if (window.location.pathname !== currentPath) {
                    currentPath = window.location.pathname;
                    console.log('🔄 URL cambió:', currentPath);
                    setTimeout(addApiLink, 100);
                  }
                }, 500);
                
              })();
              
              console.log('✅ API Navbar Plugin configurado');
            `,
          },
        ],
      };
    },
  };
};
