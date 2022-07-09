import React from 'react'

export default function InfoWhite({ name, user }) {
  return (
    <>
      <h1 className="text-4xl mt-6 mb-2 text-white">{name}</h1>
      <p className="font-mono font-normal opacity-80 text-lg text-white">{user}</p>
    </>
  )
}