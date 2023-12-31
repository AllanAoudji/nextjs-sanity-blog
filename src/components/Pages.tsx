import { getPages } from '@/sanity/sanity.queries';
import PageCard from './PageCard';

type Props = {
  className?: string;
};

async function Pages({ className = '' }: Props) {
  const pages = await getPages();

  return (
    <div className={`flex flex-wrap font-bold ${className}`}>
      {pages.map((page) => (
        <PageCard key={page._id} page={page} />
      ))}
    </div>
  );
}

export default Pages;
