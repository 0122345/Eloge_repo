'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-text">Eloge</div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkConnection = () => {
      if (!navigator.onLine) {
        setLoading(true);
      } else {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('online', checkConnection);
    window.addEventListener('offline', checkConnection);

    checkConnection();

    return () => {
      window.removeEventListener('online', checkConnection);
      window.removeEventListener('offline', checkConnection);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading && <Loader />}
        {children}
      </body>
    </html>
  )
}
