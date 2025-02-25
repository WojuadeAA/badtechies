import * as React from 'react'

export const Container = ({
  children,
  bg,
  id,
  treatAs,
}: React.PropsWithChildren<{
  bg?: `${string}-${string}`
  id?: string
  treatAs?: 'nav' | 'banner'
}>) => {
  return (
    <div
      className={`flex items-center justify-center w-full relative overflow-hidden transition-colors duration-200 ease-linear ${
        treatAs === 'banner' ? 'lg:!top-8' : null
      } ${bg}`}
      id={id}
    >
      <div
        className={`3xl:w-[60%] lg:w-[88%] w-11/12 md:py-20 py-16 ${
          treatAs === 'nav' ? '!py-0' : null
        } ${treatAs === 'banner' ? '!py-7' : null}`}
      >
        {children}
      </div>
    </div>
  )
}
