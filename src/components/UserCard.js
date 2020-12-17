import React from "react";
import '../App.css';

function UserCard(props){
    // const style ={
    //         display: inline-block
    // }
    return(
        // <div class="card">
        //    <img src={props.img} class="card-img-top" alt="Unknown" width="150" height="150"/>
           
        //    <div class="card-body">
        //    <input key={props.id} type="checkbox" onChange={props.handleCheckChieldElement} checked={props.isChecked} value={props.name} /> <h5 class="card-title">{props.name}</h5>
        //    </div>
        // </div>

        <li>
            <input key={props.id} type="checkbox" onChange={props.handleCheckChieldElement} checked={props.isChecked} value={props.name} /> 
            <label for="myCheckbox1"><img src={props.img} alt="Unknown" width="150" height="150"/><h5 class="card-title">{props.name}</h5></label>
        </li>

    );
}

export default UserCard;