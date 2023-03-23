import { useParams } from 'react-router'
import { getApiResource } from '../../utils/network'
import styles from './PersonInformationPage.module.css'
import { useEffect, useState } from 'react'
import { API_PERSON_BY_ID } from '@constants/api'
import NotFoundPage from '@containers/NotFoundPage'
const PersonInformationPage = ({ match }) => {
  const [loading, setLoading] = useState(false)
  const id = useParams().id
  const [personInfo, setPersonInfo] = useState(null)
  useEffect(() => {
    ;(async () => {
      const res = await getApiResource(API_PERSON_BY_ID + id)
      if (res) {
        setPersonInfo({
          name: res.name,
          description: res.description,
          imagePath: res.imagePath,
        })
        setLoading(true)
      }
      console.log(res)
    })()
  }, [])
  return (
    <>
      {loading ? (
        <div className={styles.wrapper}>
          <span className={styles.person__name}>{personInfo.name}</span>
          <div className={styles.container}>
            <img
              className={styles.person__image}
              src={personInfo.imagePath}
              alt={personInfo.name}
            />
            <div className={styles.person__description}>
              <p>{personInfo.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  )
}

export default PersonInformationPage
