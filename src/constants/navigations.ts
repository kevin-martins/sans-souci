import { NavigationProps, OptionsProps } from "@/models/navigation"

const navigationOptions: NavigationProps[] = [
  { value: 'Accueil', href: '/' },
  {
    value: "Secteur d'activité", href: '/realisations', champs: [
      { value: 'Alarmes et Domotique', href: '/realisations/alarmes-et-domotique' },
      { value: 'Portes et Portails', href: '/realisations/portes-et-portails' },
      { value: 'Volets roulants', href: '/realisations/volets-roulants' },
      { value: 'Fenêtres', href: '/realisations/fenetres' },
      { value: 'Vérandas', href: '/realisations/verandas' },
      { value: 'Stores', href: '/realisations/stores' },
    ]
  },
  { value: 'Contact', href: '/contact' },
]

export const options: OptionsProps[] = [
  { href: 'stores', value: 'stores' },
  { href: 'alarmes-et-domotique', value: 'alarmes et domotique' },
  { href: 'portes-et-portails', value: 'portes et portails' },
  { href: 'verandas', value: 'vérandas' },
  { href: 'fenetres', value: 'fenêtres' },
  { href: 'volets-roulants', value: 'volets roulants' },
]