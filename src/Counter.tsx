import React, { useEffect, useState } from "react"

export const Counter = () => {
  const [ repetitions, setRepetitions ] = useState(10);
  const [ title, setTitle ] = useState('Get Ready')
  const [ action, setAction ] = useState('Starting in')
  const [ secondsLeft, setSecondsLeft ] = useState(5)
  const [ type, setType ] = useState<'get_ready' | 'strain' | 'relax' | 'finish'>('get_ready')

  const restart = () => {
    setType('get_ready')
    setSecondsLeft(5)
    setTitle('Get Ready')
    setAction('Starting in')
    setRepetitions(10)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('tick')
      if (type === 'get_ready' && secondsLeft <= 0) {
        setTitle('Strain')
        setAction('Strain for the next')
        setSecondsLeft(5)
        setType('strain')
      } else if (type === 'strain' && secondsLeft <= 0) {
        if (repetitions <= 1) {
          setType('finish')
        } else {
          setTitle('Relax')
          setAction('Relaxing for the next')
          setSecondsLeft(10)
          setType('relax')
          setRepetitions(repetitions - 1)
        }
      } else if (type === 'relax' && secondsLeft <= 0) {
        setTitle('Strain')
        setSecondsLeft(5)
        setAction('Strain for the next')
        setType('strain')
      } else {
        setSecondsLeft(secondsLeft - 1)
      }
    }, 1000);
    if (type === 'finish') {
      clearInterval(timer);
    }
    return () => {
      if (type !== 'finish') {
        clearInterval(timer);
      }
    }
  })

  if (type === 'finish') {
    return <>
      <h1>All done!</h1>
      <button onClick={ restart }>Start Again</button>
    </>
  }
  return <>
    <h1>{ title }</h1>
    <h1>{ action }: { secondsLeft }</h1>
    <h1>Repetitions left: { repetitions }</h1>
    <button onClick={ restart }>Restart</button>
  </>
}

export default Counter
