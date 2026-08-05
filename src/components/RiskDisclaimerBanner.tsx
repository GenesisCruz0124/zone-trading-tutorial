interface RiskDisclaimerBannerProps {
  compact?: boolean
}

export default function RiskDisclaimerBanner({ compact = false }: RiskDisclaimerBannerProps) {
  return (
    <div
      role="alert"
      className={`rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-200 ${
        compact ? 'px-4 py-3 text-sm' : 'px-5 py-4'
      }`}
    >
      <p className="font-semibold">⚠️ Risk Disclaimer</p>
      <p className={compact ? 'mt-1' : 'mt-2 text-sm leading-relaxed'}>
        Ang site na ito ay para sa <span className="font-medium">educational purposes lang</span>. Hindi ito
        financial advice, at wala kaming ibinibigay na trade signals o guarantee ng kita. Ang leverage trading ay
        may mataas na risk — puwede kang malugi ng buong capital mo o higit pa. Mag-research, mag-practice sa demo
        account, at mag-desisyon base sa sarili mong risk tolerance.
      </p>
    </div>
  )
}
