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
    path: '/models/item-9',
    element: <Model model={models[8]} />,
  },
  {
    path: '/models/item-15',
    element: <Model model={models[9]} />,
  },
]
