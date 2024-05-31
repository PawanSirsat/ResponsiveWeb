import React from 'react'

function Popover() {
  return (
    <div>
      <a
        tabindex='0'
        class='btn btn-lg btn-danger m-1'
        role='button'
        data-bs-toggle='popover'
        data-bs-trigger='focus'
        title='Dismissible popover'
        data-bs-content="And here's some amazing content. It's very engaging. Right?"
      >
        Dismissible popover
      </a>
      <span
        class='d-inline-block'
        tabindex='0'
        data-bs-toggle='popover'
        data-bs-trigger='hover focus'
        data-bs-content='Disabled popover'
      >
        <button class='btn btn-primary' type='button' disabled>
          Disabled button
        </button>
      </span>
    </div>
  )
}

export default Popover
