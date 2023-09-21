import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-100 flex-column' style={{}}>
        <h1 className='text-white'>Go to gallery</h1>
        <Link to="/gallery">
        <Button>
            Gallery
        </Button>
        </Link>
    </div>
  )
}

export default Home