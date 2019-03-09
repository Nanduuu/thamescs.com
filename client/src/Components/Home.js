import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Radio, Icon } from 'antd';
import { Row, Col } from 'antd';
import {Route , Switch} from 'react-router';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
var image1 =require('./slide1.jpg');
var image2 =require('./slide2.jpg');

 const wrapper = {
  display : "flex",
  alignItems : "center",
  justifyContent : "center",
  height:"50px"
}

class Home extends React.Component{
    constructor(props){
        super(props);
    }



	render(){
		return(
					<div>
                            <Row>
                            <div style={wrapper}>
                                     <Button onClick={this.submit}> <Link to={'/SubmitForm'}> Submit Your Resume </Link> </Button>
                                 </div>
                              </Row>
                            <Row>
                             <Col span={24} offset = {0}  >
                             <Carousel autoplay>
                                    <div><img style={{width:"100%"}} src={image1}></img></div>
                                    <div><img style={{width:"100%"}} src={image2}></img></div>
                                   
                             </Carousel>
                             
                             </Col>
                             </Row>    
  
                      </div>

			);
	}
}

export default Home;




