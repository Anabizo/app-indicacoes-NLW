import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  className?: string
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900 ${className}`}
      {...props}
    />
  )
}
