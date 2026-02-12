module.exports = function (context, options) {
  return {
    name: 'version-navbar-plugin',
    
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              console.log('🚀 Version Navbar Plugin cargado');
              
              (function() {
                'use strict';

                function createLink(id, text, url, color, hoverColor) {
                  if (document.getElementById(id)) {
                    return document.getElementById(id);
                  }
                  
                  console.log(\`✅ Creando enlace \${text}\`);
                  
                  const link = document.createElement('a');
                  link.id = id;
                  link.className = 'navbar__item navbar__link';
                  link.href = url;
                  link.textContent = text;
                  link.style.cssText = \`
                    display: inline-block !important;
                    margin: 0 8px;
                    padding: 4px 16px;
                    border: 1px solid var(--ifm-toc-border-color);
                    border-radius: 20px;
                    background-color: \${color};
                    color: white !important;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    font-size: 0.9rem;
                  \`;
                  
                  link.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = hoverColor;
                    this.style.transform = 'translateY(-1px)';
                    this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                  });
                  
                  link.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = color;
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                  });
                  
                  return link;
                }

                // Función para detectar la versión actual
                function getCurrentVersion(path) {
                  if (path.includes('/Pro7/') || path.startsWith('/Pro7')) {
                    return 'Pro7';
                  } else if (path.includes('/ProX/') || path.startsWith('/ProX')) {
                    return 'ProX';
                  } else if (path.includes('/QrBuho/') || path.startsWith('/QrBuho')) {
                    return 'QrBuho';
                  }
                  return null;
                }

                function addVersionLinks() {
                  console.log('🔨 Ejecutando addVersionLinks');
                  
                  const path = window.location.pathname;
                  const activeVersion = getCurrentVersion(path);
                  
                  console.log('📍 Path:', path);
                  console.log('✅ Versión activa:', activeVersion);
                  
                  // Remover enlaces si no estamos en una versión compatible
                  if (!activeVersion) {
                    ['api-navbar-link', 'mozo-navbar-link', 'vendeya-navbar-link', 'app-navbar-link', 'pro8-navbar-link'].forEach(linkId => {
                      const link = document.getElementById(linkId);
                      if (link) {
                        link.remove();
                        console.log(\`🗑️ Enlace \${linkId} removido\`);
                      }
                    });
                    return;
                  }
                  
                  const navbar = document.querySelector('.navbar__items');
                  if (!navbar) {
                    console.log('❌ No se encontró navbar');
                    return;
                  }
                  
                  const versionDropdown = document.querySelector('.navbar__item.dropdown');
                  
                  // Definir qué enlaces mostrar según la versión
                  let linksToCreate = [];
                  
                  if (activeVersion === 'QrBuho') {
                    linksToCreate = [
                      {
                        id: 'api-navbar-link',
                        text: 'API',
                        url: '/QrBuho/Api/api-introduccion',
                        color: '#20c997',
                        hoverColor: '#17a2b8'
                      },
                      {
                        id: 'pro8-navbar-link',
                        text: 'Pro 8',
                        url: 'https://manual.pro8.uio.la/',
                        color: '#dc3545',
                        hoverColor: '#c82333'
                      }
                    ];
                  } else if (activeVersion === 'Pro7') {
                    linksToCreate = [
                      {
                        id: 'api-navbar-link',
                        text: 'API',
                        url: '/Pro7/Devs/api/introduccion',
                        color: 'var(--ifm-color-primary)',
                        hoverColor: 'var(--ifm-color-primary-dark)'
                      },
                      {
                        id: 'mozo-navbar-link',
                        text: 'Mozo',
                        url: '/Pro7/Mozo.pe/introduccion',
                        color: '#28a745',
                        hoverColor: '#218838'
                      },
                      {
                        id: 'vendeya-navbar-link',
                        text: 'VendeYA',
                        url: '/Pro7/vendeya/introduccion',
                        color: '#6f42c1',
                        hoverColor: '#5a32a3'
                      },
                      {
                        id: 'app-navbar-link',
                        text: 'App',
                        url: '/Pro7/app-para-facturacion/introduccion',
                        color: '#fd7e14',
                        hoverColor: '#e8650e'
                      },
                      {
                        id: 'pro8-navbar-link',
                        text: 'Pro 8',
                        url: 'https://manual.pro8.uio.la/',
                        color: '#dc3545',
                        hoverColor: '#c82333'
                      }
                    ];
                  } else if (activeVersion === 'ProX') {
                    linksToCreate = [
                      {
                        id: 'api-navbar-link',
                        text: 'API',
                        url: '/ProX/prox-devs/api/introduccion',
                        color: 'var(--ifm-color-primary)',
                        hoverColor: 'var(--ifm-color-primary-dark)'
                      },
                      {
                        id: 'mozo-navbar-link',
                        text: 'Mozo',
                        url: '/ProX/Mozo.pe/introduccion',
                        color: '#28a745',
                        hoverColor: '#218838'
                      },
                      {
                        id: 'vendeya-navbar-link',
                        text: 'VendeYA',
                        url: '/ProX/vendeya/introduccion',
                        color: '#6f42c1',
                        hoverColor: '#5a32a3'
                      },
                      {
                        id: 'app-navbar-link',
                        text: 'App',
                        url: '/ProX/app-para-facturacion/introduccion',
                        color: '#fd7e14',
                        hoverColor: '#e8650e'
                      },
                      {
                        id: 'pro8-navbar-link',
                        text: 'Pro 8',
                        url: 'https://manual.pro8.uio.la/',
                        color: '#dc3545',
                        hoverColor: '#c82333'
                      }
                    ];
                  }
                  
                  // Crear e insertar enlaces
                  let lastInsertedElement = null;
                  
                  linksToCreate.forEach((linkConfig, index) => {
                    if (!document.getElementById(linkConfig.id)) {
                      const link = createLink(
                        linkConfig.id,
                        linkConfig.text,
                        linkConfig.url,
                        linkConfig.color,
                        linkConfig.hoverColor
                      );
                      
                      if (index === 0) {
                        if (versionDropdown) {
                          versionDropdown.parentNode.insertBefore(link, versionDropdown.nextSibling);
                          console.log(\`✅ Enlace \${linkConfig.text} insertado después del dropdown\`);
                        } else {
                          navbar.appendChild(link);
                          console.log(\`✅ Enlace \${linkConfig.text} insertado al final\`);
                        }
                      } else {
                        if (lastInsertedElement) {
                          lastInsertedElement.parentNode.insertBefore(link, lastInsertedElement.nextSibling);
                          console.log(\`✅ Enlace \${linkConfig.text} insertado después del anterior\`);
                        } else {
                          navbar.appendChild(link);
                          console.log(\`✅ Enlace \${linkConfig.text} insertado al final\`);
                        }
                      }
                      
                      lastInsertedElement = link;
                    }
                  });
                }
                
                function runMultipleTimes() {
                  const delays = [0, 100, 300, 500, 1000, 2000];
                  delays.forEach(delay => {
                    setTimeout(addVersionLinks, delay);
                  });
                }
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', runMultipleTimes);
                } else {
                  runMultipleTimes();
                }
                
                // Monitoreo mejorado con detección de cambio de versión
                let currentPath = window.location.pathname;
                let currentVersion = getCurrentVersion(currentPath);
                
                setInterval(() => {
                  const newPath = window.location.pathname;
                  const newVersion = getCurrentVersion(newPath);
                  
                  if (newPath !== currentPath) {
                    console.log('🔄 URL cambió:', newPath);
                    
                    // Si cambió la versión, forzar recarga completa
                    if (newVersion !== currentVersion && newVersion !== null && currentVersion !== null) {
                      console.log(\`🔄 Cambio de versión detectado: \${currentVersion} → \${newVersion}\`);
                      console.log('🔄 Forzando recarga de página...');
                      window.location.reload();
                      return;
                    }
                    
                    currentPath = newPath;
                    currentVersion = newVersion;
                    setTimeout(addVersionLinks, 100);
                  }
                }, 500);
                
                // Detectar clicks en el dropdown de versiones para forzar recarga
                document.addEventListener('click', function(e) {
                  const versionLink = e.target.closest('.navbar__item.dropdown a');
                  if (versionLink) {
                    const href = versionLink.getAttribute('href');
                    if (href) {
                      const targetVersion = getCurrentVersion(href);
                      if (targetVersion && targetVersion !== currentVersion) {
                        console.log(\`🔄 Click en versión detectado: \${currentVersion} → \${targetVersion}\`);
                        // Dejar que la navegación ocurra naturalmente, pero marcar para recarga
                        setTimeout(() => {
                          if (window.location.pathname.includes(targetVersion)) {
                            window.location.reload();
                          }
                        }, 100);
                      }
                    }
                  }
                }, true);
                
              })();
              
              console.log('✅ Version Navbar Plugin configurado');
            `,
          },
        ],
      };
    },
  };
};