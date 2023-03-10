import { Model } from './components'
import { models } from './data'

export const routes = [
  {
    path: '/models/head-piston',
    element: <Model model={models[0]} />,
  },
  {
    path: '/models/connect-rod',
    element: <Model model={models[1]} />,
  },
  {
    path: '/models/connect-rod-cover',
    element: <Model model={models[2]} />,
  },
  {
    path: '/models/crank-shaft',
    element: <Model model={models[3]} />,
  },
  {
    path: '/models/driving-gear',
    element: <Model model={models[4]} />,
  },
  {
    path: '/models/shaft',
    element: <Model model={models[5]} />,
  },
  {
    path: '/models/valve',
    element: <Model model={models[6]} />,
  },
  {
    path: '/models/retainer',
    element: <Model model={models[7]} />,
  },
  {
    path: '/models/cam-shaft',
    element: <Model model={models[8]} />,
  },
  {
    path: '/models/rocker-arm',
    element: <Model model={models[9]} />,
  },
  {
    path: '/models/valve-assembly',
    element: <Model model={models[10]} />,
  },
  {
    path: '/models/single-cylinder-engine',
    element: <Model model={models[11]} />,
  },
  {
    path: '/models/robotic-gripper',
    element: <Model model={models[12]} />,
  },
  {
    path: '/models/manual-clamp',
    element: <Model model={models[13]} />,
  },
  {
    path: '/models/opposed-piston',
    element: <Model model={models[14]} />,
  }, 
  {
    path: '/models/micro-servo-sg90',
    element: <Model model={models[15]} />,
  }, 
  {
    path: '/models/solar-light-follower',
    element: <Model model={models[16]} />,
  },
]
