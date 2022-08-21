import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button {...props} className="font-normal text-black hover:text-white hover:bg-black text-center rounded-full border border-black uppercase px-4 py-2 min-w-[220px] transition-colors">
      {children}
    </button>
  )
}

export default Button