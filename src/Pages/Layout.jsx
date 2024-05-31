import React from 'react'

function Layout() {
  return (
    <div>
      <div class='mb-3'>
        <label for='exampleFormControlInput1' class='form-label'>
          Email address
        </label>
      </div>
      <div class='mb-3'>
        <label for='exampleFormControlTextarea1' class='form-label'>
          Example textarea
        </label>
        <textarea
          class='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
        ></textarea>
      </div>
    </div>
  )
}

export default Layout
