import React from 'react'

export default function InfoBlack({ name, user }) {
  return (
    <>
      <h1 className="text-4xl mt-6 mb-2 text-00082F">{name}</h1>
      <p className="font-mono font-normal opacity-80 text-lg text-00082F">{user}</p>
    </>
  )
}