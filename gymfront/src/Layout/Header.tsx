import React from 'react'

type HeaderProps = {
    title: string,
    nav: Array<string>
}


export const Header = ({title, nav}: HeaderProps) => {
  return (
    <header>
        <div>This page is called { title }</div>
        <nav>
            <ul>
                <li>{ nav[0] }</li>
                <li>{ nav[1] }</li>
                <li>{ nav[2] }</li>
            </ul>
        </nav>

    </header>
  )
}