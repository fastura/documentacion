import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Documentación Facturador electrónico',
  tagline: 'Guía Absoluta del Facturador Pro: Pro 6, Pro X y Pro 7 para Todos',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://manual.uio.la/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fastura', // Usually your GitHub org/user name.
  projectName: 'documentacion',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          includeCurrentVersion: false,
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fastura/documentacion/tree/main/',
            
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'plugin-image-zoom',

    /* Comentado el buscador anterior
    require.resolve('docusaurus-lunr-search'),
    */

    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "facturador", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          anulacion_boleta : {
            specPath: "apifacturador/AnulacionBoletas",
            outputDir: "docs/facturador/Anulacion-Boletas",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "anulacion-boletas",
            },
          },
          anulacion_facturas: {
            specPath: "apifacturador/AnulaciónFacturasNotas",
            outputDir: "docs/facturador/Anulacion-facturas",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "anulacion-facturas",
            },
          },
          generar_boleta: {
            specPath: "apifacturador/GenerarBoleta",
            outputDir: "docs/facturador/Generar-boleta",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-boleta",
            },
          },
          generar_cotización: {
            specPath: "apifacturador/GenerarCotizacion",
            outputDir: "docs/facturador/Generar-cotizacion",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-cotizacion",
            },
          },
          generar_factura: {
            specPath: "apifacturador/GenerarFactura",
            outputDir: "docs/facturador/Generar-factura",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-factura",
            },
          },
          generar_notas: {
            specPath: "apifacturador/GenerarNotas",
            outputDir: "docs/facturador/Generar-notas",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-notas",
            },
          },
          generar_resumenes: {
            specPath: "apifacturador/GenerarResúmenes",
            outputDir: "docs/facturador/Generar-resumenes",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-resumenes",
            },
          },
          guia_remision: {
            specPath: "apifacturador/GuiaDeRemision",
            outputDir: "docs/facturador/Guia-remision",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "guia-remision",
            },
          },
          inventario: {
            specPath: "apifacturador/Inventario",
            outputDir: "docs/facturador/inventario",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "inventario",
            },
          },
          productos: {
            specPath: "apifacturador/Productos",
            outputDir: "docs/facturador/productos",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "productos",
            },
          },
          retencion: {
            specPath: "apifacturador/Retencion",
            outputDir: "docs/facturador/retencion",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
          Clientes: {
            specPath: "apifacturador/Clientes",
            outputDir: "docs/facturador/clientes",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
          enviar_pdf: { 
            specPath: "apifacturador/Enviarpdf",  
            outputDir: "docs/facturador/Enviar-pdf",  
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
          enviar_mensaje: { 
            specPath: "apifacturador/Enviarmensaje",  
            outputDir: "docs/facturador/Enviar-mensaje",  
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
          enviar_multimedia: { 
            specPath: "apifacturador/Enviarmultimedia",  
            outputDir: "docs/facturador/Enviar-multimedia",  
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
        }
      },
    ]
  ],
  themes: [
    'docusaurus-theme-openapi-docs',
    ['@docusaurus/theme-search-algolia', {
      id: 'algolia-search'
    }]
    // Otros temas comentados
    /*[
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      /*({
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/', // Asegura que el buscador indexe correctamente
      }),
    ],*/
    
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo_buho.png',
    algolia: {
      // The application ID provided by Algolia
      appId: 'ZS76FDL76H',
      // Public API key
      apiKey: 'ffbc9009abea68c80e8952c51c45702a',
      indexName: 'manual-uio',
      // Optional: see doc section below
      
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },
      navbar: {
        title: 'Manual de uso',
        logo: {
          alt: 'Manual de uso de diversos sistemas',
          src: 'img/manual.svg',
      },
      items: [
        //{
        //  type: 'docSidebar',
        //  sidebarId: 'tutorialSidebar',
        //  position: 'left',
        //  label: 'Documentacion',
        //},
        {type: 'docsVersionDropdown', position: 'right'},
        //{
        //  href: 'https://github.com/facebook/docusaurus',
        //  label: 'GitHub',
        //  position: 'right',
        //},
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        // hideable: true, 
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
        //  title: 'Docs',
        //  items: [
        //    {
        //      label: 'Tutorial',
        //      to: '/docs/intro',
        //    },
        //  ],
        //},
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],*/
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'bash', 'yaml', 'nginx'],
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
    },
    scripts: [
      {
        src: 'https://static.buho.la/fastura/documentacion.js',
        async: true,
      },
      //{
      // Script to reload the page on version change
      //  src: '/js/reload-on-version-change.js',
      //  async: true,
      //},
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
