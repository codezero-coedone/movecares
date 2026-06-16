export const FIXED_DOMAINS = {
  root: "movecares.com",
  www: "www.movecares.com",
  busan: "busan.movecares.com",
  haeundae: "haeundae.movecares.com",
  seomyeon: "seomyeon.movecares.com",
  suyeong: "suyeong.movecares.com",
  dongnae: "dongnae.movecares.com",
} as const;

export const LANDING_HOST_BY_SUBDOMAIN = {
  busan: FIXED_DOMAINS.busan,
  haeundae: FIXED_DOMAINS.haeundae,
  seomyeon: FIXED_DOMAINS.seomyeon,
  suyeong: FIXED_DOMAINS.suyeong,
  dongnae: FIXED_DOMAINS.dongnae,
} as const;

export const INDEXABLE_HOSTS = [
  FIXED_DOMAINS.root,
  FIXED_DOMAINS.busan,
  FIXED_DOMAINS.haeundae,
  FIXED_DOMAINS.seomyeon,
  FIXED_DOMAINS.suyeong,
  FIXED_DOMAINS.dongnae,
] as const;

