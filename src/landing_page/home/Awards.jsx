import React from 'react'

function Awards() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src="media/largestBroker.svg" alt="" />
          </div>
          <div className="col-6 p-5 mt-5">
            <h1>Largest Stock broker in India</h1>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa in quam, ullam ut necessitatibus? Lorem ipsum dolor sit amet.</p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li><p>Futures & Options</p></li>
                  <li><p>Commodity derivative</p></li>
                  <li><p>Currency derivative</p></li>
                </ul>
              </div>

              <div className="col-6">
                <ul>
                  <li><p>Stocks & IPO's</p></li>
                  <li><p>Direct mutual funds</p></li>
                  <li><p>Bonds & Governed Securities</p></li>
                </ul>
              </div>
              <img src="public\media\pressLogos.png" alt="" style={{width: '90%'}}/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Awards
