import type { ComponentProps, ReactElement } from 'react'

export function IgStrong({
  children,
  className,
  ...props
}: ComponentProps<'strong'> & { className?: string }): ReactElement {
  return (
    <strong className={`_text-strong ${className ?? ''}`} {...props}>
      {children}
    </strong>
  )
}

export default IgStrong
