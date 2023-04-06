import React from 'react'
import Cat from './Cat'
import Footer from './Footer'

const cats = () => {


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
        <Cat />
      </section>
      <Footer />
    </>
  )
}

export default cats
