'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { buildQuery } from '../lib/queryBuilder';

export default function SubCategoryStep() {
  const params = useSearchParams();
  const keyword = params.get('keyword') || '';
  const category = params.get('category') || '';

  useEffect(() => {
    const query = buildQuery(keyword, category);
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    alert('Enjoy the world!');
  }, [keyword, category]);

  return (
    <div className="page-container flex justify-center items-center">
      <h2 className="text-2xl font-semibold">Redirecting to Google Search...</h2>
    </div>
  );
}
