import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootprops extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({
  error = false,
  className,
  ...props
}: InputRootprops) {
  return (
    <div
      className={twMerge(
        'group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger',
        className
      )}
      data-error={error}
      {...props}
    />
  )
}

interface IconInputprops extends ComponentProps<'span'> {}

export function IconInput({ className, ...props }: IconInputprops) {
  return (
    <span
      className={twMerge(
        'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger',
        className
      )}
      {...props}
    />
  )
}

interface Inputprops extends ComponentProps<'input'> {}

export function Input({ className, ...props }: Inputprops) {
  return <input className={twMerge('flex-1 outline-0', className)} {...props} />
}
