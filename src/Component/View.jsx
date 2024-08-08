import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {

  const {id} = useParams()
  const data = useSelector((state) => state.crudData.value)
  const user = data.find((user) => user.id == id)
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border p-5">
        {
          <>
          <h3>User Details</h3>
          Id : <strong>{user.id}</strong> <br />
          Name : <strong>{user.name}</strong> <br />
          Email : <strong>{user.email}</strong>
          </>
        }
      </div>
    </div>
  )
}

export default View
