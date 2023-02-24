
// You can use this types if you are using typescript.
// Response has more keys but we simplified to make it easier.

export interface Response {
  name: Name
  independent?: boolean
  status: string
  unMember: boolean
  currencies?: Record<string, {
    name: string,
    symbol: string
  }>
  capital?: string[]
  altSpellings: string[]
  region: string
  subregion?: string
  languages?: Record<string, string>
  translations: Record<string, {
    official: string
    common: string
  }>
  latlng: [number, number]
  landlocked: boolean
  borders?: string[]
  area: number
  demonyms?: Record<string, {
    f: string,
    m: string
  }>
  flag: string
  maps: Record<string,string>
  population: number
  fifa?: string
  car: {
    side: string,
    sign
  }
  timezones: string[]
  continents: string[]
  flags: Record<string, string>
  coatOfArms: Record<string, string>
  startOfWeek: string
  capitalInfo: {
    latlng: [number, number]
  }
  postalCode?: {
    format: string,
    regex: string
  }
}

export interface Name {
  common: string
  official: string
  nativeName?: {
    official: string
    common: string
  }
}