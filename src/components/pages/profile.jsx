import React, { useEffect, useState } from 'react'
import {MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody, MDBCardImage,MDBBtn,MDBProgress,MDBProgressBar,MDBIcon,MDBListGroup,MDBListGroupItem} from 'mdb-react-ui-kit';
import axios from 'axios';
import PrimarySearchAppBar from '../items/header';

import { useNavigate } from 'react-router-dom';
  



function Profile() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();


  const navetoprofile = () => {
    // Redirect to the specified API link
    window.location.href = 'https://movieproject0001.pythonanywhere.com/admin/auth/user/';
  };
  const navetobooks = () => {
    // Redirect to the specified API link
    window.location.href = 'https://movieproject0001.pythonanywhere.com/admin/book/books/';
  };


  return (
   
    <div className='shadow-2xl h-screen shadow-black bg-white rounded-3xl '>
    
    <section className='h-screen bg-white flex justify-center'>
         
      <MDBContainer className="py-4 ">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-5">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">{}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

        
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
        <div className='gap-3'>
            <MDBBtn onClick={navetoprofile} className='m-2'>Users</MDBBtn>
            <MDBBtn onClick={navetobooks} className='m-2'>Books</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  )
}

export default Profile