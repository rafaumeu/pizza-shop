import { Link, LinkProps, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

export function NavLink({ children, ...props }: LinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      className={cn(
        'flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground',
        pathname === props.to && 'text-foreground',
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
