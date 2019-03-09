import React from 'react';
import {Row,Col} from 'antd';
import logo from'./logo.jpg';


const verticalAlign = {
	display : "flex",
  alignItems : "center",
  justifyContent : "left",
  height:"70px",
  alignContent:"streach",
 
}


class Logo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div style={{background:"#011456",width:"100%" }}>
				<Row>
					<Col xs={4} md={3} sm={4} lg={2} xl={2} >
						<div style={verticalAlign}>
						<img src={logo} style={{width:"100%"}}></img>
						</div>
					</Col>
					<Col xs={20} md={21} sm={20} lg={22} xl={22} style={{height:"inherit"}}>
						<div>
						<div style={verticalAlign}>
							<h2 style={{color:"white",float:"left",margin:"5px"}}>Thames Consultancy Services</h2>
						</div>
						</div>
					</Col>
				</Row>
				</div>
			)
	}

}

export default Logo;