import { redirect } from 'next/navigation';

// Currently we want only to support /[lang] route and redirect all other routes to /en
export default function NotFoundPage() {
  redirect('/en');
}
