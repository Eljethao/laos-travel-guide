// Travel content in English and Lao. Facts are general guidance — prices, schedules
// and visa rules change, so the site tells visitors to confirm before they travel.
import type { L } from '../i18n'

export type Region = 'North' | 'Central' | 'South'
export type Category = 'Culture' | 'Nature' | 'Adventure' | 'History'

export interface Destination {
  id: string
  name: L
  province: string // must match a province name in laos-provinces.json
  region: Region
  category: Category
  unesco?: boolean
  featured?: boolean
  coords: [number, number] // [longitude, latitude]
  summary: L
  highlights: L[]
  stay: L
  gettingThere: L
  tip: L
}

export const categoryColors: Record<Category, string> = {
  Culture: '#c2410c',
  Nature: '#15803d',
  Adventure: '#0369a1',
  History: '#7c3aed',
}

export const regions: Region[] = ['North', 'Central', 'South']
export const categories: Category[] = ['Culture', 'Nature', 'Adventure', 'History']

export const regionNames: Record<Region, L> = {
  North: { en: 'North', lo: 'ພາກເໜືອ' },
  Central: { en: 'Central', lo: 'ພາກກາງ' },
  South: { en: 'South', lo: 'ພາກໃຕ້' },
}

export const categoryNames: Record<Category, L> = {
  Culture: { en: 'Culture', lo: 'ວັດທະນະທຳ' },
  Nature: { en: 'Nature', lo: 'ທຳມະຊາດ' },
  Adventure: { en: 'Adventure', lo: 'ຜະຈົນໄພ' },
  History: { en: 'History', lo: 'ປະຫວັດສາດ' },
}

// Keyed by the English province name used in the map data.
export const provinceNames: Record<string, L> = {
  Attapeu: { en: 'Attapeu', lo: 'ອັດຕະປື' },
  Bokeo: { en: 'Bokeo', lo: 'ບໍ່ແກ້ວ' },
  Bolikhamsai: { en: 'Bolikhamsai', lo: 'ບໍລິຄຳໄຊ' },
  Champasak: { en: 'Champasak', lo: 'ຈຳປາສັກ' },
  Houaphan: { en: 'Houaphan', lo: 'ຫົວພັນ' },
  Khammouane: { en: 'Khammouane', lo: 'ຄຳມ່ວນ' },
  'Luang Namtha': { en: 'Luang Namtha', lo: 'ຫຼວງນ້ຳທາ' },
  'Luang Prabang': { en: 'Luang Prabang', lo: 'ຫຼວງພະບາງ' },
  Oudomxay: { en: 'Oudomxay', lo: 'ອຸດົມໄຊ' },
  Phongsaly: { en: 'Phongsaly', lo: 'ຜົ້ງສາລີ' },
  Salavan: { en: 'Salavan', lo: 'ສາລະວັນ' },
  Savannakhet: { en: 'Savannakhet', lo: 'ສະຫວັນນະເຂດ' },
  Vientiane: { en: 'Vientiane Province', lo: 'ແຂວງວຽງຈັນ' },
  'Vientiane Capital': { en: 'Vientiane Capital', lo: 'ນະຄອນຫຼວງວຽງຈັນ' },
  Xaignabouli: { en: 'Xaignabouli', lo: 'ໄຊຍະບູລີ' },
  Xaisomboun: { en: 'Xaisomboun', lo: 'ໄຊສົມບູນ' },
  Xekong: { en: 'Xekong', lo: 'ເຊກອງ' },
  Xiangkhouang: { en: 'Xiangkhouang', lo: 'ຊຽງຂວາງ' },
}

export const destinations: Destination[] = [
  {
    id: 'luang-prabang',
    name: { en: 'Luang Prabang', lo: 'ຫຼວງພະບາງ' },
    province: 'Luang Prabang',
    region: 'North',
    category: 'Culture',
    unesco: true,
    featured: true,
    coords: [102.135, 19.886],
    summary: {
      en: 'The former royal capital, set where the Nam Khan meets the Mekong. Gilded temples, French-colonial houses and saffron-robed monks make it the heart of any trip to Laos.',
      lo: 'ອະດີດນະຄອນຫຼວງຂອງລາຊະອານາຈັກ ຕັ້ງຢູ່ບ່ອນແມ່ນ້ຳຄານໄຫຼມາບັນຈົບກັບແມ່ນ້ຳຂອງ. ວັດວາອາຮາມທີ່ສວຍງາມ, ເຮືອນແບບອານານິຄົມຝຣັ່ງ ແລະ ພຣະສົງສາມະເນນ ເຮັດໃຫ້ທີ່ນີ້ເປັນຫົວໃຈຂອງການທ່ອງທ່ຽວລາວ.',
    },
    highlights: [
      { en: 'Wat Xieng Thong, the city’s most famous temple', lo: 'ວັດຊຽງທອງ ວັດທີ່ມີຊື່ສຽງທີ່ສຸດຂອງເມືອງ' },
      { en: 'Morning alms giving (Tak Bat) at sunrise', lo: 'ການຕັກບາດຕອນເຊົ້າ' },
      { en: 'Sunset from the top of Mount Phousi', lo: 'ຊົມຕາເວັນຕົກຢູ່ເທິງພູສີ' },
      { en: 'Night market and the Royal Palace Museum', lo: 'ຕະຫຼາດມືດ ແລະ ພິພິທະພັນພະລາຊະວັງ' },
    ],
    stay: { en: '2–4 days', lo: '2–4 ມື້' },
    gettingThere: {
      en: 'Laos–China Railway from Vientiane or Vang Vieng, or fly into Luang Prabang International Airport.',
      lo: 'ນັ່ງລົດໄຟລາວ-ຈີນ ຈາກວຽງຈັນ ຫຼື ວັງວຽງ, ຫຼື ບິນມາສະໜາມບິນສາກົນຫຼວງພະບາງ.',
    },
    tip: {
      en: 'Watch the alms giving quietly from a distance — no flash, no blocking the monks’ path.',
      lo: 'ຊົມການຕັກບາດຢ່າງງຽບໆ ຢູ່ຫ່າງໆ — ຢ່າໃຊ້ແຟລດ ແລະ ຢ່າຂວາງທາງພຣະສົງ.',
    },
  },
  {
    id: 'kuang-si',
    name: { en: 'Kuang Si Falls', lo: 'ນ້ຳຕົກຕາດກວາງຊີ' },
    province: 'Luang Prabang',
    region: 'North',
    category: 'Nature',
    featured: true,
    coords: [101.994, 19.749],
    summary: {
      en: 'Tiered turquoise pools tumbling through the forest about 30 km from Luang Prabang. There is a bear rescue centre right by the entrance path.',
      lo: 'ນ້ຳຕົກຫຼາຍຊັ້ນ ສີຟ້າຄາມ ໄຫຼຜ່ານປ່າ ຫ່າງຈາກຫຼວງພະບາງປະມານ 30 ກມ. ມີສູນຊ່ວຍເຫຼືອໝີ ຢູ່ໃກ້ທາງເຂົ້າ.',
    },
    highlights: [
      { en: 'Swim in the lower pools', lo: 'ລອຍນ້ຳໃນອ່າງນ້ຳຊັ້ນລຸ່ມ' },
      { en: 'Hike to the top of the main fall', lo: 'ຍ່າງຂຶ້ນໄປເທິງຍອດນ້ຳຕົກ' },
      { en: 'Asiatic black bear rescue centre', lo: 'ສູນຊ່ວຍເຫຼືອໝີດຳ' },
    ],
    stay: { en: 'Half day', lo: 'ເຄິ່ງມື້' },
    gettingThere: {
      en: 'Tuk-tuk, minivan or scooter from Luang Prabang (about 45 minutes).',
      lo: 'ລົດຕຸກຕຸກ, ລົດຕູ້ ຫຼື ລົດຈັກ ຈາກຫຼວງພະບາງ (ປະມານ 45 ນາທີ).',
    },
    tip: { en: 'Go early in the morning to have the pools almost to yourself.', lo: 'ໄປແຕ່ເຊົ້າ ຈະມີຄົນໜ້ອຍ ແລະ ບັນຍາກາດງາມກວ່າ.' },
  },
  {
    id: 'pak-ou',
    name: { en: 'Pak Ou Caves', lo: 'ຖ້ຳຕິ່ງ (ປາກອູ)' },
    province: 'Luang Prabang',
    region: 'North',
    category: 'Culture',
    coords: [102.218, 20.05],
    summary: {
      en: 'Two caves in a limestone cliff above the Mekong, filled with thousands of Buddha images left by pilgrims over centuries.',
      lo: 'ຖ້ຳສອງແຫ່ງໃນໜ້າຜາຫີນປູນ ເໜືອແມ່ນ້ຳຂອງ ເຕັມໄປດ້ວຍພຣະພຸດທະຮູບຫຼາຍພັນອົງ ທີ່ຜູ້ຄົນນຳມາຖວາຍຫຼາຍສັດຕະວັດ.',
    },
    highlights: [
      { en: 'Scenic Mekong boat ride', lo: 'ນັ່ງເຮືອຊົມວິວແມ່ນ້ຳຂອງ' },
      { en: 'Upper and lower caves', lo: 'ຖ້ຳເທິງ ແລະ ຖ້ຳລຸ່ມ' },
      { en: 'Stops at riverside villages', lo: 'ແວ່ຢ້ຽມຊົມບ້ານແຄມນ້ຳ' },
    ],
    stay: { en: 'Half day', lo: 'ເຄິ່ງມື້' },
    gettingThere: {
      en: 'Slow boat upriver from Luang Prabang, or by road and a short river crossing.',
      lo: 'ນັ່ງເຮືອຂຶ້ນຈາກຫຼວງພະບາງ ຫຼື ໄປທາງລົດ ແລ້ວຂ້າມຟາກສັ້ນໆ.',
    },
    tip: { en: 'Bring a small torch for the darker upper cave.', lo: 'ເອົາໄຟສາຍໄປນຳ ເພາະຖ້ຳເທິງມືດ.' },
  },
  {
    id: 'nong-khiaw',
    name: { en: 'Nong Khiaw & Muang Ngoi', lo: 'ໜອງຂຽວ ແລະ ເມືອງງອຍ' },
    province: 'Luang Prabang',
    region: 'North',
    category: 'Nature',
    featured: true,
    coords: [102.617, 20.567],
    summary: {
      en: 'Sleepy villages wrapped by limestone peaks along the Nam Ou river. Perfect for slow days, viewpoints and river trips.',
      lo: 'ບ້ານງຽບສະຫງົບ ລ້ອມຮອບດ້ວຍພູຫີນປູນ ລຽບແມ່ນ້ຳອູ. ເໝາະສຳລັບການພັກຜ່ອນ, ຂຶ້ນຈຸດຊົມວິວ ແລະ ລ່ອງເຮືອ.',
    },
    highlights: [
      { en: 'Sunrise hike to a viewpoint above the valley', lo: 'ຍ່າງຂຶ້ນຈຸດຊົມວິວເບິ່ງຕາເວັນຂຶ້ນ' },
      { en: 'Boat to car-free Muang Ngoi', lo: 'ນັ່ງເຮືອໄປເມືອງງອຍ ບ່ອນທີ່ບໍ່ມີລົດ' },
      { en: 'Caves and village treks', lo: 'ທ່ຽວຖ້ຳ ແລະ ຍ່າງປ່າໄປບ້ານ' },
    ],
    stay: { en: '2–3 days', lo: '2–3 ມື້' },
    gettingThere: { en: 'Minivan or bus from Luang Prabang.', lo: 'ລົດຕູ້ ຫຼື ລົດເມ ຈາກຫຼວງພະບາງ.' },
    tip: { en: 'Carry cash — ATMs are limited in small villages.', lo: 'ພົກເງິນສົດໄປນຳ — ຕູ້ ATM ມີໜ້ອຍໃນບ້ານນ້ອຍ.' },
  },
  {
    id: 'luang-namtha',
    name: { en: 'Luang Namtha', lo: 'ຫຼວງນ້ຳທາ' },
    province: 'Luang Namtha',
    region: 'North',
    category: 'Adventure',
    coords: [101.405, 20.95],
    summary: {
      en: 'Gateway to the Nam Ha National Protected Area, known for community-based treks through forest and ethnic minority villages.',
      lo: 'ປະຕູສູ່ປ່າສະຫງວນແຫ່ງຊາດນ້ຳຮ້າ ມີຊື່ສຽງດ້ານການຍ່າງປ່າ ແບບທ່ອງທ່ຽວຊຸມຊົນ ຜ່ານປ່າ ແລະ ບ້ານຊົນເຜົ່າ.',
    },
    highlights: [
      { en: 'Multi-day jungle treks with local guides', lo: 'ຍ່າງປ່າຫຼາຍມື້ ກັບໄກດ໌ທ້ອງຖິ່ນ' },
      { en: 'Cycling through rice fields', lo: 'ຖີບລົດຖີບຜ່ານທົ່ງນາ' },
      { en: 'Night market', lo: 'ຕະຫຼາດມືດ' },
    ],
    stay: { en: '2–3 days', lo: '2–3 ມື້' },
    gettingThere: { en: 'Bus from Luang Prabang or Oudomxay.', lo: 'ລົດເມຈາກຫຼວງພະບາງ ຫຼື ອຸດົມໄຊ.' },
    tip: {
      en: 'Book treks through licensed eco-tourism operators so income reaches the villages.',
      lo: 'ຈອງທົວກັບບໍລິສັດທີ່ມີໃບອະນຸຍາດ ເພື່ອໃຫ້ລາຍຮັບເຖິງຊາວບ້ານ.',
    },
  },
  {
    id: 'phongsaly',
    name: { en: 'Phongsaly', lo: 'ຜົ້ງສາລີ' },
    province: 'Phongsaly',
    region: 'North',
    category: 'Adventure',
    coords: [102.1, 21.68],
    summary: {
      en: 'The remote, mountainous far north. Cool air, ancient tea trees and some of the country’s most traditional hill-tribe villages.',
      lo: 'ພາກເໜືອສຸດ ທີ່ຫ່າງໄກ ແລະ ເປັນພູດອຍ. ອາກາດເຢັນ, ຕົ້ນຊາເກົ່າແກ່ ແລະ ບ້ານຊົນເຜົ່າທີ່ຮັກສາວັດທະນະທຳດັ້ງເດີມ.',
    },
    highlights: [
      { en: 'Tea villages and old tea trees', lo: 'ບ້ານປູກຊາ ແລະ ຕົ້ນຊາບູຮານ' },
      { en: 'Views from Phou Fa', lo: 'ຊົມວິວຈາກພູຟ້າ' },
      { en: 'Treks to hill-tribe villages', lo: 'ຍ່າງໄປຢ້ຽມບ້ານຊົນເຜົ່າ' },
    ],
    stay: { en: '2–3 days', lo: '2–3 ມື້' },
    gettingThere: {
      en: 'Long mountain bus rides via Oudomxay — the journey is part of the adventure.',
      lo: 'ນັ່ງລົດເມຜ່ານພູດອຍ ທາງອຸດົມໄຊ — ການເດີນທາງກໍແມ່ນສ່ວນໜຶ່ງຂອງການຜະຈົນໄພ.',
    },
    tip: { en: 'Pack warm layers; nights get cold in the dry season.', lo: 'ເອົາເສື້ອກັນໜາວໄປນຳ ກາງຄືນໜາວໃນລະດູແລ້ງ.' },
  },
  {
    id: 'mekong-slow-boat',
    name: { en: 'Mekong Slow Boat', lo: 'ລ່ອງເຮືອຊ້າ ແມ່ນ້ຳຂອງ' },
    province: 'Bokeo',
    region: 'North',
    category: 'Adventure',
    coords: [100.413, 20.276],
    summary: {
      en: 'A classic two-day river journey from Huay Xai on the Thai border down the Mekong to Luang Prabang, overnighting in Pakbeng.',
      lo: 'ການເດີນທາງທາງນ້ຳ 2 ມື້ ຈາກຫ້ວຍຊາຍ ຊາຍແດນໄທ ລ່ອງແມ່ນ້ຳຂອງ ໄປຫາຫຼວງພະບາງ ແລະ ພັກແຮມທີ່ປາກແບ່ງ.',
    },
    highlights: [
      { en: 'Two days of river scenery', lo: 'ຊົມວິວແມ່ນ້ຳຂອງ 2 ມື້' },
      { en: 'Overnight in Pakbeng village', lo: 'ພັກແຮມທີ່ປາກແບ່ງ' },
      { en: 'Nearby Bokeo forest and gibbon zipline tours', lo: 'ປ່າບໍ່ແກ້ວ ແລະ ທົວສະລິງຊົມຊະນີ' },
    ],
    stay: { en: '2 days', lo: '2 ມື້' },
    gettingThere: {
      en: 'Cross from Chiang Khong (Thailand) to Huay Xai, then board the boat.',
      lo: 'ຂ້າມຈາກຊຽງຂອງ (ໄທ) ມາຫ້ວຍຊາຍ ແລ້ວລົງເຮືອ.',
    },
    tip: { en: 'Bring a cushion, snacks and water — seats are wooden benches.', lo: 'ເອົາໝອນ, ເຂົ້າໜົມ ແລະ ນ້ຳໄປນຳ — ບ່ອນນັ່ງເປັນແປ້ນໄມ້.' },
  },
  {
    id: 'vieng-xai',
    name: { en: 'Vieng Xai Caves', lo: 'ຖ້ຳວຽງໄຊ' },
    province: 'Houaphan',
    region: 'North',
    category: 'History',
    coords: [104.232, 20.418],
    summary: {
      en: 'A network of caves that sheltered the Pathet Lao leadership and thousands of people during the heavy bombing of the Indochina War.',
      lo: 'ເຄືອຂ່າຍຖ້ຳ ທີ່ເປັນບ່ອນລີ້ໄພຂອງການນຳປະເທດລາວ ແລະ ປະຊາຊົນຫຼາຍພັນຄົນ ໃນໄລຍະສົງຄາມອິນດູຈີນ.',
    },
    highlights: [
      { en: 'Audio-guided cave tour', lo: 'ທົວຖ້ຳ ພ້ອມສຽງບັນຍາຍ' },
      { en: 'Leaders’ cave residences', lo: 'ຖ້ຳທີ່ພັກຂອງການນຳ' },
      { en: 'Peaceful karst landscape', lo: 'ທິວທັດພູຫີນປູນ ທີ່ສະຫງົບ' },
    ],
    stay: { en: '1–2 days', lo: '1–2 ມື້' },
    gettingThere: { en: 'Via Sam Neua town, by bus or domestic flight.', lo: 'ຜ່ານເມືອງຊຳເໜືອ ດ້ວຍລົດເມ ຫຼື ຍົນພາຍໃນ.' },
    tip: { en: 'Tours run at set times — check the schedule when you arrive.', lo: 'ທົວມີເວລາກຳນົດ — ກວດເບິ່ງຕາຕະລາງເມື່ອໄປຮອດ.' },
  },
  {
    id: 'vang-vieng',
    name: { en: 'Vang Vieng', lo: 'ວັງວຽງ' },
    province: 'Vientiane',
    region: 'Central',
    category: 'Adventure',
    featured: true,
    coords: [102.448, 18.923],
    summary: {
      en: 'Dramatic karst mountains beside the Nam Song river. Laos’ outdoor playground for kayaking, caving, climbing and hot-air balloon rides.',
      lo: 'ພູຫີນປູນສວຍງາມ ລຽບແມ່ນ້ຳຊອງ. ສະຖານທີ່ກິດຈະກຳກາງແຈ້ງ ພາຍເຮືອຄາຢັກ, ທ່ຽວຖ້ຳ, ປີນຜາ ແລະ ຂີ່ບານລູນ.',
    },
    highlights: [
      { en: 'Kayaking or tubing on the Nam Song', lo: 'ພາຍເຮືອຄາຢັກ ຫຼື ລ່ອງຢາງໃນນ້ຳຊອງ' },
      { en: 'Blue Lagoon swimming holes', lo: 'ລອຍນ້ຳທີ່ບລູລາກູນ' },
      { en: 'Sunrise hot-air balloon', lo: 'ຂີ່ບານລູນຕອນເຊົ້າ' },
      { en: 'Viewpoint hikes', lo: 'ຍ່າງຂຶ້ນຈຸດຊົມວິວ' },
    ],
    stay: { en: '2–3 days', lo: '2–3 ມື້' },
    gettingThere: {
      en: 'Laos–China Railway from Vientiane or Luang Prabang, or by road.',
      lo: 'ລົດໄຟລາວ-ຈີນ ຈາກວຽງຈັນ ຫຼື ຫຼວງພະບາງ, ຫຼື ທາງລົດ.',
    },
    tip: { en: 'Wear a helmet on scooters and check rental bikes before riding.', lo: 'ໃສ່ໝວກກັນກະທົບ ແລະ ກວດລົດເຊົ່າກ່ອນຂັບ.' },
  },
  {
    id: 'vientiane',
    name: { en: 'Vientiane', lo: 'ນະຄອນຫຼວງວຽງຈັນ' },
    province: 'Vientiane Capital',
    region: 'Central',
    category: 'Culture',
    featured: true,
    coords: [102.633, 17.976],
    summary: {
      en: 'The relaxed capital on the Mekong. Golden stupas, café culture and riverside sunsets — one of the calmest capitals in Asia.',
      lo: 'ນະຄອນຫຼວງທີ່ສະຫງົບ ລຽບແມ່ນ້ຳຂອງ. ພະທາດສີທອງ, ຮ້ານກາເຟ ແລະ ຕາເວັນຕົກແຄມຂອງ — ໜຶ່ງໃນນະຄອນຫຼວງທີ່ສະຫງົບທີ່ສຸດໃນອາຊີ.',
    },
    highlights: [
      { en: 'Pha That Luang, the national symbol', lo: 'ພະທາດຫຼວງ ສັນຍາລັກຂອງຊາດ' },
      { en: 'Patuxai victory monument', lo: 'ອະນຸສາວະລີປະຕູໄຊ' },
      { en: 'Wat Si Saket and its thousands of Buddha images', lo: 'ວັດສີສະເກດ ແລະ ພຣະພຸດທະຮູບຫຼາຍພັນອົງ' },
      { en: 'COPE Visitor Centre on UXO recovery', lo: 'ສູນ COPE ກ່ຽວກັບລະເບີດບໍ່ທັນແຕກ' },
      { en: 'Mekong riverside night market', lo: 'ຕະຫຼາດມືດແຄມຂອງ' },
    ],
    stay: { en: '1–2 days', lo: '1–2 ມື້' },
    gettingThere: {
      en: 'Wattay International Airport, or the Friendship Bridge from Nong Khai (Thailand).',
      lo: 'ສະໜາມບິນສາກົນວັດໄຕ ຫຼື ຂົວມິດຕະພາບ ຈາກໜອງຄາຍ (ໄທ).',
    },
    tip: { en: 'Rent a bicycle — the centre is flat and compact.', lo: 'ເຊົ່າລົດຖີບ — ໃຈກາງເມືອງພຽງ ແລະ ບໍ່ກວ້າງ.' },
  },
  {
    id: 'buddha-park',
    name: { en: 'Buddha Park (Xieng Khuan)', lo: 'ສວນພຣະ (ວັດຊຽງຄວນ)' },
    province: 'Vientiane Capital',
    region: 'Central',
    category: 'Culture',
    coords: [102.765, 17.912],
    summary: {
      en: 'A quirky riverside garden of more than 200 concrete Buddhist and Hindu sculptures, including a giant reclining Buddha.',
      lo: 'ສວນແຄມແມ່ນ້ຳ ທີ່ມີຮູບປັ້ນພຸດ ແລະ ຮິນດູ ຫຼາຍກວ່າ 200 ຮູບ ລວມທັງພຣະນອນອົງໃຫຍ່.',
    },
    highlights: [
      { en: 'Giant reclining Buddha', lo: 'ພຣະນອນອົງໃຫຍ່' },
      { en: 'Climb the “pumpkin” sculpture', lo: 'ປີນຂຶ້ນຮູບປັ້ນ “ໝາກອຶ”' },
      { en: 'Riverside setting', lo: 'ບັນຍາກາດແຄມແມ່ນ້ຳ' },
    ],
    stay: { en: 'Half day', lo: 'ເຄິ່ງມື້' },
    gettingThere: {
      en: 'About 25 km from central Vientiane by tuk-tuk or local bus.',
      lo: 'ຫ່າງຈາກໃຈກາງວຽງຈັນ ປະມານ 25 ກມ ໄປດ້ວຍຕຸກຕຸກ ຫຼື ລົດເມ.',
    },
    tip: { en: 'Combine it with a trip to the Friendship Bridge area.', lo: 'ໄປພ້ອມກັບການທ່ຽວເຂດຂົວມິດຕະພາບ.' },
  },
  {
    id: 'plain-of-jars',
    name: { en: 'Plain of Jars', lo: 'ທົ່ງໄຫຫີນ' },
    province: 'Xiangkhouang',
    region: 'Central',
    category: 'History',
    unesco: true,
    featured: true,
    coords: [103.153, 19.431],
    summary: {
      en: 'Thousands of mysterious megalithic stone jars scattered across the Xiangkhouang plateau, near the town of Phonsavan.',
      lo: 'ໄຫຫີນບູຮານລຶກລັບຫຼາຍພັນໜ່ວຍ ກະຈາຍຢູ່ທົ່ວພູພຽງຊຽງຂວາງ ໃກ້ເມືອງໂພນສະຫວັນ.',
    },
    highlights: [
      { en: 'Jar Sites 1, 2 and 3', lo: 'ທົ່ງໄຫຫີນ ແຫ່ງທີ 1, 2 ແລະ 3' },
      { en: 'Learn about UXO at local centres', lo: 'ຮຽນຮູ້ກ່ຽວກັບລະເບີດບໍ່ທັນແຕກ' },
      { en: 'Cool upland scenery', lo: 'ທິວທັດພູພຽງ ອາກາດເຢັນ' },
    ],
    stay: { en: '1–2 days', lo: '1–2 ມື້' },
    gettingThere: {
      en: 'Fly or take a bus to Phonsavan, then tour by tuk-tuk or with a guide.',
      lo: 'ບິນ ຫຼື ນັ່ງລົດເມໄປໂພນສະຫວັນ ແລ້ວທ່ຽວດ້ວຍຕຸກຕຸກ ຫຼື ກັບໄກດ໌.',
    },
    tip: {
      en: 'Unexploded ordnance remains in the area — always stay between the marked safe paths.',
      lo: 'ຍັງມີລະເບີດບໍ່ທັນແຕກໃນເຂດນີ້ — ຍ່າງສະເພາະເສັ້ນທາງທີ່ໝາຍໄວ້ເທົ່ານັ້ນ.',
    },
  },
  {
    id: 'kong-lor',
    name: { en: 'Kong Lor Cave', lo: 'ຖ້ຳກອງລໍ' },
    province: 'Khammouane',
    region: 'Central',
    category: 'Nature',
    featured: true,
    coords: [104.814, 17.955],
    summary: {
      en: 'A river cave running several kilometres through a limestone mountain, explored by motorboat in near-total darkness.',
      lo: 'ຖ້ຳທີ່ມີແມ່ນ້ຳໄຫຼຜ່ານພູຫີນປູນ ຍາວຫຼາຍກິໂລແມັດ ທ່ຽວດ້ວຍເຮືອຈັກ ໃນຄວາມມືດ.',
    },
    highlights: [
      { en: 'Boat ride through the cave', lo: 'ນັ່ງເຮືອຜ່ານຖ້ຳ' },
      { en: 'Lit stalactite chamber', lo: 'ຫ້ອງຫີນຍ້ອຍ ທີ່ມີໄຟສ່ອງ' },
      { en: 'Surrounding karst valley', lo: 'ຮ່ອມພູຫີນປູນອ້ອມຂ້າງ' },
    ],
    stay: { en: '1–2 days', lo: '1–2 ມື້' },
    gettingThere: { en: 'By road from Thakhek or on the Thakhek Loop.', lo: 'ທາງລົດຈາກທ່າແຂກ ຫຼື ຕາມເສັ້ນທາງວົງຮອບທ່າແຂກ.' },
    tip: {
      en: 'Wear sandals — you may need to step out while the boat crosses shallows.',
      lo: 'ໃສ່ເກີບແຕະ — ອາດຕ້ອງລົງຍ່າງ ເມື່ອເຮືອຜ່ານບ່ອນນ້ຳຕື້ນ.',
    },
  },
  {
    id: 'thakhek-loop',
    name: { en: 'Thakhek Loop', lo: 'ເສັ້ນທາງວົງຮອບທ່າແຂກ' },
    province: 'Khammouane',
    region: 'Central',
    category: 'Adventure',
    coords: [104.833, 17.41],
    summary: {
      en: 'A multi-day motorbike loop from Thakhek through karst valleys, caves and lagoons — a favourite road trip for independent travellers.',
      lo: 'ເສັ້ນທາງຂີ່ລົດຈັກຫຼາຍມື້ ຈາກທ່າແຂກ ຜ່ານຮ່ອມພູຫີນປູນ, ຖ້ຳ ແລະ ບຶງນ້ຳ — ເປັນທີ່ນິຍົມຂອງນັກທ່ອງທ່ຽວ.',
    },
    highlights: [
      { en: 'Caves and swimming lagoons', lo: 'ຖ້ຳ ແລະ ບຶງນ້ຳສຳລັບລອຍ' },
      { en: 'Mountain passes and viewpoints', lo: 'ເສັ້ນທາງຂ້າມພູ ແລະ ຈຸດຊົມວິວ' },
      { en: 'Homestays along the route', lo: 'ໂຮມສະເຕ ຕາມເສັ້ນທາງ' },
    ],
    stay: { en: '3–4 days', lo: '3–4 ມື້' },
    gettingThere: {
      en: 'Start in Thakhek, reachable by bus from Vientiane or Pakse.',
      lo: 'ເລີ່ມທີ່ທ່າແຂກ ນັ່ງລົດເມຈາກວຽງຈັນ ຫຼື ປາກເຊ.',
    },
    tip: {
      en: 'Only ride if you are experienced; rent from shops that provide a map and helmet.',
      lo: 'ຂີ່ສະເພາະຜູ້ມີປະສົບການ; ເຊົ່າຮ້ານທີ່ໃຫ້ແຜນທີ່ ແລະ ໝວກກັນກະທົບ.',
    },
  },
  {
    id: 'savannakhet',
    name: { en: 'Savannakhet', lo: 'ສະຫວັນນະເຂດ' },
    province: 'Savannakhet',
    region: 'Central',
    category: 'Culture',
    coords: [104.75, 16.55],
    summary: {
      en: 'A laid-back Mekong town with a charming French-colonial quarter and a small dinosaur museum.',
      lo: 'ເມືອງແຄມຂອງທີ່ສະບາຍໆ ມີເຂດເມືອງເກົ່າແບບອານານິຄົມຝຣັ່ງ ແລະ ພິພິທະພັນໄດໂນເສົາ.',
    },
    highlights: [
      { en: 'Colonial old town and St Theresa’s Church', lo: 'ເມືອງເກົ່າ ແລະ ໂບດເຊນເທເຣຊາ' },
      { en: 'Dinosaur Museum', lo: 'ພິພິທະພັນໄດໂນເສົາ' },
      { en: 'Mekong sunsets', lo: 'ຕາເວັນຕົກແຄມຂອງ' },
    ],
    stay: { en: '1 day', lo: '1 ມື້' },
    gettingThere: {
      en: 'Bus from Vientiane or Pakse, or the bridge from Mukdahan (Thailand).',
      lo: 'ລົດເມຈາກວຽງຈັນ ຫຼື ປາກເຊ, ຫຼື ຂ້າມຂົວຈາກມຸກດາຫານ (ໄທ).',
    },
    tip: { en: 'Explore the old town on foot in the late afternoon.', lo: 'ຍ່າງທ່ຽວເມືອງເກົ່າ ໃນຕອນແລງ.' },
  },
  {
    id: 'bolaven',
    name: { en: 'Bolaven Plateau', lo: 'ພູພຽງບໍລະເວນ' },
    province: 'Champasak',
    region: 'South',
    category: 'Nature',
    featured: true,
    coords: [106.23, 15.18],
    summary: {
      en: 'A cool, fertile highland famous for coffee farms and powerful waterfalls, easily explored from Pakse.',
      lo: 'ພູພຽງອາກາດເຢັນ ອຸດົມສົມບູນ ມີຊື່ສຽງດ້ານສວນກາເຟ ແລະ ນ້ຳຕົກໃຫຍ່ ເດີນທາງສະດວກຈາກປາກເຊ.',
    },
    highlights: [
      { en: 'Tad Fane twin waterfalls', lo: 'ນ້ຳຕົກຕາດຟານ (ນ້ຳຕົກຄູ່)' },
      { en: 'Coffee farm tours around Paksong', lo: 'ທ່ຽວສວນກາເຟ ອ້ອມປາກຊ່ອງ' },
      { en: 'Tad Yuang and Tad Lo falls', lo: 'ນ້ຳຕົກຕາດຢວງ ແລະ ຕາດເລາະ' },
    ],
    stay: { en: '2–3 days', lo: '2–3 ມື້' },
    gettingThere: {
      en: 'Scooter or tour from Pakse (Pakse International Airport).',
      lo: 'ລົດຈັກ ຫຼື ທົວ ຈາກປາກເຊ (ສະໜາມບິນສາກົນປາກເຊ).',
    },
    tip: {
      en: 'Waterfalls are strongest in the rainy season, but roads are easier in the dry season.',
      lo: 'ນ້ຳຕົກງາມທີ່ສຸດໃນລະດູຝົນ ແຕ່ເສັ້ນທາງສະດວກກວ່າໃນລະດູແລ້ງ.',
    },
  },
  {
    id: 'wat-phou',
    name: { en: 'Wat Phou', lo: 'ວັດພູ' },
    province: 'Champasak',
    region: 'South',
    category: 'History',
    unesco: true,
    featured: true,
    coords: [105.822, 14.849],
    summary: {
      en: 'Ancient Khmer temple ruins climbing a mountainside above the Mekong — older than Angkor Wat, and a UNESCO World Heritage site.',
      lo: 'ຊາກປາສາດຂອມບູຮານ ຕັ້ງຢູ່ເທິງຄ້ອຍພູ ເໜືອແມ່ນ້ຳຂອງ — ເກົ່າແກ່ກວ່ານະຄອນວັດ ແລະ ເປັນມໍລະດົກໂລກ UNESCO.',
    },
    highlights: [
      { en: 'Stone staircase to the upper sanctuary', lo: 'ຂັ້ນໄດຫີນ ຂຶ້ນສູ່ປາສາດເທິງ' },
      { en: 'Views over the Mekong plain', lo: 'ຊົມວິວທົ່ງພຽງແມ່ນ້ຳຂອງ' },
      { en: 'Wat Phou festival (usually February)', lo: 'ບຸນວັດພູ (ປົກກະຕິ ເດືອນກຸມພາ)' },
    ],
    stay: { en: '1 day', lo: '1 ມື້' },
    gettingThere: { en: 'Near Champasak town, south of Pakse by road.', lo: 'ໃກ້ເມືອງຈຳປາສັກ ທາງໃຕ້ຂອງປາກເຊ.' },
    tip: { en: 'Visit early in the morning before the heat.', lo: 'ໄປແຕ່ເຊົ້າ ກ່ອນອາກາດຈະຮ້ອນ.' },
  },
  {
    id: 'si-phan-don',
    name: { en: '4,000 Islands (Si Phan Don)', lo: 'ສີ່ພັນດອນ' },
    province: 'Champasak',
    region: 'South',
    category: 'Nature',
    featured: true,
    coords: [105.918, 14.0],
    summary: {
      en: 'Where the Mekong spreads out into countless islands near the Cambodian border. Hammocks, bicycles and sunsets on Don Det and Don Khon.',
      lo: 'ບ່ອນທີ່ແມ່ນ້ຳຂອງແຜ່ກວ້າງ ເປັນເກາະດອນນັບບໍ່ຖ້ວນ ໃກ້ຊາຍແດນກຳປູເຈຍ. ແຂວນເປ, ຖີບລົດ ແລະ ຊົມຕາເວັນຕົກ ທີ່ດອນເດດ ແລະ ດອນຄອນ.',
    },
    highlights: [
      {
        en: 'Khone Phapheng, among the largest waterfalls in Southeast Asia by volume',
        lo: 'ນ້ຳຕົກຄອນພະເພັງ ໜຶ່ງໃນນ້ຳຕົກທີ່ມີປະລິມານນ້ຳຫຼາຍທີ່ສຸດໃນອາຊີຕາເວັນອອກສ່ຽງໃຕ້',
      },
      { en: 'Li Phi (Somphamit) falls', lo: 'ນ້ຳຕົກຫຼີຜີ (ສົມພາມິດ)' },
      { en: 'Cycling around Don Det and Don Khon', lo: 'ຖີບລົດຮອບດອນເດດ ແລະ ດອນຄອນ' },
      { en: 'Rare Irrawaddy dolphins (sightings not guaranteed)', lo: 'ປາຂ່າ ທີ່ຫາຍາກ (ບໍ່ແນ່ນອນວ່າຈະເຫັນ)' },
    ],
    stay: { en: '2–3 days', lo: '2–3 ມື້' },
    gettingThere: {
      en: 'Bus or minivan from Pakse to Nakasang, then a short boat ride.',
      lo: 'ລົດເມ ຫຼື ລົດຕູ້ ຈາກປາກເຊ ໄປນາກະຊັງ ແລ້ວນັ່ງເຮືອຂ້າມ.',
    },
    tip: { en: 'Slow down — this is the best place in Laos to simply relax.', lo: 'ພັກຜ່ອນໃຫ້ສະບາຍ — ນີ້ແມ່ນບ່ອນທີ່ດີທີ່ສຸດ ສຳລັບການພັກຜ່ອນ.' },
  },
]

export interface Itinerary {
  id: string
  title: L
  days: number
  description: L
  stops: { id: string; days: L }[]
}

const day = (en: string) => ({ en: `Day ${en}`, lo: `ມື້ທີ ${en}` })

export const itineraries: Itinerary[] = [
  {
    id: 'classic',
    title: { en: 'Classic Laos', lo: 'ລາວຄລາສສິກ' },
    days: 7,
    description: { en: 'The essential first trip — easy to do by train.', lo: 'ເສັ້ນທາງສຳລັບຄັ້ງທຳອິດ — ເດີນທາງດ້ວຍລົດໄຟໄດ້ສະດວກ.' },
    stops: [
      { id: 'vientiane', days: day('1') },
      { id: 'vang-vieng', days: day('2–3') },
      { id: 'luang-prabang', days: day('4–5') },
      { id: 'kuang-si', days: day('6') },
      { id: 'pak-ou', days: day('7') },
    ],
  },
  {
    id: 'north',
    title: { en: 'Northern Mountains', lo: 'ພູດອຍພາກເໜືອ' },
    days: 10,
    description: { en: 'Rivers, treks and hill-tribe villages for slow travellers.', lo: 'ແມ່ນ້ຳ, ຍ່າງປ່າ ແລະ ບ້ານຊົນເຜົ່າ ສຳລັບຜູ້ມັກທ່ຽວຊ້າໆ.' },
    stops: [
      { id: 'mekong-slow-boat', days: day('1–2') },
      { id: 'luang-prabang', days: day('3–4') },
      { id: 'nong-khiaw', days: day('5–7') },
      { id: 'luang-namtha', days: day('8–10') },
    ],
  },
  {
    id: 'south',
    title: { en: 'Southern Laos', lo: 'ລາວໃຕ້' },
    days: 8,
    description: { en: 'Caves, waterfalls, coffee, Khmer ruins and island life.', lo: 'ຖ້ຳ, ນ້ຳຕົກ, ກາເຟ, ປາສາດຂອມ ແລະ ຊີວິດເກາະດອນ.' },
    stops: [
      { id: 'kong-lor', days: day('1–2') },
      { id: 'bolaven', days: day('3–4') },
      { id: 'wat-phou', days: day('5') },
      { id: 'si-phan-don', days: day('6–8') },
    ],
  },
]

export const essentials: { icon: string; title: L; text: L }[] = [
  {
    icon: '🛂',
    title: { en: 'Visa', lo: 'ວີຊາ' },
    text: {
      en: 'Many nationalities can get a 30-day visa on arrival at international airports and major land borders, or apply online for an e-Visa. Some ASEAN citizens are visa-exempt. Check the latest rules before you fly.',
      lo: 'ຫຼາຍສັນຊາດ ສາມາດຂໍວີຊາ 30 ມື້ ເມື່ອມາຮອດສະໜາມບິນສາກົນ ແລະ ດ່ານຊາຍແດນຫຼັກ ຫຼື ຂໍ e-Visa ທາງອອນລາຍ. ພົນລະເມືອງອາຊຽນບາງປະເທດ ຍົກເວັ້ນວີຊາ. ກວດສອບລະບຽບລ່າສຸດກ່ອນເດີນທາງ.',
    },
  },
  {
    icon: '💵',
    title: { en: 'Money', lo: 'ເງິນ' },
    text: {
      en: 'The currency is the Lao Kip (LAK). ATMs are common in cities, but carry cash for villages, markets and tuk-tuks.',
      lo: 'ສະກຸນເງິນແມ່ນ ເງິນກີບ (LAK). ຕູ້ ATM ມີຫຼາຍໃນເມືອງ ແຕ່ຄວນພົກເງິນສົດ ສຳລັບບ້ານນອກ, ຕະຫຼາດ ແລະ ຕຸກຕຸກ.',
    },
  },
  {
    icon: '🚆',
    title: { en: 'Getting around', lo: 'ການເດີນທາງ' },
    text: {
      en: 'The Laos–China Railway links Vientiane, Vang Vieng and Luang Prabang in a few hours. Elsewhere, use buses, minivans, domestic flights, river boats and tuk-tuks.',
      lo: 'ລົດໄຟລາວ-ຈີນ ເຊື່ອມວຽງຈັນ, ວັງວຽງ ແລະ ຫຼວງພະບາງ ພາຍໃນບໍ່ເທົ່າໃດຊົ່ວໂມງ. ບ່ອນອື່ນໃຊ້ລົດເມ, ລົດຕູ້, ຍົນພາຍໃນ, ເຮືອ ແລະ ຕຸກຕຸກ.',
    },
  },
  {
    icon: '🙏',
    title: { en: 'Temple etiquette', lo: 'ມາລະຍາດໃນວັດ' },
    text: {
      en: 'Cover shoulders and knees, remove shoes before entering, never touch someone’s head, and don’t point your feet at people or Buddha images. Women should not touch monks.',
      lo: 'ນຸ່ງເຄື່ອງປົກບ່າ ແລະ ຫົວເຂົ່າ, ຖອດເກີບກ່ອນເຂົ້າ, ຢ່າຈັບຫົວຜູ້ອື່ນ ແລະ ຢ່າຊີ້ຕີນໃສ່ຄົນ ຫຼື ພຣະພຸດທະຮູບ. ແມ່ຍິງບໍ່ຄວນແຕະຕ້ອງພຣະສົງ.',
    },
  },
  {
    icon: '⚠️',
    title: { en: 'Stay safe', lo: 'ຄວາມປອດໄພ' },
    text: {
      en: 'Unexploded ordnance (UXO) remains in some rural areas — stay on marked paths and follow local guides. Wear a helmet on motorbikes and get travel insurance.',
      lo: 'ຍັງມີລະເບີດບໍ່ທັນແຕກ (UXO) ໃນບາງເຂດຊົນນະບົດ — ຍ່າງຕາມເສັ້ນທາງທີ່ໝາຍໄວ້ ແລະ ເຮັດຕາມຄຳແນະນຳຂອງໄກດ໌. ໃສ່ໝວກກັນກະທົບ ແລະ ຊື້ປະກັນໄພການເດີນທາງ.',
    },
  },
  {
    icon: '📱',
    title: { en: 'Staying connected', lo: 'ອິນເຕີເນັດ' },
    text: {
      en: 'Local SIM cards with data are cheap and sold at airports and phone shops (bring your passport). Wi-Fi is common in hotels and cafés.',
      lo: 'ຊິມກາດທ້ອງຖິ່ນ ລາຄາຖືກ ມີຂາຍທີ່ສະໜາມບິນ ແລະ ຮ້ານໂທລະສັບ (ເອົາໜັງສືຜ່ານແດນໄປນຳ). ໂຮງແຮມ ແລະ ຮ້ານກາເຟ ສ່ວນຫຼາຍມີ Wi-Fi.',
    },
  },
  {
    icon: '🔌',
    title: { en: 'Practical info', lo: 'ຂໍ້ມູນທົ່ວໄປ' },
    text: {
      en: 'Power is 230V; most sockets take flat or round two-pin plugs. Time zone is UTC+7.',
      lo: 'ໄຟຟ້າ 230V; ປລັກສ່ວນຫຼາຍເປັນແບບສອງຂາ ແປ ຫຼື ມົນ. ເຂດເວລາ UTC+7.',
    },
  },
  {
    icon: '🚨',
    title: { en: 'Emergency numbers', lo: 'ເບີໂທສຸກເສີນ' },
    text: {
      en: 'Police 1191 · Ambulance 1195 · Fire 1190. Save your embassy’s number and your hotel address in Lao.',
      lo: 'ຕຳຫຼວດ 1191 · ລົດໂຮງໝໍ 1195 · ດັບເພີງ 1190. ບັນທຶກເບີສະຖານທູດ ແລະ ທີ່ຢູ່ໂຮງແຮມໄວ້.',
    },
  },
]

export const phrases = [
  { lao: 'ສະບາຍດີ', roman: 'Sabaidee', meaning: 'Hello' },
  { lao: 'ຂອບໃຈ', roman: 'Khop jai', meaning: 'Thank you' },
  { lao: 'ຂອບໃຈຫຼາຍໆ', roman: 'Khop jai lai lai', meaning: 'Thank you very much' },
  { lao: 'ບໍ່ເປັນຫຍັງ', roman: 'Bo pen nyang', meaning: 'No problem / You’re welcome' },
  { lao: 'ເທົ່າໃດ?', roman: 'Tao dai?', meaning: 'How much?' },
  { lao: 'ຂໍໂທດ', roman: 'Kho thot', meaning: 'Sorry / Excuse me' },
  { lao: 'ແຊບຫຼາຍ', roman: 'Saep lai', meaning: 'Very delicious' },
  { lao: 'ລາກ່ອນ', roman: 'La kon', meaning: 'Goodbye' },
]

export const foods: { name: L; text: L }[] = [
  { name: { en: 'Khao niao', lo: 'ເຂົ້າໜຽວ' }, text: { en: 'Sticky rice, eaten by hand with almost every meal.', lo: 'ກິນດ້ວຍມື ເກືອບທຸກຄາບ.' } },
  {
    name: { en: 'Larb', lo: 'ລາບ' },
    text: { en: 'Minced meat or fish salad with herbs, lime and toasted rice — the national dish.', lo: 'ຊີ້ນ ຫຼື ປາສັບ ປຸງກັບຜັກຫອມ, ໝາກນາວ ແລະ ເຂົ້າຂົ້ວ — ອາຫານປະຈຳຊາດ.' },
  },
  { name: { en: 'Tam mak hoong', lo: 'ຕຳໝາກຫຸ່ງ' }, text: { en: 'Spicy green papaya salad, Lao style.', lo: 'ຕຳໝາກຫຸ່ງ ລົດແຊບແບບລາວ.' } },
  { name: { en: 'Khao piak sen', lo: 'ເຂົ້າປຽກເສັ້ນ' }, text: { en: 'Comforting rice-noodle soup, perfect for breakfast.', lo: 'ເຝີເສັ້ນແປ້ງເຂົ້າ ເໝາະສຳລັບອາຫານເຊົ້າ.' } },
  { name: { en: 'Or lam', lo: 'ເອາະຫຼາມ' }, text: { en: 'Herby, slightly bitter stew from Luang Prabang.', lo: 'ແກງພື້ນເມືອງຫຼວງພະບາງ ມີລົດຂົມໜ້ອຍໆ.' } },
  { name: { en: 'Lao coffee', lo: 'ກາເຟລາວ' }, text: { en: 'Strong Bolaven Plateau coffee, often with sweet condensed milk.', lo: 'ກາເຟເຂັ້ມຈາກພູພຽງບໍລະເວນ ມັກໃສ່ນົມຂົ້ນຫວານ.' } },
]

export type Season = 'cool' | 'hot' | 'rainy'

export const seasons: Record<Season, { name: L; text: L; color: string }> = {
  cool: {
    name: { en: 'Cool & dry', lo: 'ລະດູໜາວ-ແລ້ງ' },
    text: { en: 'Clear skies and comfortable days. Peak season — book ahead.', lo: 'ທ້ອງຟ້າແຈ່ມໃສ ອາກາດສະບາຍ. ຊ່ວງທ່ອງທ່ຽວສູງສຸດ — ຄວນຈອງລ່ວງໜ້າ.' },
    color: '#2f7d6d',
  },
  hot: {
    name: { en: 'Hot', lo: 'ລະດູຮ້ອນ' },
    text: { en: 'Very hot before the rains. Great for rivers and waterfalls; hazy in the north.', lo: 'ຮ້ອນຫຼາຍ ກ່ອນຝົນຈະມາ. ເໝາະກັບແມ່ນ້ຳ ແລະ ນ້ຳຕົກ; ພາກເໜືອອາດມີໝອກຄວັນ.' },
    color: '#d97706',
  },
  rainy: {
    name: { en: 'Green & rainy', lo: 'ລະດູຝົນ' },
    text: { en: 'Lush landscapes, full waterfalls, fewer visitors. Some rural roads get difficult.', lo: 'ທິວທັດຂຽວສົດ ນ້ຳຕົກເຕັມທີ່ ນັກທ່ອງທ່ຽວໜ້ອຍ. ເສັ້ນທາງຊົນນະບົດບາງແຫ່ງອາດລຳບາກ.' },
    color: '#1d3f8f',
  },
}

// Jan → Dec
export const monthSeasons: Season[] = ['cool', 'cool', 'hot', 'hot', 'hot', 'rainy', 'rainy', 'rainy', 'rainy', 'rainy', 'cool', 'cool']

export const months: L[] = [
  { en: 'Jan', lo: 'ມັງກອນ' },
  { en: 'Feb', lo: 'ກຸມພາ' },
  { en: 'Mar', lo: 'ມີນາ' },
  { en: 'Apr', lo: 'ເມສາ' },
  { en: 'May', lo: 'ພຶດສະພາ' },
  { en: 'Jun', lo: 'ມິຖຸນາ' },
  { en: 'Jul', lo: 'ກໍລະກົດ' },
  { en: 'Aug', lo: 'ສິງຫາ' },
  { en: 'Sep', lo: 'ກັນຍາ' },
  { en: 'Oct', lo: 'ຕຸລາ' },
  { en: 'Nov', lo: 'ພະຈິກ' },
  { en: 'Dec', lo: 'ທັນວາ' },
]

// Festivals follow the lunar calendar, so the month is approximate.
export const festivals: { month: number; name: L; text: L }[] = [
  { month: 1, name: { en: 'Wat Phou Festival', lo: 'ບຸນວັດພູ' }, text: { en: 'Pilgrimage at the ancient Khmer temple in Champasak.', lo: 'ງານບຸນທີ່ວັດພູ ແຂວງຈຳປາສັກ.' } },
  { month: 3, name: { en: 'Pi Mai Lao (New Year)', lo: 'ບຸນປີໃໝ່ລາວ' }, text: { en: 'Mid-April water festival — expect to get splashed!', lo: 'ບຸນຫົດນ້ຳ ກາງເດືອນເມສາ — ກຽມຕົວປຽກ!' } },
  { month: 9, name: { en: 'Boun Ok Phansa & boat racing', lo: 'ບຸນອອກພັນສາ ແລະ ບຸນຊ່ວງເຮືອ' }, text: { en: 'End of Buddhist Lent, floating lanterns and river boat races.', lo: 'ອອກພັນສາ, ໄຫຼເຮືອໄຟ ແລະ ແຂ່ງເຮືອ.' } },
  { month: 10, name: { en: 'That Luang Festival', lo: 'ບຸນພະທາດຫຼວງ' }, text: { en: 'Vientiane’s biggest festival at the golden stupa.', lo: 'ງານບຸນໃຫຍ່ທີ່ສຸດຂອງວຽງຈັນ ທີ່ພະທາດຫຼວງ.' } },
]
