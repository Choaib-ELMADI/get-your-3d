import { images } from './constants/index'

export const models = [
  /* Parts */

  {
    title: 'Head Piston',
    description: 'The Head Piston of a single cylinder engine.',
    software: 'Solidworks',
    pictures: [
      images.solidworks__1,
      images.solidworks__2,
      images.solidworks__3,
      images.solidworks__4,
    ],
    file: 'Head__Piston.SLDPRT',
    category: 'part',
    link: 'head-piston',
  },
  {
    title: 'Connect Rod',
    description: 'The connecting rod of a cylinder engine.',
    software: 'Solidworks',
    pictures: [
      images.connectRod__1,
      images.connectRod__2,
      images.connectRod__3,
      images.connectRod__4,
    ],
    file: 'Connecting__Rod.SLDPRT',
    category: 'part',
    link: 'connect-rod',
  },
  {
    title: 'Connect Rod Cover',
    description: 'The cover of the connect rod.',
    software: 'Solidworks',
    pictures: [
      images.connectRodCover__1,
      images.connectRodCover__2,
      images.connectRodCover__1,
      images.connectRodCover__2,
    ],
    file: 'Connecting__RodCover.SLDPRT',
    category: 'part',
    link: 'connect-rod-cover',
  },
  {
    title: 'Crank Shaft',
    description: 'Single cylinder engine crank shaft.',
    software: 'Solidworks',
    pictures: [
      images.CrankShaft__1,
      images.CrankShaft__2,
      images.CrankShaft__3,
      images.CrankShaft__4,
    ],
    file: 'Crankshaft.SLDPRT',
    category: 'part',
    link: 'crank-shaft',
  },
  {
    title: 'Driving Gear',
    description: 'A single cylinder engine driving gear.',
    software: 'Solidworks',
    pictures: [
      images.driving__gear1,
      images.driving__gear2,
      images.driving__gear3,
      images.driving__gear4,
    ],
    file: 'Driving__Gear.SLDPRT',
    category: 'part',
    link: 'driving-gear',
  },
  {
    title: 'Shaft',
    description: 'A single cylinder engine shaft.',
    software: 'Solidworks',
    pictures: [
      images.shaft__1,
      images.shaft__2,
      images.shaft__3,
      images.shaft__4,
    ],
    file: 'Shaft.SLDPRT',
    category: 'part',
    link: 'shaft',
  },
  {
    title: 'Engine Valve',
    description: 'A single cylinder engine valve.',
    software: 'Solidworks',
    pictures: [
      images.valve__1,
      images.valve__2,
      images.valve__1,
      images.valve__2,
    ],
    file: 'Valve.SLDPRT',
    category: 'part',
    link: 'valve',
  },
  {
    title: 'Engine Retainer',
    description: 'A single cylinder engine retainer.',
    software: 'Solidworks',
    pictures: [
      images.retainer__1,
      images.retainer__2,
      images.retainer__1,
      images.retainer__2,
    ],
    file: 'Retainer.SLDPRT',
    category: 'part',
    link: 'retainer',
  },
  {
    title: 'Cam Shaft',
    description: 'A single cylinder engine cam shaft.',
    software: 'Solidworks',
    pictures: [
      images.cam__shaft1,
      images.cam__shaft2,
      images.cam__shaft3,
      images.cam__shaft4,
    ],
    file: 'Cam__Shaft.SLDPRT',
    category: 'part',
    link: 'cam-shaft',
  },
  {
    title: 'Rocker Arm',
    description: 'A single cylinder engine rocker arm.',
    software: 'Solidworks',
    pictures: [
      images.rocker__arm1,
      images.rocker__arm2,
      images.rocker__arm3,
      images.rocker__arm4,
    ],
    file: 'Rocker__Arm.SLDPRT',
    category: 'part',
    link: 'rocker-arm',
  },

  /* Drawings */

  {
    title: 'Item 9',
    description: 'This is a description for the drawing 9 (fake)',
    software: 'Solidworks',
    pictures: [
      images.solidworks__1,
      images.solidworks__2,
      images.solidworks__3,
      images.solidworks__4,
    ],
    file: 'test.txt',
    category: 'drawing',
    link: 'item-9',
  },

  /* Assemblies */

  {
    title: 'Valve Assembly',
    description: 'This assembly consists of the valve part, the retainer and the valve spring retainer.',
    software: 'Solidworks',
    pictures: [
      images.valve__assembly1,
      images.valve__assembly2,
      images.valve__assembly3,
      images.valve__assembly4,
    ],
    file: 'Valve__Sub__Assembly.SLDASM',
    category: 'assembly',
    link: 'valve-assembly',
  },
]
