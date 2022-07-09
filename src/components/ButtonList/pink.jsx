import React from 'react'

export default function ButtonPink({ link, texto }) {
  return (
    <li>
      <a
        className="bg-D6336C hover:bg-A61E4D text-base font-sans h-14 flex items-center justify-center  text-white	uppercase mb-4 rounded-t-md rounded-b-md duration-300"
        href={link}
        target="_blank">{texto}</a>
    </li>
  )
}