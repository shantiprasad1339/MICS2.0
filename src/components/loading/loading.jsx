import React from 'react'

function Loading() {
 
  return (
    <>
   {/* <div className="loading-container">
  <div className="loading-text">
    <span>M</span>
    <span>I</span>
    <span>C</span>
    <span>S</span>
 
  </div>
</div> */} 
<div class="wrap-loader">
    <div class="loader">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="wrap-text">
            <div class="text"><span>M</span><span>I</span><span>C</span><span>S</span> <span>...</span></div>
        </div>
    </div>
    <div class="loader-text">Wait to Enter MICS..</div>
</div>
    </>


  )
}

export default Loading