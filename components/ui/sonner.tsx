'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': '#ffffff',
          '--normal-text': '#2B1608',
          '--normal-border': 'rgba(43,22,8,0.22)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
