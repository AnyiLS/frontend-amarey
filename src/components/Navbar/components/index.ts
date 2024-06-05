import React from 'react';

/** Components */
const SubmenuWay = React.lazy(() => import('./SubmenuWay'));
const SubmenuSolution = React.lazy(() => import('./SubmenuSolution'));
const SubmenuContact = React.lazy(() => import('./SubmenuContact'));
const SubmenuEtic = React.lazy(() => import('./SubmenuEtic'));
const SubmenuWorkUs = React.lazy(() => import('./SubmenuWorkUs'));
const SubmenuActualidad = React.lazy(() => import('./SubmenuActualidad'));

const useNavbarComponents = () => ({
  SubmenuActualidad,
  SubmenuContact,
  SubmenuEtic,
  SubmenuSolution,
  SubmenuWay,
  SubmenuWorkUs,
});

export default useNavbarComponents