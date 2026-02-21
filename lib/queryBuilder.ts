export function buildQuery(keyword: string, category: string) {
  return `${category} "${keyword}"`;
}

const categories = [
  { name: 'PDF Files', description: 'Publicly indexed PDF documents' },
  { name: 'Images', description: 'Public image files' },
  { name: 'Videos', description: 'Public video files' },
  { name: 'Spreadsheets', description: 'XLSX / CSV files' }
];

export default categories;
