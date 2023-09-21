import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>NOTHING TO SEE HERE... GO TO THE GALLERY</h1>
        <Link to="/">
        <Button>HOME</Button>
        </Link>
    </div>
  )
}

export default Error