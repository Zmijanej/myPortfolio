
interface ButtonProps {
  text?: string;  // Making text optional with a default value
}

const Button = ({ text = "see more" }: ButtonProps)=> {
  
  return (
      <button className='flex justify-center items-center'>
        <div className='border border-[#f4ede5] rounded-full px-4 py-2'>
          {text}
        </div>
      </button>
    
  )
}

export default Button