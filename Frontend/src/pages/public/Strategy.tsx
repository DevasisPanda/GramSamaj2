import { ContentPage } from '@/components/shared/ContentPage';
import { STRATEGY_INTRO, STRATEGY_SECTIONS } from '@/data/content';

export default function Strategy() {
  return (
    <ContentPage
      title="Strategy"
      subtitle={STRATEGY_INTRO}
      gradient="forest"
      crumbs={[{ label: 'Trustee', to: '/trustee/board' }, { label: 'Strategy' }]}
      sections={STRATEGY_SECTIONS}
    />
  );
}
