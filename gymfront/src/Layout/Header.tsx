import React from 'react'

type HeaderProps = {
    title: string,
    nav: Array<string>
}


export const Header = ({title, nav}: HeaderProps) => {
  return (
    <header>
        <div>This is the header</div>
    </header>
  )
}