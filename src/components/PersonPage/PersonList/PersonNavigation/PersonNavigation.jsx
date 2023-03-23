import { Link } from 'react-router-dom'
import UiButton from '@ui/UiButton'
import PropTypes from 'prop-types'
import styles from './PersonNavigation.module.css'
import { getPersonPageId } from '@services/getPersonData'
const PersonNavigation = (props) => {
  const handleChangeNext = () => props.getResurse(props.nextPage)
  const handleChangePrev = () => props.getResurse(props.prevPage)
  return (
    <div className={styles.container}>
      <Link
        className={styles.buttons}
        to={`/persons?page=${props.counterPage - 1}`}
      >
        <UiButton
          text="Previos"
          onClick={handleChangePrev}
          disabled={
            props.prevPage === 'https://localhost:7269/api/person?page=0'
          }
        />
      </Link>
      <Link
        className={styles.buttons}
        to={`/persons?page=${props.counterPage + 1}`}
      >
        <UiButton
          text="Next"
          onClick={handleChangeNext}
          disabled={
            props.nextPage === 'https://localhost:7269/api/person?page=0'
          }
        />
      </Link>
    </div>
  )
}
PersonNavigation.propTypes = {
  getResurse: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}
export default PersonNavigation
