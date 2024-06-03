import React from 'react';

/** Components */
const SubmenuWay: React.LazyExoticComponent<React.FC<React.RefAttributes<SVGSVGElement>>> = React.lazy(() => import('./SubmenuWay'));
const SubmenuSolution: React.LazyExoticComponent<React.FC<React.RefAttributes<SVGSVGElement>>> = React.lazy(() => import('./SubmenuSolution'));
const SubmenuContact: React.LazyExoticComponent<React.FC<React.RefAttributes<SVGSVGElement>>> = React.lazy(() => import('./SubmenuContact'));
const SubmenuEtic: React.LazyExoticComponent<React.FC<React.RefAttributes<SVGSVGElement>>> = React.lazy(() => import('./SubmenuEtic'));
const SubmenuWorkUs: React.LazyExoticComponent<React.FC<React.RefAttributes<SVGSVGElement>>> = React.lazy(() => import('./SubmenuWorkUs'));
const SubmenuActualidad: React.LazyExoticComponent<React.FC<React.RefAttributes<SVGSVGElement>>> = React.lazy(() => import('./SubmenuActualidad'));

const useNavbarComponents = () => ({
  SubmenuActualidad,
  SubmenuContact,
  SubmenuEtic,
  SubmenuSolution,
  SubmenuWay,
  SubmenuWorkUs,
});

export default useNavbarComponents