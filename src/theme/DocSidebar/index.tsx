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
    if (item.label.includes('App Android')) return <Smartphone size={18} />;
    if (item.label.includes('Actualizaciones')) return <DownloadCloud size={18} />;
    if (item.label.includes('Guias adicionales')) return <BookOpen size={18} />;
    if (item.label.includes('Devs')) return <Code size={18} />;
    if (item.label.includes('Modulos')) return <Boxes size={18} />;
    if (item.label.includes('Mozo.pe')) return <Utensils size={18} />;
    if (item.label.includes('Multi Empresa')) return <Users size={18} />;
    if (item.label.includes('Dashboard')) return <LayoutDashboard  size={18} />;
    if (item.label.includes('Introducción')) return <Sparkles  size={18} />;
    if (item.label.includes('Panel de administración')) return <LayoutGrid  size={18} />;
    if (item.label.includes('VendeYa')) return <ShoppingCart  size={18} />;
    if (item.label.includes('Sistema de Facturación Pro 7')) return <Package  size={18} />;
    if (item.label.includes('Sistema de Facturación Pro X')) return <Package  size={18} />;

    // Preguntas Comunes 

    if (item.label.includes('Preguntas Comunes')) return <MessageCircleQuestion size={18} />;

    // Errores Sunat 

    if (item.label.includes('Errores Sunat')) return <CircleX size={18} />;

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