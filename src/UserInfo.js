// import UserData from './users.json';

const UserInfo=(props)=>{
    return(
        
                <tr>
                    <td>{props.id}</td>
                    <td>{props.username}</td>
                    <td>{props.email}</td>
                    <td>{props.firstname}{props.lastname}</td>
                    <td>{props.phone}</td>
                </tr>
                     
        
    )
}

export default UserInfo;