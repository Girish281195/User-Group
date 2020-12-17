import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import GroupInfo from './GroupInfo';
import '../App.css';
class DisplayUsers extends Component {
    state = {
        users: []
    }

    componentDidMount () {
        axios.get( '/he-public-data/users49b8675.json' )
            .then( response => {
                const updated_users = response.data;
                updated_users.map(obj=> ({ ...obj, isChecked: false }))
                this.setState({users: updated_users});
                console.log( response );
            } );
    }
    shouldComponentUpdate() {
        return true;
      }
    handleClick = (event) => {
        let usrs = this.state.users 
        usrs.forEach(user => {
           if (user.name === event.target.value)
                user.isChecked =  event.target.checked
        })
        this.setState({users: usrs})
    }

    handleCheckChieldElement = (event) => {
        let usrs = this.state.users 
        usrs.forEach(user => {
           if (user.name === event.target.value)
                user.isChecked =  event.target.checked
        })
        this.setState({users: usrs})
    }

    

    render () {
        return ( 
                <div>
                    <h2>Create Group from the list of Users Below</h2>
                    <GroupInfo />
                    <ul>
                        {this.state.users.map((user) =>{
                        return(
                          
                          <UserCard 
                                    img={user.Image}
                                    name={user.name}
                                    id={user.id}
                                    handleCheckChieldElement={this.handleCheckChieldElement}
                            />
                          
                        )
                      
                        })}
                  </ul>
                </div>
        );
    }
}

export default DisplayUsers;