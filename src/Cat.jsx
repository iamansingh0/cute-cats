import React, { useState, useEffect } from 'react'
const url = 'https://api.thecatapi.com/v1/images/search?limit=10'

const Cat = () => {
  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // console.log('useEffect Set Up')
    setTimeout(() => {
      const getData = async (url) => {
        const resp = await fetch(url)
        const data = await resp.json()
        setCats(data)
        // console.log(data)
      }
      getData(url)
      setIsLoading(false)
    }, 3500)
  }, [])

  if (isLoading) {
    return (
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
  return (
    <ul className="cats">
      {cats.map((cat) => {
        const { id, url } = cat
        return (
          <li key={id} className="cat">
            <img src={url} alt="cat" className="catImg" />
          </li>
        )
      })}
    </ul>
  )
}

export default Cat
