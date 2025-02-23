import type { ComponentProps } from 'react'

interface InputRootprops extends ComponentProps<'div'> {
  className?: string
  error?: boolean
}

export function InputRoot({
  error = false,
  className,
  ...props
}: InputRootprops) {
  return (
    <div
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2
         focus-within:border-gray-100 data-[error=true]:border-danger"
      data-error={error}
      {...props}
    />
  )
}

interface IconInputprops extends ComponentProps<'span'> {
  className?: string
}

export function IconInput({ className, ...props }: IconInputprops) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface Inputprops extends ComponentProps<'input'> {
  className?: string
}

export function Input({ className, ...props }: Inputprops) {
  return <input className={`flex-1 outline-0 ${className}`} {...props} />
}
