import React from 'react'

type FooterProps = {
    title: string,
    nav: Array<string>
}


export const Footer = ({title, nav}: FooterProps) => {
  return (
    <header>
        <div>This page is the main</div>
    </header>
  )
}