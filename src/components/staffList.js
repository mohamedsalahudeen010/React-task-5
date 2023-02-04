import React from "react";
import BasePage from "./base";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useHistory } from "react-router-dom";


const StaffList=({staffsData,setStaffsData})=>{

    const history=useHistory();
    const deleteStaff=(id)=>{
        const removeStudent= staffsData.filter((stud,idx)=>(idx!==id));
        setStaffsData(removeStudent)
       }
    return(
        <BasePage
        title="Welcome to Hogwards"
        description="Here We have Data of Staffs of Hogwards">

            <div className="card-containers">
                <div className="row">
                    {staffsData.map((staff,idx)=>(
                          
                        <div className="col-lg-3 col-md-4 col-sm-6" key={idx}> 
                        
                       
                        <div className="card-main">
                              <Card.Img variant="top"className="img" src={staff.image} />
                              <Card.Body>
                                <Card.Title>{staff.name}</Card.Title>
                             <ButtonGroup className="ButtonGroup">
                             <Button variant="secondary" onClick={()=>history.push(`/edit-staff/${idx}`)}>Edit</Button>
                                <Button variant="danger" color="warning" onClick={()=>deleteStaff(idx)}>Delete</Button>
                                <Button variant="info"onClick={()=>history.push(`/view-staff/${idx}`)}>View Staff</Button>
                             </ButtonGroup>
                              </Card.Body>
                           </div>
                          
                                </div>
                               

                    ))

                    }

                </div>
            </div>
        
        
        </BasePage>
    )
}

export default StaffList