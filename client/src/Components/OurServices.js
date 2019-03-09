import React from 'react';

import { Button, Radio, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
var placements = require('./placements.jpg');
var staffing = require('./staffing.jpg');
var test = require('./test.jpg');
var recruits = require('./recruit.jpg');

const  cstyle = {
  textAlign: 'center',
  height: '160px',
  lineHeight: '160px',
  overflow:' hidden'
  
}




class OurServices extends React.Component{


	render(){
		return(
			<div style={{backgroundColor:"white"}}>
              <Row>
             	<Col xl={24} sm={24} md={24}>
               		<Tabs defaultActiveKey="1" style={{color:"black"}}>
                        <TabPane tab="RECRUITMENTS" key="1">
                          <img style={{width:"75%"}} src={recruits}></img>
                          <p> We do the hard work, you skim the cream - It is as simple as that with Thames Consultancy Services. 
                          We have redefined the recruitment process to be truly hassle- free both in word and in principle. 
                          A lucid understanding of the Client requirements helps us take over the entire process from initial 
                          screening of hundreds of resumes and job postings to conducting written tests, technical rounds, 
                          scheduling interviews and final signing on the dotted line.
                          Thames Consultancy Services goes a step further in organizing Job Melas/Job Fairs at the Client's place where the preliminary 
                          ground work of near perfect profile matching is done by our expert team of professionals. 
                          This has proven to be especially beneficial to start-up's who look for candidates who can be day-one 
                          productive. Maximum effort is directed towards attracting top talent and retaining them to meet the 
                            Client's business objectives. </p>
                          </TabPane>

                        <TabPane tab="PLACEMENTS" key="2">
                         <img style={{width:"75%"}} src={placements}></img>
                          <p> Consistently Thames Consultancy Services has been doing an excellent job of placing the right candidates with the right portfolio 
                          in lucrative companies reiterating the trust reposed in them by the job seekers. The pre-placement assessment 
                          policy is rigorous and the filtering process is a combination of tests and face-to-face technical and HR 
                          interviews to acclimatize the candidates. Instances where candidate is found competent but not matching Client 
                          requirements, training is imparted by Thames Consultancy Services to match the profile. Thames Consultancy Services also takes up adhoc placement requirements 
                          when the Client demands it. Freshers are trained and placed on a pay-roll basis. </p>
                          </TabPane>


                        <TabPane tab="STAFFING SOLUTIONS" key="3">
                         <img style={{width:"75%"}} src={staffing}></img>
                          <p> The success of an enterprise depends on the quality and strength of its resources. Hiring the right people is 
                          paramount to any organization. Continuity also plays a pivotal role in timely deliveries. In case of eventualities 
                          when Client's need to hire resources for short-term basis, Thames Consultancy Services offers to fill-in with the right candidates who will 
                          be employed on contract basis and on the pay-rolls of Thames Consultancy Services. Basically, Thames Consultancy Services offers two Staffing Solutions – Pay-roll and Permanent. 
                          Given the robust recruitment policies and huge database of first-day-productive-candidates, Thames Consultancy Services has the capability to meet 
                          huge industry demands in a very short time ensuring business productivity to its Clients. </p>
                         </TabPane>

                        <TabPane tab="DEVELOPMENT AND TESTING SERVICES" key="4">
                         <img style={{width:"75%"}} src={test}></img>
                          <p>  Rising competition and the tussle to capture and gain a strong foothold in the market puts immense pressure on 
                          the IT to provide customized and innovative development services that lends a competitive edge. Customer experience,
                           digital innovation and cross platform development is the order of the day. Thames Consultancy Services with its competent team and in-depth
                            understanding of the market requirements and business needs is well positioned to confidently meet varying Client 
                            needs. </p>

                            <p>Customer experience being the dictating force in all business decisions and strategies, 
                            Testing has gained a higher prominence to emerge as a new service. System failures, inefficiencies and 
                            software glitches are detrimental in an age of speed, varying customer preferences and competition. Thames Consultancy Services 
                            offers the best-in-class and time-tested testing strategies that is cost-effective whilst successfully meeting 
                            business objectives. </p>

                        </TabPane>
                </Tabs>
               </Col> 
             </Row>      
          	</div>

			);
	}



}

export default OurServices;


