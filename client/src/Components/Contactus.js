import React from 'react';
import { Row, Col } from 'antd';
import {Icon} from 'antd';



class Contactus extends React.Component{


	render(){
		return(
					<div style={{ margin:"0px 0px 30px 0px"}}>	
							<div style={{height:'100px', margin:"20px 0px 0px 0px"}}>
                             <h1 style={{ color: 'white' }}>Contact Information</h1>
                            </div>
                             
                             <Row  >
                             <Col xl={24} >
                             	<h2 style={{ color: 'white' }}> Thames Consultancy Services</h2>
                             	<p style={{ color: 'white',fontSize:"16px" }}> 71, Barnwell Road </p>
                                <p style={{ color: 'white',fontSize:"16px" }}> Cambridge CB5 8RG </p>
                                <p style={{ color: 'white',fontSize:"16px" }}> United Kingdom </p>
                                <p style={{ color: 'white',fontSize:"16px" }}> Ph : +44 7525 151486 </p>


                             	
                             </Col>
                            
                             </Row>
                             
                             

                      </div>

			);
	}



}

export default Contactus;