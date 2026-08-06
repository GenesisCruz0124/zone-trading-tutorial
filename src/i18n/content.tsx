import type { ReactNode } from 'react'
import type { Language } from '../context/SettingsContext'

interface NavLink {
  id: string
  label: string
}

interface StepContent {
  stepNumber: string
  title: string
  intro: ReactNode
  steps: string[]
  note?: string
  imageCaptions: string[]
}

interface ExampleContent {
  label: string
  description: ReactNode
  imageCaption: string
}

export interface SiteContent {
  nav: NavLink[]
  hero: {
    eyebrow: string
    title: string
    intro: ReactNode
  }
  disclaimer: {
    heading: string
    body: string
  }
  chart: {
    title: string
    caption: string
    symbolLabel: string
    intervalLabel: string
    liveBadge: string
  }
  steps: {
    fractals: StepContent
    trendline: StepContent
    entryZone: StepContent
    invalidationTp: StepContent
    weeklyOutlook: StepContent
  }
  examples: {
    heading: string
    disclaimerNote: string
    long: ExampleContent
    short: ExampleContent
  }
  risk: {
    heading: string
    body: ReactNode
    practicesHeading: string
    practices: string[]
    closingDisclaimer: string
  }
  footer: string
  sampleDiagramLabel: string
  imagePlaceholder: {
    prompt: string
    removeLabel: string
    unsupportedFileError: string
    processError: string
    quotaWarning: string
    checkButtonLabel: string
    checkingLabel: string
    checkOk: string
    checkTooSmall: string
    checkLikelyBlank: string
    checkFailed: string
  }
}

const taglish: SiteContent = {
  nav: [
    { id: 'live-chart', label: 'Chart' },
    { id: 'step-fractals', label: '1. Fractals' },
    { id: 'step-trendline', label: '2. Trendline' },
    { id: 'step-entry-zone', label: '3. Entry Zone' },
    { id: 'step-invalidation-tp', label: '4. Invalid/TP' },
    { id: 'step-weekly-outlook', label: '5. Weekly Outlook' },
    { id: 'worked-examples', label: 'Examples' },
    { id: 'risk-management', label: 'Risk Mgmt' },
  ],
  hero: {
    eyebrow: 'Zone Trading Tutorial',
    title: 'Structure-Based Zone Trading — Learn Mo Nang Maayos',
    intro: (
      <>
        Ito ay isang guide sa pagbasa ng price structure gamit ang <strong>Fractals</strong>, pag-confirm ng{' '}
        <strong>trendline break</strong>, at paggamit ng <strong>demand/supply zones</strong> (hindi single price)
        para sa entry, invalidation, at take-profit. Para ito sa mga gustong matuto ng objective, structure-based
        approach sa pag-analyze ng chart — bago, intermediate, hanggang sa gustong mag-refine ng existing na
        technique.
      </>
    ),
  },
  disclaimer: {
    heading: '⚠️ Risk Disclaimer',
    body: 'Ang site na ito ay para sa educational purposes lang. Hindi ito financial advice, at wala kaming ibinibigay na trade signals o guarantee ng kita. Ang leverage trading ay may mataas na risk — puwede kang malugi ng buong capital mo o higit pa. Mag-research, mag-practice sa demo account, at mag-desisyon base sa sarili mong risk tolerance.',
  },
  chart: {
    title: 'Live Chart Panel',
    caption: 'Practice reading structure dito habang binabasa yung guide sa baba.',
    symbolLabel: 'Symbol',
    intervalLabel: 'Interval',
    liveBadge: 'Live via TradingView',
  },
  steps: {
    fractals: {
      stepNumber: '1',
      title: 'Add the Fractals Indicator',
      intro: (
        <>
          Ang <strong>Fractals</strong> (Williams Fractals) indicator ay hindi built-in sa free embedded widget sa
          itaas — kailangan mong i-add ito manually sa sarili mong TradingView account. Gamitin ang{' '}
          <strong>"Open in new tab"</strong> link sa chart panel para ma-access ang full TradingView interface.
        </>
      ),
      steps: [
        'Buksan ang chart sa TradingView.com (pwede gamitin ang free tier account).',
        'I-click ang "Indicators" (fx icon) sa toolbar.',
        'I-search ang "Fractals" (Williams Fractals).',
        'I-add sa chart.',
        'I-adjust ang period settings kung gusto mong i-tweak ang sensitivity.',
      ],
      imageCaptions: ['Screenshot slot: Indicators search dialog na may Fractals result.'],
    },
    trendline: {
      stepNumber: '2',
      title: 'Identify Structure Break (Trendline)',
      intro: (
        <>
          Ang <strong>trendline break</strong> ay nagsi-signal ng potential shift sa swing structure. I-draw ang
          trendline gamit ang mga <strong>Fractal points</strong> — kumonekta ng swing lows (kung uptrend) o swing
          highs (kung downtrend).
        </>
      ),
      steps: [
        'Piliin ang Trendline tool sa drawing toolbar.',
        'I-click ang unang fractal point.',
        'I-click ang pangalawang fractal point para makumpleto ang linya.',
        'Bantayan kung may candle close na dumaan/tumawid sa linya — iyan ang potential break.',
      ],
      note: 'Note: hindi sapat ang break lang para maging confirmation — dapat i-pair ito sa zone (susunod na section).',
      imageCaptions: ['Screenshot slot: Trendline na naka-draw gamit ang fractal swing points.'],
    },
    entryZone: {
      stepNumber: '3',
      title: 'Draw the Entry Zone',
      intro: (
        <>
          Zone-based entry vs single-price entry: mas maganda ang zone kasi <strong>ina-absorb nito ang wick
          noise</strong> at mas realistic kumpara sa laser-thin na linya. Ang zone ay nagre-represent ng
          consolidation o reaction area bago ang break.
        </>
      ),
      steps: [
        'Piliin ang Rectangle tool sa drawing toolbar.',
        'I-draw ang box sa paligid ng consolidation/reaction area bago ang trendline break.',
        'I-adjust ang taas ng box para ma-cover ang buong reaction area, hindi lang single wick.',
      ],
      imageCaptions: [
        'Screenshot slot: Rectangle zone box sa paligid ng consolidation area (long setup).',
        'Screenshot slot: Rectangle zone box para sa short/reversal setup.',
      ],
    },
    invalidationTp: {
      stepNumber: '4',
      title: 'Set Invalidation & Take-Profit Zones',
      intro: (
        <>
          Ang <strong>invalidation zone</strong> ay yung area kung saan, once na madaanan ng price, hindi na valid
          ang setup — parang "soft stop area" siya, hindi single stop price. Ang{' '}
          <strong>take-profit zone</strong> naman ay target area, hindi rin single price.
        </>
      ),
      steps: [
        'Gamitin ulit ang Rectangle tool.',
        'I-draw ang invalidation zone (mungkahing kulay: red/pink) sa likod ng entry zone.',
        'I-draw ang take-profit zone (mungkahing kulay: teal/green) sa target area.',
      ],
      note: 'Mahalaga: ang lapad ng zone ay dapat base sa volatility/ATR ng symbol — hindi basta-basta lang o arbitrary.',
      imageCaptions: ['Screenshot slot: Color-coded invalidation (red/pink) at take-profit (teal/green) zones.'],
    },
    weeklyOutlook: {
      stepNumber: '5',
      title: 'Build a Weekly Outlook Zone Chart',
      intro: (
        <>
          Pagsamahin ang lahat ng natutunan mo — zones, bias, at scenarios — sa isang chart na pwede mong i-save o
          i-share bilang <strong>weekly outlook</strong>. Walang bagong indicator dito, purely drawing tools at
          annotation na naka-layer sa itaas ng structure na na-identify mo na.
        </>
      ),
      steps: [
        'I-mark ang hanggang dalawang supply zones (Rectangle tool) sa itaas ng current price, parehong technique sa Step 3.',
        'I-mark ang demand zone (Rectangle tool, ibang kulay — hal. blue/teal) sa ibaba, para di malito sa supply zones.',
        'Mag-add ng Horizontal Line sa kasalukuyang price para makita agad kung saan ito relative sa mga zone.',
        'Gamitin ang Arrow tool para i-sketch ang dalawang posibleng landas: bullish scenario (break pataas sa supply) at pullback scenario (rejection pababa papunta sa demand) — magkaibang kulay bawat isa.',
        'Mag-add ng Text annotation sa isang sulok na naglalagay ng bias summary sa iba’t ibang timeframe (hal. "H4 Bearish, H1 Bearish").',
        'I-label ang bawat key level gamit ang Text o Price Label tool (Supply 2, Supply 1, Demand, Current Price) para mabilis mabasa.',
        'Kapag kumpleto na, gamitin ang camera/snapshot icon sa toolbar para i-save o i-share ang outlook chart mo.',
      ],
      note: 'Ito ay presentation lang ng parehong zones at bias na na-draw mo na sa mga naunang steps — hindi ito bagong technique.',
      imageCaptions: [
        'Screenshot slot: Kumpletong weekly outlook chart na may supply/demand zones, bias label, at scenario arrows.',
      ],
    },
  },
  examples: {
    heading: 'Worked Examples',
    disclaimerNote: 'Halimbawa lang ito — hindi ito recommendation na mag-trade.',
    long: {
      label: 'Uptrend Continuation',
      description: (
        <>
          Sa uptrend, nag-break ang trendline pataas papunta sa bagong swing high. Bumalik ang price sa
          <strong> entry zone</strong> (dating resistance na naging support), naka-set ang{' '}
          <strong>invalidation zone</strong> sa ibaba ng zone, at ang <strong>target zone</strong> sa itaas base sa
          susunod na structure level.
        </>
      ),
      imageCaption: 'Screenshot slot: Long setup — trendline break, entry zone, invalidation below, target above.',
    },
    short: {
      label: 'Supply Zone Reaction',
      description: (
        <>
          Matapos ang extended rally, nag-react ang price sa isang <strong>supply zone</strong>. Naka-set ang{' '}
          <strong>invalidation zone</strong> sa itaas ng zone, at ang <strong>target zone</strong> sa ibaba base sa
          nakaraang structure.
        </>
      ),
      imageCaption: 'Screenshot slot: Short/reversal setup — supply zone reaction, invalidation above, target below.',
    },
  },
  risk: {
    heading: 'Risk Management',
    body: (
      <>
        <p>
          Ang guide na ito ay nagtuturo ng <strong>analysis technique lang</strong> — kung paano bumasa ng structure
          at mag-define ng zones. Ang position sizing at leverage ay <strong>hiwalay na desisyon</strong> na dapat mo
          pag-isipang mabuti base sa sarili mong account at risk tolerance.
        </p>
        <p>
          <strong>Iwasan ang sobrang taas na leverage.</strong> Hindi namin ire-recommend o babanggitin ang specific
          na leverage multiple mula sa anumang personal na halimbawa ng trade — desisyon mo ito, at responsibilidad
          mo rin ang consequences nito.
        </p>
      </>
    ),
    practicesHeading: 'General good practices:',
    practices: [
      'I-risk lang ang maliit, fixed na percentage ng account mo per trade.',
      'Laging i-define ang invalidation zone bago ka pumasok sa trade — hindi pagkatapos.',
      'Huwag mo nang gagalawin/palayuin pa ang invalidation matapos ka nang naka-enter.',
    ],
    closingDisclaimer:
      'Hindi ito financial advice. Ang trading ay may kalakip na risk of loss. Ang anumang halimbawa ng percentage gain na naipakita sa site na ito ay hindi indikasyon ng future results.',
  },
  footer: 'Educational content only. Not financial advice. Trade at your own risk.',
  sampleDiagramLabel: 'Halimbawang diagram — hindi actual chart',
  imagePlaceholder: {
    prompt: 'I-drag o i-click para mag-upload ng screenshot mo',
    removeLabel: 'Alisin',
    unsupportedFileError: 'File na ito ay hindi image. Mag-upload ng PNG, JPG, o WebP.',
    processError: 'Hindi na-process ang image. Subukan ulit ng ibang file.',
    quotaWarning: 'Na-preview ang image pero hindi na-save locally (storage full). Mawawala ito pag nag-refresh.',
    checkButtonLabel: 'I-check ang Screenshot',
    checkingLabel: 'Chinecheck...',
    checkOk: 'Mukhang okay ang screenshot mo — malinaw at may laman.',
    checkTooSmall: 'Mababa ang resolution ng image (masyadong maliit) — baka mahirap basahin. Subukan mag-upload ng mas malinaw/mas malaking screenshot.',
    checkLikelyBlank: 'Mukhang halos blangko o solid color lang ang image — siguraduhing kompleto ang na-capture mong chart.',
    checkFailed: 'Hindi na-check ang image. Subukan ulit.',
  },
}

const english: SiteContent = {
  nav: taglish.nav,
  hero: {
    eyebrow: 'Zone Trading Tutorial',
    title: 'Structure-Based Zone Trading — Learn It the Right Way',
    intro: (
      <>
        This is a guide to reading price structure using <strong>Fractals</strong>, confirming a{' '}
        <strong>trendline break</strong>, and using <strong>demand/supply zones</strong> (not a single price) for
        entry, invalidation, and take-profit. It's for anyone who wants to learn an objective, structure-based
        approach to reading a chart — beginners, intermediates, and anyone refining an existing technique.
      </>
    ),
  },
  disclaimer: {
    heading: '⚠️ Risk Disclaimer',
    body: 'This site is for educational purposes only. It is not financial advice, and we do not provide trade signals or any guarantee of profit. Leverage trading carries high risk — you can lose your entire capital or more. Do your own research, practice on a demo account, and decide based on your own risk tolerance.',
  },
  chart: {
    title: 'Live Chart Panel',
    caption: 'Practice reading structure here while you read the guide below.',
    symbolLabel: 'Symbol',
    intervalLabel: 'Interval',
    liveBadge: 'Live via TradingView',
  },
  steps: {
    fractals: {
      stepNumber: '1',
      title: 'Add the Fractals Indicator',
      intro: (
        <>
          The <strong>Fractals</strong> (Williams Fractals) indicator is not built into the free embedded widget
          above — you'll need to add it manually on your own TradingView account. Use the{' '}
          <strong>"Open in new tab"</strong> link on the chart panel to access the full TradingView interface.
        </>
      ),
      steps: [
        'Open the chart on TradingView.com (a free-tier account is enough).',
        'Click "Indicators" (the fx icon) in the toolbar.',
        'Search for "Fractals" (Williams Fractals).',
        'Add it to the chart.',
        'Adjust the period settings if you want to tweak sensitivity.',
      ],
      imageCaptions: ['Screenshot slot: Indicators search dialog showing the Fractals result.'],
    },
    trendline: {
      stepNumber: '2',
      title: 'Identify Structure Break (Trendline)',
      intro: (
        <>
          A <strong>trendline break</strong> signals a potential shift in swing structure. Draw the trendline using
          the <strong>Fractal points</strong> — connect swing lows (in an uptrend) or swing highs (in a downtrend).
        </>
      ),
      steps: [
        'Select the Trendline tool from the drawing toolbar.',
        'Click the first fractal point.',
        'Click the second fractal point to complete the line.',
        'Watch for a candle close that crosses through the line — that\'s the potential break.',
      ],
      note: "Note: a break alone isn't enough confirmation — pair it with the zone (next section).",
      imageCaptions: ['Screenshot slot: Trendline drawn using the fractal swing points.'],
    },
    entryZone: {
      stepNumber: '3',
      title: 'Draw the Entry Zone',
      intro: (
        <>
          Zone-based entry vs. single-price entry: a zone is better because it <strong>absorbs wick noise</strong>{' '}
          and is more realistic than a laser-thin line. The zone represents the consolidation or reaction area
          before the break.
        </>
      ),
      steps: [
        'Select the Rectangle tool from the drawing toolbar.',
        'Draw the box around the consolidation/reaction area before the trendline break.',
        'Adjust the height of the box to cover the whole reaction area, not just a single wick.',
      ],
      imageCaptions: [
        'Screenshot slot: Rectangle zone box around the consolidation area (long setup).',
        'Screenshot slot: Rectangle zone box for a short/reversal setup.',
      ],
    },
    invalidationTp: {
      stepNumber: '4',
      title: 'Set Invalidation & Take-Profit Zones',
      intro: (
        <>
          The <strong>invalidation zone</strong> is the area where, once price trades through it, the setup is no
          longer valid — it acts like a "soft stop area," not a single stop price. The{' '}
          <strong>take-profit zone</strong> is likewise a target area, not a single price.
        </>
      ),
      steps: [
        'Use the Rectangle tool again.',
        'Draw the invalidation zone (suggested color: red/pink) behind the entry zone.',
        'Draw the take-profit zone (suggested color: teal/green) at the target area.',
      ],
      note: "Important: zone width should be based on the symbol's volatility/ATR — not arbitrary.",
      imageCaptions: ['Screenshot slot: Color-coded invalidation (red/pink) and take-profit (teal/green) zones.'],
    },
    weeklyOutlook: {
      stepNumber: '5',
      title: 'Build a Weekly Outlook Zone Chart',
      intro: (
        <>
          Bring together everything you've learned — zones, bias, and scenarios — into one chart you can save or
          share as a <strong>weekly outlook</strong>. No new indicator here, just drawing tools and annotations
          layered on top of the structure you've already identified.
        </>
      ),
      steps: [
        'Mark up to two supply zones (Rectangle tool) above the current price, same technique as Step 3.',
        'Mark the demand zone (Rectangle tool, a different color — e.g. blue/teal) below, so it isn\'t confused with supply zones.',
        'Add a Horizontal Line at the current price so you can immediately see where it sits relative to the zones.',
        'Use the Arrow tool to sketch the two possible paths: the bullish scenario (break upward through supply) and the pullback scenario (rejection down toward demand) — a different color for each.',
        'Add a Text annotation in a corner summarizing bias across timeframes (e.g. "H4 Bearish, H1 Bearish").',
        'Label each key level with the Text or Price Label tool (Supply 2, Supply 1, Demand, Current Price) so it reads quickly.',
        'Once it\'s complete, use the camera/snapshot icon in the toolbar to save or share your outlook chart.',
      ],
      note: "This is just a presentation of the same zones and bias you already drew in the earlier steps — it isn't a new technique.",
      imageCaptions: [
        'Screenshot slot: Completed weekly outlook chart with supply/demand zones, bias label, and scenario arrows.',
      ],
    },
  },
  examples: {
    heading: 'Worked Examples',
    disclaimerNote: "This is just an example — not a recommendation to trade.",
    long: {
      label: 'Uptrend Continuation',
      description: (
        <>
          In an uptrend, the trendline breaks upward toward a new swing high. Price returns to the{' '}
          <strong>entry zone</strong> (former resistance now acting as support), with the{' '}
          <strong>invalidation zone</strong> set below the zone and the <strong>target zone</strong> above, based on
          the next structure level.
        </>
      ),
      imageCaption: 'Screenshot slot: Long setup — trendline break, entry zone, invalidation below, target above.',
    },
    short: {
      label: 'Supply Zone Reaction',
      description: (
        <>
          After an extended rally, price reacts at a <strong>supply zone</strong>. The{' '}
          <strong>invalidation zone</strong> is set above the zone, and the <strong>target zone</strong> below,
          based on prior structure.
        </>
      ),
      imageCaption: 'Screenshot slot: Short/reversal setup — supply zone reaction, invalidation above, target below.',
    },
  },
  risk: {
    heading: 'Risk Management',
    body: (
      <>
        <p>
          This guide teaches <strong>analysis technique only</strong> — how to read structure and define zones.
          Position sizing and leverage are <strong>separate decisions</strong> you need to think through carefully
          based on your own account and risk tolerance.
        </p>
        <p>
          <strong>Avoid excessively high leverage.</strong> We will not recommend or reference a specific leverage
          multiple from any personal trade example — that decision, and its consequences, are yours alone.
        </p>
      </>
    ),
    practicesHeading: 'General good practices:',
    practices: [
      'Only risk a small, fixed percentage of your account per trade.',
      'Always define the invalidation zone before you enter a trade — not after.',
      "Don't move the invalidation further away once you've already entered.",
    ],
    closingDisclaimer:
      'This is not financial advice. Trading carries risk of loss. Any example percentage gain shown on this site is not an indication of future results.',
  },
  footer: 'Educational content only. Not financial advice. Trade at your own risk.',
  sampleDiagramLabel: 'Sample diagram — not an actual chart',
  imagePlaceholder: {
    prompt: 'Drag or click to upload your screenshot',
    removeLabel: 'Remove',
    unsupportedFileError: "That file isn't an image. Please upload a PNG, JPG, or WebP.",
    processError: "Couldn't process that image. Try a different file.",
    quotaWarning: 'Image previewed but could not be saved locally (storage full). It will be lost on refresh.',
    checkButtonLabel: 'Check Screenshot',
    checkingLabel: 'Checking...',
    checkOk: 'Your screenshot looks good — clear and not empty.',
    checkTooSmall: "This image's resolution is low (too small) — it may be hard to read. Try uploading a clearer or larger screenshot.",
    checkLikelyBlank: 'This image looks almost blank or a single solid color — make sure the full chart was captured.',
    checkFailed: "Couldn't check that image. Try again.",
  },
}

const dictionaries: Record<Language, SiteContent> = { taglish, english }

export function getContent(language: Language): SiteContent {
  return dictionaries[language]
}
