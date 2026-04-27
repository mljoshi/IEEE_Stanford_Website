/**
 * IEEE technical societies / Student Branch Chapters at Stanford.
 * Template entries: replace copy, contacts, and status as your branch charters chapters.
 */

export const chaptersPageMeta = {
  kicker: 'Chapters',
  title: 'IEEE Technical Chapters @ Stanford',
  description:
    'IEEE technical societies (MTT-S, PES, EDS, and many others) span every corner of electrical and computer engineering. A Student Branch Chapter (SBC) is a subgroup of the Stanford IEEE Student Branch aligned with one of those societies. Each subgroup often has its own officers, meetings, and society-specific opportunities.',
}

/** Public calendar for all branch events (includes many chapter-adjacent talks). */
export const branchCalendarUrl = 'https://luma.com/calendar/cal-LO8vEyiS1bADtaM'

/**
 * @typedef {{ label: string, href: string }} ChapterLink
 * @typedef {{ path: string, label: string }} ChapterLocalPage
 * @typedef {{
 *   id: string,
 *   summaryTitle: string,
 *   badge?: string,
 *   paragraphs: string[],
 *   links: ChapterLink[],
 *   chapterPage?: ChapterLocalPage,
 * }} ChapterEntry
 */

/** @type {ChapterEntry[]} */
export const chapters = [
  {
    id: 'mtt-s',
    summaryTitle: 'MTT-S — Microwave Theory & Technology',
    paragraphs: [
      'RF and microwave engineering, antennas, wireless systems, and related hardware—often tied to conferences such as IMS and RFIC.',
      'The Stanford MTT-S student branch chapter runs talks, workshops, and networking on campus. Officers, mailing list, and how to get involved are on the chapter page.',
    ],
    links: [
      { label: 'IEEE MTT-S', href: 'https://mtt.org/' },
      { label: 'Student & chapter info', href: 'https://mtt.org/chapters-main/' },
    ],
    chapterPage: { path: '/mtts', label: 'Stanford MTT-S chapter page' },
  },
  {
    id: 'pes',
    summaryTitle: 'PES — Power & Energy',
    paragraphs: [
      'Power systems, energy conversion, grid modernization, and power electronics, aligned with IEEE Power & Energy Society activities and standards work.',
      'The Stanford PES student branch chapter runs talks, workshops, and networking on campus. Officers, mailing list, and how to get involved are on the chapter page.',
    ],
    links: [
      { label: 'IEEE PES', href: 'https://www.ieee-pes.org/' },
      { label: 'IEEE societies overview', href: 'https://www.ieee.org/communities/societies/index.html' },
    ],
    chapterPage: { path: '/pes', label: 'Stanford PES chapter page' },
  },
  {
    id: 'eds',
    summaryTitle: 'EDS — Electron Devices',
    paragraphs: [
      'Semiconductor devices, solid-state electronics, and micro/nano fabrication, central to device physics, IC process, and hardware research on campus.',
      'The Stanford EDS student branch chapter runs talks, workshops, and networking on campus. Officers, interest form, and how to get involved are on the chapter page.',
    ],
    links: [
      { label: 'IEEE EDS', href: 'https://eds.ieee.org/' },
      { label: 'About EDS', href: 'https://eds.ieee.org/about-eds' },
    ],
    chapterPage: { path: '/eds', label: 'Stanford EDS chapter page' },
  },
]

// export const formingChapterBlurb = {
//   summaryTitle: 'Starting or reviving a Student Branch Chapter',
//   paragraphs: [
//     'New chapters need enough interested IEEE student members, a faculty advisor, and a petition to the parent society and the Student Branch. Requirements vary slightly by society.',
//     'If you are interested in chartering a chapter (for example CAS, RAS, ComSoc, or Solid-State Circuits), talk to the branch chair and check your society’s “chapter formation” or student branch chapter documentation.',
//   ],
//   links: [
//     { label: 'IEEE societies list', href: 'https://www.ieee.org/communities/societies/index.html' },
//     { label: 'Example: MTT-S chapter formation', href: 'https://mtt.org/chapter-formation/' },
//   ],
// }
