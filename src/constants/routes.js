export const routes = [
  { value: 'Accueil', to: '/' },
  {
    value: "Secteur d'activité", to: '/realisations', champs: [
      { value: 'Alarmes et Domotique', to: '/realisations/alarmes-et-domotique' },
      { value: 'Portes et Portails', to: '/realisations/portes-et-portails' },
      { value: 'Volets roulants', to: '/realisations/volets-roulants' },
      { value: 'Fenêtres', to: '/realisations/fenetres' },
      { value: 'Vérandas', to: '/realisations/verandas' },
      { value: 'Stores', to: '/realisations/stores' },
    ]
  },
  { value: 'Contact', to: '/contact' },
]