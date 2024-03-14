import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='grid place-content-center h-screen'>
      <div className=''>
        <h1 className='text-3xl text-white'>
          Error404
        </h1>
        <p className='text-slate-300'>Fermeture Sans-Souci n'exerce pas dans cette catégorie</p>
        <Link to="/" className='w-full inline-block text-center'>
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

export default Error404