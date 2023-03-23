import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Switch,
} from 'react-router-dom'
import routesConfig from '@routes/routesConfig'
import PersonPage from '@containers/PersonPage'
import NotFoundPage from '../NotFoundPage'
import HomePage from '@containers/HomePage'
import Header from '@components/Header'

import styles from './App.module.css'

const App = () => {
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={route.element}
                />
              )
            })}
            <Route path="/" element={<HomePage />} />
            <Route path="/persons" element={<PersonPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
