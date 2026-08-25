import { Link } from 'react-router-dom';
import { ContentPage } from '@/components/shared/ContentPage';
import { DEV_INDIA_HOME } from '@/data/homepage';

export default function DevelopmentInIndia() {
  return (
    <ContentPage
      title="Development in India"
      subtitle="India has one of the world's most comprehensive rural development systems."
      gradient="saffron"
      crumbs={[{ label: 'KRANTI', to: '/kranti' }, { label: 'Development in India' }]}
    >
      <section className="prose-aird mx-auto max-w-3xl">
        <p className="mb-6 leading-relaxed text-ink/80">{DEV_INDIA_HOME.intro}</p>
        <p className="mb-6 leading-relaxed text-ink/80">{DEV_INDIA_HOME.summary}</p>
        <Link
          to="/history"
          className="inline-flex items-center gap-2 rounded-lg bg-saffron-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-saffron-700"
        >
          View the full historical timeline &rarr;
        </Link>

        <div className="mt-10 rounded-2xl border border-forest-100 bg-forest-50/50 p-6">
          <h2 className="mb-3 text-lg font-bold text-forest-700">Related reading</h2>
          <ul className="space-y-2 text-sm text-ink/70">
            <li>
              <Link to="/kranti/decentralized-governance" className="font-medium text-forest-700 hover:underline">
                Decentralized Process of Governance
              </Link>
              {' —'} the 73rd Amendment and Panchayati Raj Institutions.
            </li>
            <li>
              <Link to="/concept" className="font-medium text-forest-700 hover:underline">
                The AIRD Concept
              </Link>
              {' —'} the case for a demonstration village.
            </li>
          </ul>
        </div>
      </section>
    </ContentPage>
  );
}
