import React from 'react'

const LanguageSwitcher = () => {
  return (
    <div> <a href="/en/dashboard" locale="en">
    In english
  </a>{" "}
  |{" "}
  <a href="/fi/dashboard" locale="fi">
    In Finnish
  </a></div>
  )
}

export default LanguageSwitcher