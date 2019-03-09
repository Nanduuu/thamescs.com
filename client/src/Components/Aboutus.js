import React from 'react';
import { Card } from 'antd';
import {Row , Col } from 'antd';
const team = require ('./team.jpg')

const wrapper = {
  display : "flex",
  alignItems : "center",
  justifyContent : "center",
  margin :'5px'
}


class Aboutus extends React.Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>

        <div style={{ padding: '30px'  }}>
            <Row gutter={24}>
              <Col lg={24} md={24} sm={24}>
                <Card title="Thames Consultancy Services" bordered={true} headStyle={{fontSize:"30px"}}>
               <p >Transcending the traditional role of HR, Thames Consultancy Services offers Staffing and Consulting Solutions aligned 
               to the ever evolving and rapidly changing IT landscape across all verticals for MNC's and Corporate Business Houses.
                As a strategic HR partner, Thames Consultancy Services has an established reputation for positively contributing to and developing the Client's Human Capital Investment.</p>
             
              <p> The solutions offered are bespoke and at the decisive intersection of identification, engagement, development and mapping the right talent to the right profile. Our High-end recruitment capability 
              enables us to quickly bring on-board highly specialized resources within a short time frame. Small and medium enterprises have greatly benefitted from our service delivery model negating the additional expense of an in-house IT department. </p>
              
                </Card>
              </Col>
             
            </Row>
       </div>

        <div style={{ padding: '30px' }}>
        <Row gutter={24}>
          <Col lg={12} md={12} sm={24}>
            <Card title="Who we are" bordered={false} >
            <p>TThe expertise and depth of services offered by Thames Consultancy Services fully meet the intricate and specific 
            business needs in offering a timely forward thrust to operations, performance and a consequent competitive edge.</p>
            </Card>
          </Col>
          <Col lg={12} md={12} sm={24}>
            <Card title="What We Do" bordered={false}>
            <p>The scope of industry critical consultancy services offered by Thames Consultancy Services comprises of the following: </p>
              <ul style={{float:"left"}}>
              <li> Recruitments</li>
              <li> Placements </li>
              <li> Staffing Solutions </li>
             </ul>
            </Card>
          </Col>
         </Row>
       </div>




       <div style={{ padding: '30px' ,float:"left"}}>
        <Row gutter={24}>
          <Col lg={24} md={24} sm={24}>
            <Card title="Our Team" bordered={false}>
            
            <p> <img style={{width:"100%"}} src={team}></img>At the helm is a team of HR Professionals and Engineers with commendable industry experience and first-hand domain knowledge. They bring to Thames Consultancy Services their expertise and an enviable network of profitable connections. Working in close association
             with the stakeholders and understanding their needs has ensured success and strengthened the bonds.</p>
             <p> Collectively the team takes credit for having shaped and launched many a successful career in the industry. The team at Thames Consultancy Services is characterized by its Dedication and Commitment to create
              a symbiotically-advantageous-win-win position for both its Candidates and Clients.</p>
            </Card>
          </Col>
          
        </Row>
       </div>

       

      </div>
    );
  }
}

export default Aboutus;