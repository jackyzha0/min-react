import React, {useEffect, useState} from 'react'

export const Clock = () => {
  // create current time state
  const [now, setNow] = useState(new Date())

  // create an effect that sets the 'now' state to the current time
  // the empty array [] means it will be only run once when the component is 'mounted'
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // render
  return <p>It is now {now.toLocaleString()}</p>
}
