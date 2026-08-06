export interface CurriculumItem {
  label: string
  done?: boolean
  current?: boolean
}

export interface CurriculumWeek {
  title: string
  items: CurriculumItem[]
}

export const CURRICULUM: CurriculumWeek[] = [
  {
    title: 'WEEK 1',
    items: [
      { label: 'Module 1 Onboarding Video', done: true },
      { label: '1. What & How FOREX works (Tagalog)', done: true },
      { label: '1.1 What & How FOREX works (English)', done: true },
      { label: '2. Trading Expectation', done: true },
      { label: '2.1 Trading Expectation (English)', done: true },
      { label: '3. Price & Candlesticks', done: true },
      { label: '3.1 Price & Candlesticks (English)', done: true },
      { label: '4. Pips & Lots', done: true, current: true },
      { label: '4.1 Pips & Lots (English)', done: true },
    ],
  },
  {
    title: 'WEEK 2',
    items: [
      { label: 'Module 2 Onboarding Video', done: true },
      { label: '5. Trading TIME Sessions', done: true },
      { label: '5.1 Trading Time Session (English)' },
      { label: '6. Trends & Trendlines' },
      { label: '6.1 Trends & Trendlines (English)' },
      { label: '7. Support & Resistance' },
      { label: '7.1 Support & Resistance (English)' },
    ],
  },
  {
    title: 'WEEK 3',
    items: [
      { label: 'Module 3' },
      { label: '8. Technical Indicators' },
      { label: '8.1 Technical Indicators (English)' },
    ],
  },
  {
    title: 'WEEK 4',
    items: [
      { label: '9. Three Types Of Market Analysis (English)' },
      { label: '10. What Is Technical Analysis (ENGLISH)' },
      { label: '11. What Is Fundamental Analysis (English)' },
    ],
  },
]
