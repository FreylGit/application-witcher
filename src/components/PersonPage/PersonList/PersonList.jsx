import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './PersonList.module.css'

const PersonList = (props) => {
  const { person } = props
  return (
    <ul className={styles.list__container}>
      {person.map((item) => {
        return (
          <li className={styles.list__item} key={item.id}>
            <Link to={`/person/${item.id}`}>
              <img
                className={styles.person__photo}
                src={item.imagePath}
                alt={item.name}
              />
              <p>{item.name}</p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
PersonList.propTypes = {
  person: PropTypes.array,
}
export default PersonList
