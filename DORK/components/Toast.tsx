'use client';
import { useEffect, useState } from 'react';

export default function Toast({ message }: { message: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
}
