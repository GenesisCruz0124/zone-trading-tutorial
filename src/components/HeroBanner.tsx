import RiskDisclaimerBanner from './RiskDisclaimerBanner'

export default function HeroBanner() {
  return (
    <header className="border-b border-tv-border bg-gradient-to-b from-tv-panel to-tv-bg px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-widest text-tv-teal">Zone Trading Tutorial</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-50 sm:text-4xl">
          Structure-Based Zone Trading — Learn Mo Nang Maayos
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Ito ay isang guide sa pagbasa ng price structure gamit ang <strong>Fractals</strong>, pag-confirm ng{' '}
          <strong>trendline break</strong>, at paggamit ng <strong>demand/supply zones</strong> (hindi single
          price) para sa entry, invalidation, at take-profit. Para ito sa mga gustong matuto ng objective,
          structure-based approach sa pag-analyze ng chart — bago, intermediate, hanggang sa gustong mag-refine ng
          existing na technique.
        </p>
        <div className="mt-6">
          <RiskDisclaimerBanner />
        </div>
      </div>
    </header>
  )
}
