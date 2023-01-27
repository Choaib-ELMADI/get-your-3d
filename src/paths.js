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
    path: '/models/item-3',
    element: <Model model={models[2]} />,
  },
  {
    path: '/models/item-4',
    element: <Model model={models[3]} />,
  },
  {
    path: '/models/item-5',
    element: <Model model={models[4]} />,
  },
  {
    path: '/models/item-6',
    element: <Model model={models[5]} />,
  },
  {
    path: '/models/item-7',
    element: <Model model={models[6]} />,
  },
  {
    path: '/models/item-8',
    element: <Model model={models[7]} />,
  },
]
