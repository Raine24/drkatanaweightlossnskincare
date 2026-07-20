import React from 'react';
import Link from 'next/link';

const WhatsappWidget = () => {
  return (
    <div className="whatsapp-widget-container">
      <Link href="https://wa.me/256782682878" target="_blank" rel="noopener noreferrer" className="whatsapp-widget-btn">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Chat" 
          width="60" 
          height="60" 
        />
      </Link>

      <style jsx>{`
        .whatsapp-widget-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          animation: bounce 2s infinite;
        }
        .whatsapp-widget-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: transparent;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }
        .whatsapp-widget-btn:hover {
          transform: scale(1.1);
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsappWidget;
