import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Radio, Icon } from 'antd';
import { Popover,Row, Col } from 'antd';
import {Route , Switch,Redirect} from 'react-router';
import { Link ,withRouter} from 'react-router-dom';
import Home from "./Home.js";
import OurServices from "./OurServices";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import SubmitForm from'./SubmitForm';
import {connect} from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components';
import Media from "react-media";


const bodyStyle = {
    backgroundColor : '#0066ff'
}
const { Header, Content, Footer , Sider} = Layout;

const fontStyle ={

  fontfamily : "Helvetica Neue",
  color: "black",
  
};

const mapStateToProps = (state) => {
  return {login : state.login};
};

class Frame extends React.Component{
	constructor(props){
		super(props);
    this.state = {
    collapsed: false,
    visible: false,
    Optcpt:"primary",
    DailySenarios:"primary",
    redirect:false
    };
	}

	render(){
			return(
				<div style={fontStyle}>
      
     
          <Row>
					<Layout style={{background :"#8080ff"}}>
          <Row>
            <Col style={{boxShadow:"2px 0px 2px black"}} lg={24} sm={24} md={24}>
  					    				   
   				   
              <Row>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ background:"white", lineHeight: '50px' ,color : "block" }}
              >
              <Menu.Item key="1" style={{ fontSize:"20px",width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>
                  <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span><Icon type="home" theme="outlined" />Home</span>
                      ) : (
                      <Icon type="home" theme="outlined" />
                      )
                    }
                    </Media>

                <Link to = {"/"} ></Link>
                </Menu.Item>
                     
              <Menu.Item key="2" style={{ fontSize:"20px",width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}} >
                  <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span><Icon type="menu-fold" theme="outlined" />Our Services</span>
                      ) : (
                      <Icon type="menu-fold" theme="outlined" />
                      )
                    }
                    </Media>

              <Link to = {'/OurServices'}> </Link>
              </Menu.Item>
              
              
              <Menu.Item key="3" style={{ fontSize:"20px",width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>

                <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span><Icon type="database" theme="outlined" />Aboutus</span>
                      ) : (
                      <Icon type="database" theme="outlined" />
                      )
                    }
                    </Media>
                <Link to = {"/Aboutus"} ></Link>
                </Menu.Item>

              <Menu.Item key="4" style={{ fontSize:"20px",width:"25%",overflow:"hidden" ,textOverflow: 'ellipsis'}}>
                    <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span><Icon type="team" theme="outlined" />Contact us</span>
                      ) : (
                      <Icon type="team" theme="outlined" />
                      )
                    }
                    </Media>

                  <Link to = {"/Contactus"}>
                </Link> </Menu.Item>
              </Menu>
        			</Row>
      				
    				
            </Col>
            </Row>
    				
      			
              
               
             <Row >
              <Content>
              <Col md={24} lg={24} sm={24} >
                  
                    <Switch>
                      <Route exact path= {"/"} component={Home}/>                                                           
                      <Route path= {'/OurServices' } component={OurServices}/>
                      <Route path= {'/Aboutus' } component={Aboutus}/>
                      <Route path= {'/Contactus' } component={Contactus}/>
                      <Route path= {'/SubmitForm' } component={SubmitForm}/>
                     
                      
                    </Switch>
              </Col>
              </Content>
              </Row>
              

    				
    				<Footer theme="light" style={{background:"#011456" ,width:'100%' ,boxShadow:"2px 2px 10px black ", bottom:'0px'}}>
      						  <Col span={24}>
                    <Row>
                      <Col span={24}>
                      <div style={{color:"white"}}>
                          <h3 style={{color:"white"}} > Thames Consultancy Services </h3>
                          <p> Transcending the traditional role of HR, Thames Consultancy Services offers Staffing and Consulting Solutions aligned to 
                          the ever evolving and rapidly changing IT landscape across all verticals for MNC's and Corporate Business Houses. </p>
                      
                      </div>
                      </Col>
                    </Row>
                    </Col>
    				</Footer>
  					</Layout>
          </Row>

				</div>



				);



	}


}



export default Frame;