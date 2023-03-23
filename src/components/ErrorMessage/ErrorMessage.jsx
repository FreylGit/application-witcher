import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        This page is currently not available <br />
        Try to visit it later
      </p>
    </>
  )
}

export default ErrorMessage
