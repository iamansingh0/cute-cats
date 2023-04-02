import React from 'react'
import { useState, useEffect } from 'react'
import Footer from './Footer'
const url = 'https://api.thecatapi.com/v1/images/search?limit=10'

const cats = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    // console.log('useEffect Set Up')
    const getData = async (url) => {
      const resp = await fetch(url)
      const data = await resp.json()
      setCats(data)
      // console.log(data)
    }
    getData(url)
  }, [])

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <>
      <section className="container">
        <div className="box">
          <h2 className="h2">Random Cute Cats</h2>
          <button type="button" onClick={handleRefresh} className="btn">
            <span className="material-symbols-outlined" title='refresh'>refresh</span>
          </button>
        </div>
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
      </section>
      <Footer />
    </>
  )
}

export default cats
