import React from 'react'

const Marquee = () => {
  return (
    <div className="marquee-text p-0">
      <div className="marquee-text-track  p-0">
        <p>JavaScript</p>
        <p>TypeScript</p>
        <p>CSS</p>
        <p>TailwindCSS</p>
        <p>Accessibility</p>
        <p>React</p>
        <p>Angular</p>
        <p aria-hidden="true">JavaScript</p>
        <p aria-hidden="true">TypeScript</p>
        <p aria-hidden="true">CSS</p>
        <p aria-hidden="true">TailwindCSS</p>
        <p aria-hidden="true">Accessibility</p>
        <p aria-hidden="true">React</p>
        <p aria-hidden="true">Angular</p>
        
      </div>
    </div>
  )
}

export default Marquee