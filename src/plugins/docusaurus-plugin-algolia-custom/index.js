// plugins/docusaurus-plugin-algolia-custom/index.js
module.exports = function (context, options) {
    return {
      name: 'docusaurus-plugin-algolia-custom',
      
      configureWebpack(config, isServer, utils) {
        if (isServer) return {};
        
        return {
          plugins: [
            new (class AlgoliaVersionPlugin {
              apply(compiler) {
                compiler.hooks.emit.tapAsync('AlgoliaVersionPlugin', (compilation, callback) => {
                  // Procesar archivos HTML para añadir metadatos de versión
                  Object.keys(compilation.assets).forEach(filename => {
                    if (filename.endsWith('.html')) {
                      const asset = compilation.assets[filename];
                      let html = asset.source();
                      
                      // Detectar versión desde la ruta del archivo
                      let version = 'sistema'; // versión por defecto
                      if (filename.includes('pro6/')) version = 'pro6';
                      else if (filename.includes('pro7/')) version = 'pro7';
                      else if (filename.includes('prox/')) version = 'prox';
                      else if (filename.includes('chatbuho/')) version = 'chatbuho';
                      else if (filename.includes('qrbuho/')) version = 'qrbuho';
                      
                      // Inyectar meta tag con versión
                      html = html.replace(
                        '<head>',
                        `<head>\n  <meta name="docsearch:version" content="${version}">\n  <meta name="docusaurus:version" content="${version}">`
                      );
                      
                      // Actualizar el asset
                      compilation.assets[filename] = {
                        source: () => html,
                        size: () => html.length
                      };
                    }
                  });
                  
                  callback();
                });
              }
            })()
          ]
        };
      },
  
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: 'script',
              innerHTML: `
                window.addEventListener('DOMContentLoaded', function() {
                  // Función para detectar versión desde URL
                  function getCurrentVersion() {
                    const path = window.location.pathname;
                    if (path.includes('/pro6/')) return 'pro6';
                    if (path.includes('/pro7/')) return 'pro7';
                    if (path.includes('/prox/')) return 'prox';
                    if (path.includes('/chatbuho/')) return 'chatbuho';
                    if (path.includes('/qrbuho/')) return 'qrbuho';
                    return 'sistema';
                  }
                  
                  // Añadir meta tag dinámico
                  const version = getCurrentVersion();
                  const metaTag = document.createElement('meta');
                  metaTag.name = 'docsearch:version';
                  metaTag.content = version;
                  document.head.appendChild(metaTag);
                });
              `
            }
          ]
        };
      }
    };
  };
  
  // plugins/docusaurus-plugin-algolia-custom/package.json
  // Crear este archivo también:
  /*
  {
    "name": "docusaurus-plugin-algolia-custom",
    "version": "1.0.0",
    "description": "Plugin personalizado para búsqueda contextual con Algolia",
    "main": "index.js",
    "peerDependencies": {
      "@docusaurus/core": "^3.0.0"
    }
  }
  */