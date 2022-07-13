import UserData from './users.json';
import UserInfo from './UserInfo';

export default function Users() {
    return(
        <div>
            {UserData.map((user, id) => (
                <div key={id}>
                    <li>{user.username}</li>
                    {/* <UserInfo email={user.email} name={user.username}/> */}
                </div> 
            ))}

            <table> 
                <tr>
                    <th>Serial No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Name(FirstName, LastName)</th>
                    <th>Phone Number</th>
                </tr>
            
            {UserData.map((user, id) => (
                    <UserInfo id={user.id} email={user.email} username={user.username} firstname={user.name.firstname} lastname={user.name.lastname} phone={user.phone} />
            ))}
            
            </table>
        </div>
    )
}