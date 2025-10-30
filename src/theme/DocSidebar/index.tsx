import React, {type ReactNode} from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type DocSidebarType from '@theme/DocSidebar';
import type {WrapperProps} from '@docusaurus/types';
import { 
  Boxes, 
  Smartphone, 
  DownloadCloud, 
  Users, 
  BookOpen, 
  Code, 
  Star, 
  Package, 
  Folder, 
  Settings, 
  Terminal, 
  PenTool, 
  Plug, 
  Database,
  Utensils,
  Coffee,
  ClipboardPen,
  UserRoundPlus,
  LayoutDashboard,
  Sparkles,
  MonitorDown,
  LayoutGrid ,
  ShoppingCart,
  KeyRound ,
  Route  ,
  SquaresExclude,
  CreditCard,
  BadgeDollarSign,
  Building,
  BedDouble,
  Tags,
  ConciergeBell,
  UtensilsCrossed ,
  MessageCircleQuestion,
  CircleX,
  Newspaper,
  Monitor,
  ShieldCheck,
  Server,
  RotateCw 
} from 'lucide-react';

function getIconForItem(item) {
  if (item.label && typeof item.label === 'string') {
    // Existing icons
    if (item.label.includes('Modulos')) return <Boxes size={18} />;
    if (item.label.includes('App Android')) return <Smartphone size={18} />;
    if (item.label.includes('Actualizaciones')) return <DownloadCloud size={18} />;
    if (item.label.includes('Reseller')) return <Users size={18} />;
    if (item.label.includes('Guias adicionales')) return <BookOpen size={18} />;
    if (item.label.includes('Devs')) return <Code size={18} />;
    
    // New icons for remaining sections
    if (item.label.includes('Esenciales')) return <Star size={18} />;
    if (item.label.includes('Complementarios')) return <Package size={18} />;
    if (item.label.includes('Rubro')) return <Folder size={18} />;
    if (item.label.includes('Específicos')) return <PenTool size={18} />;
    if (item.label.includes('Configuración')) return <Settings size={18} />;
    if (item.label.includes('API')) return <Terminal size={18} />;
    if (item.label.includes('Custom')) return <PenTool size={18} />;
    if (item.label.includes('Devops')) return <Terminal size={18} />;
    if (item.label.includes('Manual de Usuario')) return <BookOpen size={18} />;
    if (item.label.includes('Plugins')) return <Plug size={18} />;
    if (item.label.includes('Mozo.pe')) return <Utensils size={18} />;
    if (item.label.includes('Plan')) return <ClipboardPen  size={18} />;
    if (item.label.includes('Instalación en Windows')) return <Package  size={18} />;
    if (item.label.includes('Crear Cuenta - Cliente')) return <UserRoundPlus  size={18} />;
    if (item.label.includes('Multi Empresa')) return <Users  size={18} />; 
    if (item.label.includes('Dashboard')) return <LayoutDashboard  size={18} />;
    if (item.label.includes('Introducción')) return <Sparkles  size={18} />;
    if (item.label.includes('Instalaciones')) return <MonitorDown  size={18} />;
    if (item.label.includes('Panel de administración')) return <LayoutGrid  size={18} />;
    if (item.label.includes('VendeYa')) return <ShoppingCart  size={18} />;
    if (item.label.includes('Iniciar Sesión')) return <KeyRound  size={18} />;
    if (item.label.includes('Navegación')) return <SquaresExclude  size={18} />;
    if (item.label.includes('Flujo de Venta')) return <CreditCard  size={18} />;
    if (item.label.includes('Sistema de Facturación Pro 7')) return <Package  size={18} />;
    if (item.label.includes('Sistema de Facturación Pro X')) return <Package  size={18} />;

    // Modulo Hotel 
    if (item.label.includes('Recepción')) return <ConciergeBell    size={18} />;
    if (item.label.includes('Tarifas')) return <BadgeDollarSign   size={18} />;
    if (item.label.includes('Pisos')) return <Building   size={18} />;
    if (item.label.includes('Categorías')) return <Tags  size={18} />;
    if (item.label.includes('Habitaciones')) return <BedDouble   size={18} />;

    // Mozo.APP

    if (item.label.includes('Mesas')) return <UtensilsCrossed size={18} />;
    if (item.label.includes('POS')) return <CreditCard size={18} />;

    // Preguntas Comunes 

    if (item.label.includes('Preguntas Comunes')) return <MessageCircleQuestion size={18} />;

    // Errores Sunat 

    if (item.label.includes('Errores Sunat')) return <CircleX size={18} />;

    // Pro X novedades

    if (item.label.includes('Nuevas Funciones')) return <Newspaper size={18} />;

    if (item.label.includes('Windows')) return <Monitor size={18} />;
    if (item.label.includes('Docker') || item.label.includes('Linux')) return <Boxes size={18} />;
    if (item.label.includes('Plugin API')) return <Plug size={18} />;
    if (item.label.includes('SSL')) return <ShieldCheck size={18} />;
    if (item.label.includes('cPanel')) return <Server size={18} />;
    if (item.label.includes('Actualizar o Migrar el Sistema')) return <RotateCw size={18} />;
    if (item.label.includes('Migrar a Pro7.1 o Superior')) return <RotateCw size={18} />;

    // Cache Laravel
    if (item.label.includes('Guía para Limpiar Cache de Laravel')) return <RotateCw size={18} />;

     

  }
  return null;
}

function modifyItems(items) {
  if (!items) return items;
  
  return items.map(item => {
    const newItem = {...item};
    
    if (newItem.items) {
      newItem.items = modifyItems(newItem.items);
    }
    
    if (newItem.label && typeof newItem.label === 'string') {
      const icon = getIconForItem(newItem);
      if (icon) {
        newItem.label = (
          <div className="sidebar-item-with-icon">
            <span className="sidebar-icon">{icon}</span>
            <span>{newItem.label}</span>
          </div>
        );
      }
    }
    
    return newItem;
  });
}

function DocSidebarWrapper(props: WrapperProps<typeof DocSidebarType>): JSX.Element {
  const newProps = {...props};
  if (newProps.sidebar) {
    newProps.sidebar = modifyItems(newProps.sidebar);
  }
  
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .sidebar-item-with-icon {
        display: flex !important;
        align-items: center;
        gap: 10px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <DocSidebar {...newProps} />;
}

export default DocSidebarWrapper;