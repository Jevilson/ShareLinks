import React from 'react'

export default function ButtonBlue({ link, texto }) {
  return (
    <li>
      <a
        className="bg-4263EB hover:bg-364FC7 text-base font-sans h-14 flex items-center justify-center  text-white	uppercase mb-4 rounded-t-md rounded-b-md duration-300"
        href={link}
        target="_blank">{texto}</a>
    </li>
  )
}