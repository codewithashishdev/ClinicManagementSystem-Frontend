import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import '../StyleSheets/BilDetail.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function BillDetail() {
  const[billDetail, setbillDetail] = useState([])
  const { patientID } = useParams();
  console.log('------',patientID)
  useEffect(()=>{

    let data =''
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:3001/staff/bill/${patientID}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      console.log(response)
      console.log(response.data.data)
      setbillDetail(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    });
    
},[])
console.log("BillDetail", billDetail)


let FinalBill = []
FinalBill.push(billDetail)
console.log("jay ho mangal pandey",FinalBill)

return (

    <MDBContainer className="py-5">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <MDBIcon  fab  icon="mdb"  size="4x"  className="ms-0" />
              <p className="pt-0 display-6"  style={{ color: "#5d9fc5" }}> Bill Detail</p>
            </MDBCol>
          </MDBContainer>
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted fw-bold ms-1 text-black">  To: <span style={{ color: "#5d9fc5" }}>Ashish Makwana</span> </li>
                <li className="text-muted fw-bold ms-1 text-black">Deplapara,</li>
                <li className="text-muted fw-bold ms-1 text-black">Gariyadhar,</li>
                <li className="text-muted fw-bold ms-1 text-black">Gujarat</li>
                <li className="text-muted fw-bold ms-1 text-black"> <MDBIcon fas icon="phone-alt" />+91 9510635154 </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
             <div id ="bill">
             </div>
             <p className="text-muted">Cinic Management </p>
           
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle"/>
                  <span className="fw-bold ms-1 text-black">ID:</span>
                  <span className="fw-bold ms-1 text-muted">
                  {FinalBill.map((item)=>{return(item.patientID)})}
                  </span>
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle"/>
                  <span className="fw-bold ms-1 text-black">Creation Date: </span>
                  <span className="fw-bold ms-1 text-muted">
                  {FinalBill.map((item)=>{return(item.date)})}
                  </span>
                </li>
                <li className="text-muted">
                <span className="fw-bold ms-1 text-black">Method:</span>
                
                <span className="fw-bold ms-1 text-muted">
                 {FinalBill.map((item)=>{return(item.Payment_type)})}
                  </span>
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle"/>
                  <span className="fw-bold ms-1 text-black">Status:</span>
               
                  <span className="fw-bold ms-1 text-muted">
                    {FinalBill.map((item)=>{return(item.payment_status)})}
                  </span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#009879" }}
              >
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Medicine</th>
                  <th scope="col">Numberof Unit</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col"> Total Amount</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {
                
              FinalBill.map((item)=>{
                return(
                  <tr>
                  <th scope="row" className="fw-bold ms-1 text-muted">{item.patientID}</th>
                  <td >{item.Medicine}</td>
                  <td >{item.Numberofunit}</td>
                  <td className="fw-bold ms-1 text-muted">₨ {item.unitPrice}</td>
                  <td className="fw-bold ms-1 text-muted">₨ {item.TotalAmount}</td>
                    </tr>
                )
              })}
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8">
              <p className="ms-3">
              </p>
            </MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled>
              </MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
                <span className="text-black" style={{ fontSize: "25px" }}>₨ {FinalBill.map((item)=>{return(item.TotalAmount)})}</span>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="10">
              <p>Thank you for your purchase</p>
              <span className="fw-bold ms-1 text-muted">
              Discription :
                  </span>
              <span className="text-muted mx-5 fw-bold ms-1 text-muted" name="" id="" cols="40" rows="5">
              {FinalBill.map((item)=>{return(item.discription)})}
              </span>
            
            </MDBCol>
            <MDBCol xl="2">
              <MDBBtn
                className="text-capitalize"
                style={{ backgroundColor: "#60bdf3" }}
              >
                Pay Now
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}



// import React,{useState,useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'


// export default function BillDetail() {
//   const[Bill,setBill] =useState([])
  
//   useEffect(()=>{
//     let data =''
    
//     let config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: 'http://localhost:3001/staff/bill/:patientID',
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       data : data
//     };
    
//     axios.request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
    
// },[])

//   return (
//     <>
//    <h3  className=' text-primary mx-5'>
//   <ins>Bill Status</ins>
//   </h3>  
//   <div className ="th" style={{marginTop:"150px"}}>
//     <table className='table'>
//       <thead>
//         <tr className='tr'>
//           <th className ="th" style={{textAlign:'center'}}>Patient ID</th>
//           <th className ="th" style={{textAlign:'center'}}>Appointment ID</th>
//           <th className ="th" style={{textAlign:'center'}}> Appointment Date</th>
//           <th className ="th" style={{textAlign:'center'}}>Medicine</th>
//           <th className ="th" style={{textAlign:'center'}}>Unit Price</th>
//           <th className ="th" style={{textAlign:'center'}}>Number of Unit</th>
//           <th className ="th" style={{textAlign:'center'}}> Total Amount</th>
//           <th className ="th" style={{textAlign:'center'}}>Payment Type </th>
//           <th className ="th" style={{textAlign:'center'}}>Payment Status </th>
//           <th className ="th" style={{textAlign:'center'}}>createdAt</th>
//           <th className ="th" style={{textAlign:'center'}}>updatedAt</th>
//           <th className ="th" style={{textAlign:'center'}}>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Bill.map((item,index)=>{
//           return(
//             <tr key={item.patientID}>
//               <th scope='row'>{index+1}</th>
//               <td className ="td">{item.appointmentID}</td>
//               <td className ="td">{item.date}</td>
//               <td className ="td">{item.Medicine}</td>
//               <td className ="td">{item.unitPrice}</td>
//               <td className ="td">{item.Numberofunit}</td>
//               <td className ="td">{item.TotalAmount}</td>
//               <td className ="td">{item.Payment_type}</td>
//               <td className ="td">{item.payment_status}</td>
//               <td className ="td" >{item.createdAt}</td>
//               <td className ="td">{item.updatedAt}</td>
//               <td>
//                 <Link to={`/staffdashboard/viewbill/${item.patientID}`}>
//                   <button className='btn btn-edit'>Details</button>
//                 </Link>
//               </td>
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   </div>
//   </>
//   )
// }






 