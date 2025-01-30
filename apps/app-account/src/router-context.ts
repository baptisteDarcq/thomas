export const routerContexts = [
  {
    // Ajoute tous les fichiers présent dans (tabs)
    // Les autres ne seront pas exportés vers l'application client
    // car ils permettent uniquement la navigation vers le contenu ajouté dans (tabs)
    context: require.context('../app/', true, /.*\(tabs\).*/),
    prefix: '.',
  },
];
