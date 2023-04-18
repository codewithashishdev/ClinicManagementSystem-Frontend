import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewBill() {
  return (
    <>
      <div>
  <h3  className='text-primary mx-5'>
   <ins>Bill</ins>
</h3>  
<nav className="navbar navbar-light bg-primary">
  <form className="form bg-primary form-inline">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">BillID :</span>
      </div>
      <input type="number" className="form-control mx-2" placeholder="BillID" aria-label="BillID" aria-describedby="basic-addon1"/>
      <button class="btn btn-outline-primary bg-white" type="button">
      <Link className="nav-link"> View </Link> </button>
    </div>
  </form>
</nav>
</div>
    </>
  )
}
