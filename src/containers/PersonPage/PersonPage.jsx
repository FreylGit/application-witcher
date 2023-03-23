import { useState, useEffect } from 'react'

import PersonList from '@components/PersonPage/PersonList'
import PersonNavigation from '@components/PersonPage/PersonList/PersonNavigation'
import ErrorMessage from '@components/ErrorMessage'
import { getApiResource } from '@utils/network'
import { API_PERSON_ALL } from '@constants/api'
import { useQueryParapms } from '@hooks/useQueryParapms'
import { getPersonPageId } from '@services/getPersonData'
import styles from './PersonPage.module.css'

const PersonPage = () => {
  const [person, setPerson] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [counterPage, setCounterPage] = useState(1)
  const [errorApi, setErrorApi] = useState(false)
  const query = useQueryParapms()
  const queryPage = query.get('page')

  const getResurse = async (url) => {
    const response = await getApiResource(url)

    const personList = response.persons.map(({ id, name, imagePath }) => {
      return {
        id,
        name,
        imagePath,
      }
    })

    if (!personList.length == 0) {
      setPerson(personList)
      setErrorApi(false)
      setPrevPage(response.previousPage)
      setNextPage(response.nextPage)
    } else {
      setErrorApi(true)
    }
    setCounterPage(getPersonPageId(url))
  }

  useEffect(() => {
    getResurse(API_PERSON_ALL + queryPage)
  }, [])

  return (
    <>
      <PersonNavigation
        getResurse={getResurse}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {errorApi ? <ErrorMessage /> : person && <PersonList person={person} />}
    </>
  )
}

export default PersonPage
