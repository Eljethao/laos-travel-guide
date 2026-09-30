// Interface text in English and Lao.
import type { L } from '../i18n'

export const ui = {
  brand: { en: 'Visit Laos', lo: 'ທ່ຽວລາວ' },
  brandSub: { en: 'Travel Guide', lo: 'ຄູ່ມືທ່ອງທ່ຽວ' },
  nav: {
    map: { en: 'Map', lo: 'ແຜນທີ່' },
    places: { en: 'Places', lo: 'ສະຖານທີ່' },
    itineraries: { en: 'Itineraries', lo: 'ແຜນການເດີນທາງ' },
    when: { en: 'When to go', lo: 'ເວລາທີ່ເໝາະສົມ' },
    essentials: { en: 'Essentials', lo: 'ຂໍ້ມູນຈຳເປັນ' },
  },

  hero: {
    eyebrow: { en: 'Sabaidee — welcome to Laos', lo: 'ສະບາຍດີ — ຍິນດີຕ້ອນຮັບສູ່ ສປປ ລາວ' },
    title1: { en: 'Discover the', lo: 'ຄົ້ນພົບ' },
    title2: { en: 'Land of a Million Elephants', lo: 'ດິນແດນສວຍງາມຮັ່ງມີໄປດ້ວຍທຳມະຊາດ' },
    lead: {
      en: 'Golden temples, turquoise waterfalls, slow river journeys and mountain villages — everything you need to plan your trip, on one interactive map.',
      lo: 'ວັດວາອາຮາມສີທອງ, ນ້ຳຕົກສີຟ້າຄາມ, ການລ່ອງເຮືອ ແລະ ບ້ານເທິງພູ — ທຸກຢ່າງທີ່ທ່ານຕ້ອງການ ເພື່ອວາງແຜນການເດີນທາງ ຢູ່ໃນແຜນທີ່ດຽວ.',
    },
    search: { en: 'Where do you want to go?', lo: 'ທ່ານຢາກໄປໃສ?' },
    searchBtn: { en: 'Explore', lo: 'ຄົ້ນຫາ' },
    places: { en: 'Places', lo: 'ສະຖານທີ່' },
    provinces: { en: 'Provinces', lo: 'ແຂວງ' },
    unesco: { en: 'UNESCO sites', lo: 'ມໍລະດົກໂລກ' },
    season: { en: 'Best season', lo: 'ລະດູທີ່ດີທີ່ສຸດ' },
    seasonValue: { en: 'Nov–Feb', lo: 'ພ.ຈ–ກ.ພ' },
    scroll: { en: 'Scroll to explore', lo: 'ເລື່ອນລົງເພື່ອເບິ່ງ' },
  },

  explore: {
    eyebrow: { en: 'Interactive map', lo: 'ແຜນທີ່ແບບໂຕ້ຕອບ' },
    title: { en: 'Where to go in Laos', lo: 'ສະຖານທີ່ທ່ອງທ່ຽວໃນລາວ' },
    lead: {
      en: 'Tap a province to zoom in, or a dot to open a place. Filter by region or by what you enjoy.',
      lo: 'ແຕະແຂວງເພື່ອຊູມເຂົ້າ ຫຼື ແຕະຈຸດເພື່ອເບິ່ງສະຖານທີ່. ກັ່ນຕອງຕາມພາກ ຫຼື ປະເພດທີ່ທ່ານມັກ.',
    },
    search: { en: 'Search places…', lo: 'ຄົ້ນຫາສະຖານທີ່…' },
    allRegions: { en: 'All regions', lo: 'ທຸກພາກ' },
    allTypes: { en: 'All types', lo: 'ທຸກປະເພດ' },
    place: { en: 'place', lo: 'ແຫ່ງ' },
    places: { en: 'places', lo: 'ແຫ່ງ' },
    reset: { en: 'Reset filters', lo: 'ລ້າງຕົວກອງ' },
    province: { en: 'Province', lo: 'ແຂວງ' },
    remove: { en: 'remove', lo: 'ເອົາອອກ' },
    none: { en: 'No places match. Try another filter.', lo: 'ບໍ່ພົບສະຖານທີ່. ລອງປ່ຽນຕົວກອງ.' },
    noneInProvince: { en: 'No featured places here yet — try a neighbouring province.', lo: 'ຍັງບໍ່ມີສະຖານທີ່ແນະນຳໃນແຂວງນີ້ — ລອງແຂວງໃກ້ຄຽງ.' },
    hint: { en: 'Tap a province to zoom · tap a dot for details', lo: 'ແຕະແຂວງເພື່ອຊູມ · ແຕະຈຸດເພື່ອເບິ່ງລາຍລະອຽດ' },
    capital: { en: 'Capital', lo: 'ນະຄອນຫຼວງ' },
    zoomOut: { en: 'Show all of Laos', lo: 'ເບິ່ງທົ່ວປະເທດ' },
    route: { en: 'Showing route', lo: 'ກຳລັງສະແດງເສັ້ນທາງ' },
    clear: { en: 'Clear', lo: 'ລ້າງ' },
  },

  gallery: {
    eyebrow: { en: 'Top places', lo: 'ສະຖານທີ່ຍອດນິຍົມ' },
    title: { en: 'Places you’ll never forget', lo: 'ສະຖານທີ່ທີ່ທ່ານຈະບໍ່ມີວັນລືມ' },
    lead: { en: 'Hand-picked highlights from the north to the far south.', lo: 'ສະຖານທີ່ເດັ່ນ ຄັດເລືອກຈາກພາກເໜືອຫາພາກໃຕ້.' },
    all: { en: 'See all places on the map', lo: 'ເບິ່ງທຸກສະຖານທີ່ໃນແຜນທີ່' },
  },

  detail: {
    province: { en: 'Province', lo: 'ແຂວງ' },
    unesco: { en: 'UNESCO World Heritage', lo: 'ມໍລະດົກໂລກ UNESCO' },
    dontMiss: { en: 'Don’t miss', lo: 'ບໍ່ຄວນພາດ' },
    howLong: { en: 'How long', lo: 'ໃຊ້ເວລາ' },
    gettingThere: { en: 'Getting there', lo: 'ການເດີນທາງ' },
    tip: { en: 'Local tip', lo: 'ຄຳແນະນຳຈາກຄົນທ້ອງຖິ່ນ' },
    photo: { en: 'Photo', lo: 'ຮູບພາບ' },
    close: { en: 'Close', lo: 'ປິດ' },
    showOnMap: { en: 'Show on map', lo: 'ເບິ່ງໃນແຜນທີ່' },
    prev: { en: 'Previous place', lo: 'ສະຖານທີ່ກ່ອນໜ້າ' },
    next: { en: 'Next place', lo: 'ສະຖານທີ່ຕໍ່ໄປ' },
  },

  itineraries: {
    eyebrow: { en: 'Plan your trip', lo: 'ວາງແຜນການເດີນທາງ' },
    title: { en: 'Ready-made itineraries', lo: 'ແຜນການເດີນທາງສຳເລັດຮູບ' },
    lead: { en: 'Three easy routes to start from. Draw any of them on the map.', lo: 'ສາມເສັ້ນທາງງ່າຍໆ ເພື່ອເລີ່ມຕົ້ນ. ສະແດງເສັ້ນທາງໃນແຜນທີ່ໄດ້.' },
    days: { en: 'days', lo: 'ມື້' },
    show: { en: 'Show route on map', lo: 'ສະແດງເສັ້ນທາງໃນແຜນທີ່' },
    stops: { en: 'stops', lo: 'ຈຸດແວ່' },
  },

  when: {
    eyebrow: { en: 'Weather & festivals', lo: 'ອາກາດ ແລະ ງານບຸນ' },
    title: { en: 'When to go', lo: 'ເວລາທີ່ເໝາະສົມ' },
    lead: {
      en: 'Laos has three seasons. Tap a month to see what to expect. Festivals follow the lunar calendar, so dates shift each year.',
      lo: 'ລາວມີສາມລະດູ. ແຕະເດືອນເພື່ອເບິ່ງລາຍລະອຽດ. ງານບຸນອີງຕາມປະຕິທິນຈັນທະຄະຕິ ວັນທີຈຶ່ງປ່ຽນໄປແຕ່ລະປີ.',
    },
    festivals: { en: 'Festivals this month', lo: 'ງານບຸນໃນເດືອນນີ້' },
    noFestival: { en: 'No major festival — a quieter time to travel.', lo: 'ບໍ່ມີງານບຸນໃຫຍ່ — ເປັນຊ່ວງທີ່ເດີນທາງສະບາຍ.' },
    now: { en: 'now', lo: 'ຕອນນີ້' },
  },

  essentials: {
    eyebrow: { en: 'Before you go', lo: 'ກ່ອນອອກເດີນທາງ' },
    title: { en: 'Travel essentials', lo: 'ຂໍ້ມູນຈຳເປັນສຳລັບການເດີນທາງ' },
    lead: {
      en: 'The practical things worth knowing. Rules can change, so confirm visa details before you travel.',
      lo: 'ສິ່ງທີ່ຄວນຮູ້. ລະບຽບອາດມີການປ່ຽນແປງ ກະລຸນາກວດສອບຂໍ້ມູນວີຊາກ່ອນເດີນທາງ.',
    },
  },

  phrases: {
    eyebrow: { en: 'Speak a little Lao', lo: 'ເວົ້າພາສາລາວ' },
    title: { en: 'Useful phrases', lo: 'ປະໂຫຍກທີ່ເປັນປະໂຫຍດ' },
    lead: { en: 'A few words go a long way. Add a smile and a small nod.', lo: 'ຄຳເວົ້າງ່າຍໆ ພ້ອມຮອຍຍິ້ມ ຊ່ວຍໄດ້ຫຼາຍ.' },
  },

  food: {
    eyebrow: { en: 'Eat like a local', lo: 'ກິນແບບຄົນລາວ' },
    title: { en: 'Must-try food', lo: 'ອາຫານທີ່ຕ້ອງລອງ' },
    lead: { en: 'Lao food is fresh, herby and shared at the table.', lo: 'ອາຫານລາວ ສົດ, ຫອມສະໝຸນໄພ ແລະ ກິນຮ່ວມກັນ.' },
  },

  footer: {
    builtBy: { en: 'Built by', lo: 'ພັດທະນາໂດຍ' },
    with: { en: 'with React & TypeScript.', lo: 'ດ້ວຍ React ແລະ TypeScript.' },
    disclaimer: {
      en: 'Travel information is general guidance and may change — please check official sources before your trip.',
      lo: 'ຂໍ້ມູນການທ່ອງທ່ຽວເປັນພຽງຄຳແນະນຳທົ່ວໄປ ແລະ ອາດມີການປ່ຽນແປງ — ກະລຸນາກວດສອບກັບແຫຼ່ງທາງການກ່ອນເດີນທາງ.',
    },
    mapCredit: {
      en: 'Map boundaries © OpenStreetMap contributors via geoBoundaries (ODbL).',
      lo: 'ຂອບເຂດແຜນທີ່ © OpenStreetMap contributors ຜ່ານ geoBoundaries (ODbL).',
    },
    photoCredits: { en: 'Photo credits', lo: 'ເຈົ້າຂອງຮູບພາບ' },
    photoNote: {
      en: 'All photos from Wikimedia Commons, used under their free licences.',
      lo: 'ຮູບພາບທັງໝົດຈາກ Wikimedia Commons ນຳໃຊ້ຕາມໃບອະນຸຍາດເສລີ.',
    },
  },
} satisfies Record<string, Record<string, L> | L>
