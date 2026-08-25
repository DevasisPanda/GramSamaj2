/**
 * Philosophy & Teachings content blocks — condensed from the official
 * "Philosophy.docx", "Development Car.docx", "Goal of soul.docx",
 * "Human life.docx", "Facts of life.docx", and "Dont believe on God.docx".
 * Each block powers an accordion / interactive section on /philosophy.
 */

export const PHILOSOPHY_INTRO = `The Appropriate Institute of Rural Development (AIRD) is founded on the belief that sustainable development is not merely a process of economic growth or infrastructure creation; it is a process of empowering people to live with dignity, wisdom, compassion, and responsibility. AIRD recognizes that true development must address both the material and spiritual dimensions of human life.`;

export const PHILOSOPHY_GUIDING_PRINCIPLE =
  'Serve the needy, strengthen humanity, respect nature, and participate actively in building a just, peaceful, and self-reliant society.';

export interface PhilosophyPillar {
  id: string;
  title: string;
  icon: string; // lucide icon name
  summary: string;
  body: string[];
}

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: 'humanity',
    title: 'Humanity Before Division',
    icon: 'Heart',
    summary: 'Every person is born first as a human being; divisions come later.',
    body: [
      'AIRD recognizes that every person is born first as a human being. Differences of religion, caste, ethnicity, language, and social status arise later through social and cultural influences. While respecting diversity, AIRD promotes the principle that humanity is greater than all divisions.',
      'It believes that lasting peace and development can be achieved only when human dignity and equality are respected.',
    ],
  },
  {
    id: 'universal-power',
    title: 'Belief in a Universal Power',
    icon: 'Sparkles',
    summary: 'One universal, invisible power known by many names.',
    body: [
      'AIRD believes that the universe is governed by one universal and invisible power that is known by different names in different religious traditions — God, Allah, Ishwar, Bhagwan, Waheguru, or any other.',
      'This supreme power represents the source of creation, preservation, and transformation. Understanding the deeper realities of life requires self-reflection, inquiry, and personal experience rather than blind acceptance of inherited beliefs.',
    ],
  },
  {
    id: 'service',
    title: 'Service as a Path to Wisdom',
    icon: 'HandHeart',
    summary: 'Selfless service to humanity is one of the highest forms of worship.',
    body: [
      'Helping the poor, supporting the vulnerable, protecting nature, sharing knowledge, and working for the welfare of society are not only social responsibilities but also pathways to personal growth and spiritual development.',
      'Acts of kindness generate goodwill and contribute to a more peaceful and harmonious society. The blessings earned through sincere service enrich both the individual and the community.',
    ],
  },
  {
    id: 'thoughts',
    title: 'The Power of Thoughts',
    icon: 'Brain',
    summary: 'Positive thoughts create courage and wisdom; negative thoughts create fear.',
    body: [
      'Inspired by Swami Vivekananda’s teaching that "We are what our thoughts have made us," AIRD recognizes that thoughts influence attitudes, actions, and ultimately destiny.',
      'Meditation, self-discipline, and self-reflection help individuals develop inner peace, clarity of purpose, and emotional balance. Social transformation begins with personal transformation.',
    ],
  },
  {
    id: 'participation',
    title: 'Development Through Participation',
    icon: 'Users',
    summary: 'People are active partners in development, not passive beneficiaries.',
    body: [
      'Sustainable progress is achieved only when communities participate in identifying problems, planning solutions, implementing activities, monitoring progress, and evaluating results.',
      'This philosophy forms the foundation of AIRD’s commitment to Participatory Action Research (PAR), community empowerment, social accountability, and people’s governance.',
    ],
  },
  {
    id: 'nature',
    title: 'Respect for Nature',
    icon: 'Leaf',
    summary: 'Air, water, soil, forests, biodiversity, and climate sustain life.',
    body: [
      'AIRD promotes environmental awareness, conservation of natural resources, and sustainable development practices that protect the interests of future generations.',
      'True development occurs when material progress is combined with moral values, spiritual awareness, community participation, and collective action.',
    ],
  },
];

// ---- The Development Car ----
export const DEVELOPMENT_CAR = {
  title: 'The Development Car (DC)',
  subtitle: 'A symbolic vehicle for the soul’s journey',
  intro:
    'Every human being is a combination of a visible body and an invisible soul. The soul is provided with an invisible Development Car (DC) by the Supreme Power, together with an invisible driver, for its journey on Earth.',
  blessing:
    'When we earn blessings from the heart of a person, the DC becomes more powerful and the driver healthier.',
  curse:
    'Earning a curse damages the DC and makes the driver unhealthy, making the soul’s return journey difficult.',
  core:
    'Serve humanity. Protect nature. Strengthen communities. Earn blessings through service rather than recognition through power.',
  facts: [
    'The body is visible and temporary; the soul is invisible and, according to many spiritual traditions, eternal.',
    'The time, date, and manner of every soul’s departure from Earth are fixed, yet unknown to human beings.',
    'There is no example on Earth of a person who was born but did not die — timely and painless death is the biggest gift to a visiting soul.',
    'Improve your thoughts to work for attaining salvation — Moksha.',
  ],
};

// ---- Vivekananda's Whirlpool Theory ----
export const WHIRLPOOL = {
  title: 'Swami Vivekananda’s Whirlpool Theory',
  subtitle: 'The journey of the soul through worldly existence',
  intro:
    'The individual soul (Atman) is originally free, pure, and divine. When it comes into contact with the world of name and form (Maya), it becomes caught in the whirlpool of worldly existence (Samsara).',
  attachments: [
    { id: 'ego', label: 'Ego (Ahankar)' },
    { id: 'wealth', label: 'Wealth (Dhan)' },
    { id: 'family', label: 'Family (Parivaar)' },
    { id: 'desire', label: 'Desire (Kaam)' },
    { id: 'power', label: 'Power (Shakti)' },
    { id: 'ignorance', label: 'Ignorance (Avidya)' },
  ],
  purifiers: [
    { id: 'jnana', label: 'Knowledge — Jnana Yoga' },
    { id: 'karma', label: 'Selfless Action — Karma Yoga' },
    { id: 'bhakti', label: 'Devotion — Bhakti Yoga' },
    { id: 'raja', label: 'Meditation — Raja Yoga' },
  ],
  salvation:
    'As ignorance is removed, the soul recognizes its identity with the Universal spirit (Brahman) and is liberated (Moksha) — it escapes the whirlpool and rejoins the free-flowing river.',
};

// ---- Buddha's Ehipassiko ----
export const EHIPASSIKO = {
  title: 'Gautama Buddha’s “Ehipassiko”',
  subtitle: '“Come and see for yourself”',
  intro:
    'One of the distinctive features of Gautama Buddha’s teaching is the principle of Ehipassiko, a Pali word meaning “come and see for yourself.” This principle reflects the Buddha’s emphasis on direct experience rather than blind faith.',
  body: [
    'The Buddha encouraged people not to accept any teaching merely because it was ancient, written in scripture, taught by a respected teacher, or followed by the majority.',
    'He advised them to examine, question, and verify the truth through their own experience and understanding. True wisdom arises from investigation, meditation, and lived experience — not from unquestioning belief.',
    'In an age of abundant information and diverse beliefs, Ehipassiko reminds us to cultivate an open yet discerning mind: to question honestly, examine carefully, and accept only what proves true and beneficial through experience.',
  ],
};

// ---- Three Worlds of life ----
export const THREE_WORLDS = [
  {
    id: 'ether',
    name: 'World of Ether (Nature)',
    description:
      'Provides rain, sun, air and all resources necessary for life. Protecting nature is both an environmental and a spiritual responsibility.',
  },
  {
    id: 'air',
    name: 'World of Air',
    description:
      'Where human beings live, work, and serve society — growing living materials for self-consumption and for the body developing in the third world.',
  },
  {
    id: 'water',
    name: 'World of Water',
    description:
      'Where life begins in the mother’s womb. A mother provides food and drink through the navel cord to the body developing here.',
  },
];
