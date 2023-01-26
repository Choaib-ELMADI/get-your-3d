import { Model } from './components';
import { models } from './data';


export const routes = [
    {
      path: '/models/Head Piston',
      element: <Model model={ models[0] } />,
    }, 
    {
      path: '/models/Item-2',
      element: <Model model={ models[1] } />,
    }, 
    {
      path: '/models/Item-3',
      element: <Model model={ models[2] } />,
    }, 
    {
      path: '/models/Item-4',
      element: <Model model={ models[3] } />,
    },
    {
      path: '/models/Item-5',
      element: <Model model={ models[4] } />,
    }, 
    {
      path: '/models/Item-6',
      element: <Model model={ models[5] } />,
    }, 
    {
      path: '/models/Item-7',
      element: <Model model={ models[6] } />,
    }, 
    {
      path: '/models/Item-8',
      element: <Model model={ models[7] } />,
    }
];