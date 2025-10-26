module.exports = function (context, options) {
  return {
    name: 'pro7-navbar-plugin',
    
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              console.log('🚀 Pro7 Navbar Plugin cargado');
              
              (function() {
                'use strict';

                function addPro7Links() {
                  console.log('🔨 Ejecutando addPro7Links');
                  
                  const path = window.location.pathname;
                  const isPro7 = path.includes('/Pro7/') || path.startsWith('/Pro7');
                  
                  console.log('📍 Path:', path);
                  console.log('✅ Es Pro7:', isPro7);
                  
                  if (!isPro7) {
                    const existingApiLink = document.getElementById('api-navbar-link');
                    const existingMozoLink = document.getElementById('mozo-navbar-link');
                    const existingVendeyaLink = document.getElementById('vendeya-navbar-link');
                    const existingAppLink = document.getElementById('app-navbar-link');
                    if (existingApiLink) {
                      existingApiLink.remove();
                      console.log('🗑️ Enlace API removido (no es Pro7)');
                    }
                    if (existingMozoLink) {
                      existingMozoLink.remove();
                      console.log('🗑️ Enlace Mozo removido (no es Pro7)');
                    }
                    if (existingVendeyaLink) {
                      existingVendeyaLink.remove();
                      console.log('🗑️ Enlace VendeYA removido (no es Pro7)');
                    }
                    if (existingAppLink) {
                      existingAppLink.remove();
                      console.log('🗑️ Enlace App removido (no es Pro7)');
                    }
                    return;
                  }
                  
                  const navbar = document.querySelector('.navbar__items');
                  if (!navbar) {
                    console.log('❌ No se encontró navbar');
                    return;
                  }
                  
                  // Crear enlace API
                  if (!document.getElementById('api-navbar-link')) {
                  console.log('✅ Creando enlace API');
                  
                  const apiLink = document.createElement('a');
                  apiLink.id = 'api-navbar-link';
                  apiLink.className = 'navbar__item navbar__link navbar__api-link';
                    apiLink.href = '/Pro7/Devs/api/introduccion';
                  apiLink.textContent = 'API';
                  apiLink.style.cssText = \`
                    display: inline-block !important;
                      margin: 0 8px;
                      padding: 4px 16px;
                    border: 1px solid var(--ifm-toc-border-color);
                    border-radius: 20px;
                    background-color: var(--ifm-color-primary);
                    color: white !important;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                      font-size: 0.9rem;
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
                      console.log('✅ Enlace API insertado después del dropdown');
                  } else {
                    navbar.appendChild(apiLink);
                      console.log('✅ Enlace API insertado al final');
                    }
                  }
                  
                  // Crear enlace Mozo
                  if (!document.getElementById('mozo-navbar-link')) {
                    console.log('✅ Creando enlace Mozo');
                    
                    const mozoLink = document.createElement('a');
                    mozoLink.id = 'mozo-navbar-link';
                    mozoLink.className = 'navbar__item navbar__link navbar__mozo-link';
                    mozoLink.href = '/Pro7/Mozo.pe/introduccion';
                    mozoLink.textContent = 'Mozo';
                    mozoLink.style.cssText = \`
                      display: inline-block !important;
                      margin: 0 8px;
                      padding: 4px 16px;
                      border: 1px solid var(--ifm-toc-border-color);
                      border-radius: 20px;
                      background-color: #28a745;
                      color: white !important;
                      text-decoration: none;
                      font-weight: 500;
                      transition: all 0.2s ease;
                      font-size: 0.9rem;
                    \`;
                    
                    mozoLink.addEventListener('mouseenter', function() {
                      this.style.backgroundColor = '#218838';
                      this.style.transform = 'translateY(-1px)';
                      this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                    });
                    
                    mozoLink.addEventListener('mouseleave', function() {
                      this.style.backgroundColor = '#28a745';
                      this.style.transform = 'translateY(0)';
                      this.style.boxShadow = 'none';
                    });
                    
                    const apiLink = document.getElementById('api-navbar-link');
                    if (apiLink) {
                      apiLink.parentNode.insertBefore(mozoLink, apiLink.nextSibling);
                      console.log('✅ Enlace Mozo insertado después del API');
                    } else {
                      const versionDropdown = document.querySelector('.navbar__item.dropdown');
                      if (versionDropdown) {
                        versionDropdown.parentNode.insertBefore(mozoLink, versionDropdown.nextSibling);
                        console.log('✅ Enlace Mozo insertado después del dropdown');
                      } else {
                        navbar.appendChild(mozoLink);
                        console.log('✅ Enlace Mozo insertado al final');
                      }
                    }
                  }
                  
                  // Crear enlace VendeYA
                  if (!document.getElementById('vendeya-navbar-link')) {
                    console.log('✅ Creando enlace VendeYA');
                    
                    const vendeyaLink = document.createElement('a');
                    vendeyaLink.id = 'vendeya-navbar-link';
                    vendeyaLink.className = 'navbar__item navbar__link navbar__vendeya-link';
                    vendeyaLink.href = '/Pro7/vendeya/introduccion';
                    vendeyaLink.textContent = 'VendeYA';
                    vendeyaLink.style.cssText = \`
                      display: inline-block !important;
                      margin: 0 8px;
                      padding: 4px 16px;
                      border: 1px solid var(--ifm-toc-border-color);
                      border-radius: 20px;
                      background-color: #6f42c1;
                      color: white !important;
                      text-decoration: none;
                      font-weight: 500;
                      transition: all 0.2s ease;
                      font-size: 0.9rem;
                    \`;
                    
                    vendeyaLink.addEventListener('mouseenter', function() {
                      this.style.backgroundColor = '#5a32a3';
                      this.style.transform = 'translateY(-1px)';
                      this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                    });
                    
                    vendeyaLink.addEventListener('mouseleave', function() {
                      this.style.backgroundColor = '#6f42c1';
                      this.style.transform = 'translateY(0)';
                      this.style.boxShadow = 'none';
                    });
                    
                    const mozoLink = document.getElementById('mozo-navbar-link');
                    if (mozoLink) {
                      mozoLink.parentNode.insertBefore(vendeyaLink, mozoLink.nextSibling);
                      console.log('✅ Enlace VendeYA insertado después del Mozo');
                    } else {
                      const apiLink = document.getElementById('api-navbar-link');
                      if (apiLink) {
                        apiLink.parentNode.insertBefore(vendeyaLink, apiLink.nextSibling);
                        console.log('✅ Enlace VendeYA insertado después del API');
                      } else {
                        const versionDropdown = document.querySelector('.navbar__item.dropdown');
                        if (versionDropdown) {
                          versionDropdown.parentNode.insertBefore(vendeyaLink, versionDropdown.nextSibling);
                          console.log('✅ Enlace VendeYA insertado después del dropdown');
                        } else {
                          navbar.appendChild(vendeyaLink);
                          console.log('✅ Enlace VendeYA insertado al final');
                        }
                      }
                    }
                  }
                  
                  // Crear enlace App para Facturación
                  if (!document.getElementById('app-navbar-link')) {
                    console.log('✅ Creando enlace App');
                    
                    const appLink = document.createElement('a');
                    appLink.id = 'app-navbar-link';
                    appLink.className = 'navbar__item navbar__link navbar__app-link';
                    appLink.href = '/Pro7/app-para-facturacion/introduccion';
                    appLink.textContent = 'App';
                    appLink.style.cssText = \`
                      display: inline-block !important;
                      margin: 0 8px;
                      padding: 4px 16px;
                      border: 1px solid var(--ifm-toc-border-color);
                      border-radius: 20px;
                      background-color: #fd7e14;
                      color: white !important;
                      text-decoration: none;
                      font-weight: 500;
                      transition: all 0.2s ease;
                      font-size: 0.9rem;
                    \`;
                    
                    appLink.addEventListener('mouseenter', function() {
                      this.style.backgroundColor = '#e8650e';
                      this.style.transform = 'translateY(-1px)';
                      this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                    });
                    
                    appLink.addEventListener('mouseleave', function() {
                      this.style.backgroundColor = '#fd7e14';
                      this.style.transform = 'translateY(0)';
                      this.style.boxShadow = 'none';
                    });
                    
                    const vendeyaLink = document.getElementById('vendeya-navbar-link');
                    if (vendeyaLink) {
                      vendeyaLink.parentNode.insertBefore(appLink, vendeyaLink.nextSibling);
                      console.log('✅ Enlace App insertado después del VendeYA');
                    } else {
                      const mozoLink = document.getElementById('mozo-navbar-link');
                      if (mozoLink) {
                        mozoLink.parentNode.insertBefore(appLink, mozoLink.nextSibling);
                        console.log('✅ Enlace App insertado después del Mozo');
                      } else {
                        const apiLink = document.getElementById('api-navbar-link');
                        if (apiLink) {
                          apiLink.parentNode.insertBefore(appLink, apiLink.nextSibling);
                          console.log('✅ Enlace App insertado después del API');
                        } else {
                          const versionDropdown = document.querySelector('.navbar__item.dropdown');
                          if (versionDropdown) {
                            versionDropdown.parentNode.insertBefore(appLink, versionDropdown.nextSibling);
                            console.log('✅ Enlace App insertado después del dropdown');
                          } else {
                            navbar.appendChild(appLink);
                            console.log('✅ Enlace App insertado al final');
                          }
                        }
                      }
                    }
                  }
                }
                
                function runMultipleTimes() {
                  const delays = [0, 100, 300, 500, 1000, 2000];
                  delays.forEach(delay => {
                    setTimeout(addPro7Links, delay);
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
                    setTimeout(addPro7Links, 100);
                  }
                }, 500);
                
              })();
              
              console.log('✅ Pro7 Navbar Plugin configurado');
            `,
          },
        ],
      };
    },
  };
};
