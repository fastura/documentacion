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

                function addVersionLinks() {
                  console.log('🔨 Ejecutando addVersionLinks');
                  
                  const path = window.location.pathname;
                  const isPro7 = path.includes('/Pro7/') || path.startsWith('/Pro7');
                  const isProX = path.includes('/ProX/') || path.startsWith('/ProX');
                  const isQrBuho = path.includes('/QrBuho/') || path.startsWith('/QrBuho');
                  
                  console.log('📍 Path:', path);
                  console.log('✅ Es Pro7:', isPro7);
                  console.log('✅ Es ProX:', isProX);
                  console.log('✅ Es QrBuho:', isQrBuho);
                  
                  // Determinar versión activa
                  let activeVersion = null;
                  if (isPro7) {
                    activeVersion = 'Pro7';
                  } else if (isProX) {
                    activeVersion = 'ProX';
                  } else if (isQrBuho) {
                    activeVersion = 'QrBuho';
                  }
                  
                  // Remover enlaces si no estamos en una versión compatible
                  if (!activeVersion) {
                    ['api-navbar-link', 'mozo-navbar-link', 'vendeya-navbar-link', 'app-navbar-link'].forEach(linkId => {
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
                      }
                    ];
                  } else if (activeVersion === 'Pro7') {
                    // Pro7 tiene 4 enlaces
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
                      }
                    ];
                  } else if (activeVersion === 'ProX') {
                    // ProX tiene los mismos 4 enlaces pero con rutas de ProX
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
                        // Primer enlace después del dropdown de versión
                        if (versionDropdown) {
                          versionDropdown.parentNode.insertBefore(link, versionDropdown.nextSibling);
                          console.log(\`✅ Enlace \${linkConfig.text} insertado después del dropdown\`);
                        } else {
                          navbar.appendChild(link);
                          console.log(\`✅ Enlace \${linkConfig.text} insertado al final\`);
                        }
                      } else {
                        // Enlaces subsiguientes después del último insertado
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
                
                let currentPath = window.location.pathname;
                setInterval(() => {
                  if (window.location.pathname !== currentPath) {
                    currentPath = window.location.pathname;
                    console.log('🔄 URL cambió:', currentPath);
                    setTimeout(addVersionLinks, 100);
                  }
                }, 500);
                
              })();
              
              console.log('✅ Version Navbar Plugin configurado');
            `,
          },
        ],
      };
    },
  };
};
