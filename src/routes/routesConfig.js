import HomePage from '@containers/HomePage'
import PersonPage from '@containers/PersonPage'
import NotFoundPage from '@containers/NotFoundPage'
import PersonInformationPage from '../containers/PersonInformationPage'
const routesConfig = [
  {
    path: '/',
    exact: true,
    element: <HomePage />,
  },
  {
    path: '/persons',
    exact: true,
    element: <PersonPage />,
  },
  {
    path: '/person/:id',
    exact: true,
    element: <PersonInformationPage match={':id'} />,
  },
  {
    path: '/not-found',
    exact: true,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    exact: false,
    element: <NotFoundPage />,
  },
]
export default routesConfig
