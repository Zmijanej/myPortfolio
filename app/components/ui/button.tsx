interface ButtonProps {
  text?: string;  // Making text optional with a default value
}

const Button = ({ text = "see more" }: ButtonProps)=> {
  
  return (
      <button className='hero-sec-btn group'>
        <span className='hero-sec-btn-span'>
          {text}
        </span>
      </button>
    
  )
}

export default Button