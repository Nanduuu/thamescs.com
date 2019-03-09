import React from 'react';
import formurlencoded from 'form-urlencoded';
import {Route , Switch , Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { Drawer, Form, Button, Col, Row, message, Input,Upload,Icon ,Select, Mention,DatePicker } from 'antd';
const { Option } = Select;
const { TextArea } = Input;


const style={
	textAlign:"right",
	paddingRight:'10px',
	margin:"auto"
}

const wrapper = {

  position:"relative",
  float:"left",
  alignItems : "left",
  justifyContent : "left",
  width:"100%"
  
}

class SubmitForm extends React.Component{

constructor(props){
	super(props);
	this.state = { 
						Fname:"",
						Lname:"",
						contactNumber:"",
						highestQualification:"",
						email:"",
						experience:"",
						jobTitle:"",
						resume:"",
						cvList: [],
						coverList:[],
    					uploading: false,
				};

		

	}

		fnameChange = (e)=>{
			
			this.setState ({Fname :e.target.value});

		}
		lnameChange = (e)=>{
			
			this.setState ({Lname :e.target.value});

		}
		emailChange = (e)=>{
			
			this.setState ({email :e.target.value});

		}
		contactNumberChange = (e)=>{
			
			this.setState ({contactNumber :e.target.value});

		}
		highestQualificationChange = (e)=>{
			
			this.setState ({highestQualification :e.target.value})

		}
		experienceChange = (e)=>{
			
			this.setState ({experience :e.target.value})

		}
		jobTitleChange = (e)=>{
			this.setState ({jobTitle : e.target.value})
		}


		
		handleSubmit =(event)=>{
			event.preventDefault();

			var data = {
				Fname : this.state.Fname,
				Lname : this.state.Lname,
				 contactNumber :this.state.contactNumber,
				highestQualification :this.state.highestQualification,
				email:this.state.email,
				experience :this.state.experience,
				jobTitle :this.state.jobTitle,
				resume:this.state.fileList,

			}

			const { cvList ,coverList} = this.state;
		    const formData = new FormData();
		    cvList.forEach((file) => {
		      formData.append('resume', file);
		    });

		    coverList.forEach((file) => {
		      formData.append('cover', file);
		    });

		    formData.append("Fname",this.state.Fname);
		    formData.append("Lname",this.state.Lname);
		    formData.append("contactNumber",this.state.contactNumber);
		    formData.append("highestQualification",this.state.highestQualification);
		    formData.append("email",this.state.email);
		    formData.append("experience",this.state.experience);
		    formData.append("jobTitle",this.state.jobTitle);

		    this.setState({
		      uploading: true,
		    });

			if(this.state.cvList.length == 0 || this.state.coverList.length == 0){
				message.error("Please upload CV and Cover Page")
			}else{


				axios.post('/api/email/' ,formData ).then ((res)=>{
				message.success(res.data.msg);
				this.setState({
		     	 uploading: true,
		    	});
		    	this.setState({redirect:true});
				})

			}
			
   			
		};

	
  	

  redirect = ()=>{
  	if (this.state.redirect) {
      return <Redirect to='/' />
    }

  }

  

render(){

	const { uploading, cvList ,coverList} = this.state;
    const propsCv = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.cvList.indexOf(file);
          const newFileList = state.cvList.slice();
          newFileList.splice(index, 1);
          return {
            cvList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(state => ({
         cvList : [file],
        // fileList: [...state.fileList, file],
        
        }));
        return false;
      },
      cvList,
    };

    const propsCover = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.coverList.indexOf(file);
          const newFileList = state.coverList.slice();
          newFileList.splice(index, 1);
          return {
            coverList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(state => ({
         coverList : [file],
        // fileList: [...state.fileList, file],
        
        }));
        return false;
      },
      coverList,
    };


	return(
			<div style={{margin:"5px", fontSize:"20px", color:"white"}}>
			{this.redirect()}
			<h2 style={{color:"white"}}>Post Your Resume</h2>
			<form onSubmit = {this.handleSubmit}>
				<div style={wrapper}>
				<Row type="flex" justify="center">
					<Col>
					<Row >
						<Col>
							<lable> First Name * </lable>
							<Input onChange={this.fnameChange} name="Fname" required/>
						</Col>
					</Row>

					<Row >
					<Col>
					<lable> Last Name * </lable>
					<Input onChange={this.lnameChange} name="Lname" required/>
					</Col>
					</Row>

					<Row >
					<Col>
					<lable> Phone Number * </lable>
					<Input onChange={this.contactNumberChange} name="contactNumber" required/>
					</Col>
					</Row>

					<Row >
					<Col>
					<lable> Email -ID * </lable>
					<Input type="email" onChange={this.emailChange} name="email" required/>
					</Col>
					</Row>

					<Row >
					<Col>
					<lable> Short Introduction * </lable>
					<TextArea type="textarea" onChange={this.highestQualificationChange} name="highestQualification" required/>
					</Col>
					</Row>

					<Row >
					<Col>
					<lable> Current Position  * </lable>
					<Input onChange={this.jobTitleChange} name="jobTitle" required/>
					</Col>
					</Row>

					<Row style={{margin:"5px"}} >
					<Col>
					<lable> Upload Cover Latter  * </lable>
					<Upload {...propsCover} required>
					    <Button>
					      <Icon type="upload" /> Click to Upload
					    </Button>
					 </Upload>
					 </Col>
					 </Row>

					 <Row style={{margin:"5px"}} >
					<Col>
					<lable> Upload CV  * </lable>
					<Upload {...propsCv} required>
					    <Button>
					      <Icon type="upload" /> Click to Upload
					    </Button>
					 </Upload>
					 </Col>
					 </Row>

	
					<Row>
						<Col  xs={12} sm={12}  md={12}  lg={12}  >
							 <Input
				          type="submit"
				          onClick={this.handleUpload}
				          disabled={cvList.length === 0}
				          loading={uploading}
				          style={{ marginTop: 16 }}
				          value={uploading ? 'Uploading' : 'Start Upload' }
				       / >
						</Col>

						<Col  xs={12} sm={12}  md={12}  lg={12}  >
							<Link to='/'><Button type="danger" style={{width:'100%',marginTop: 16 }}>Cancel</Button></Link>
						</Col>
					</Row>
				</Col>
			</Row>
				</div>
		
			</form>
			

			</div>
		)

}




}

export default SubmitForm;