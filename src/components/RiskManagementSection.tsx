import RiskDisclaimerBanner from './RiskDisclaimerBanner'

export default function RiskManagementSection() {
  return (
    <section id="risk-management" className="scroll-mt-24 border-b border-tv-border px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tv-teal/20 text-sm font-bold text-tv-teal">
            8
          </span>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Risk Management</h2>
        </div>

        <div className="mt-4 max-w-3xl space-y-4 text-slate-300">
          <p>
            Ang guide na ito ay nagtuturo ng <strong>analysis technique lang</strong> — kung paano bumasa ng
            structure at mag-define ng zones. Ang position sizing at leverage ay <strong>hiwalay na desisyon</strong>{' '}
            na dapat mo pag-isipang mabuti base sa sarili mong account at risk tolerance.
          </p>
          <p>
            <strong>Iwasan ang sobrang taas na leverage.</strong> Hindi namin ire-recommend o babanggitin ang
            specific na leverage multiple mula sa anumang personal na halimbawa ng trade — desisyon mo ito, at
            responsibilidad mo rin ang consequences nito.
          </p>
          <div>
            <p className="font-medium text-slate-200">General good practices:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base">
              <li>I-risk lang ang maliit, fixed na percentage ng account mo per trade.</li>
              <li>Laging i-define ang invalidation zone bago ka pumasok sa trade — hindi pagkatapos.</li>
              <li>Huwag mo nang gagalawin/palayuin pa ang invalidation matapos ka nang naka-enter.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <RiskDisclaimerBanner />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">
            Hindi ito financial advice. Ang trading ay may kalakip na risk of loss. Ang anumang halimbawa ng
            percentage gain na naipakita sa site na ito ay hindi indikasyon ng future results.
          </p>
        </div>
      </div>
    </section>
  )
}
