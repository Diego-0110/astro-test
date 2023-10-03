import { useState, useEffect } from "react"
import Button from "./Button"
import styles from './RandomDuck.module.css'

async function callRandomDuck() {
  const response = await fetch('/api/duck')
  const resJSON = await response.json()
  return resJSON.duck
}

export default function RandomDuck () {
  const [duck, setDuck] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const updateDuck = async () => {
    setIsLoading(true)
    setDuck(await callRandomDuck())
    setIsLoading(false)
  }

  useEffect(() => {
    updateDuck()
  }, [])

  const handleClick = () => {
    updateDuck()
  }
  return (
    <section className={styles.container}>
      {!duck
        ? <div className={styles.duckFallback}></div>
        : <div className={styles.duckContainer}>
            <img className={styles.duck} src={duck} alt="Duck" />
          </div>}
      <Button handleClick={handleClick}>
        {isLoading? 'Loading...' : 'Quak!'}
      </Button>
    </section>
  )
}