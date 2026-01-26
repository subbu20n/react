let users = ["userA","userB","userC","userdD"] 
let currentFestival='sankranthi' 
function UsersList(){
    return(
        <>
           {users.map((val,index)=><h1 key={index}><Greeting user={val} festival={currentFestival}/></h1>)}
        </>
    )
}

function Greeting(props){ 
    console.log(props.user)  //user=val 
    let {user,festival}=props
   return(
      <>{props.festival}  {props.user}</>
   )
}

// destructing 2nd way 

// function Greeting({user ,festival}) { 
//     return (
//         <>{festival} {user} </>
//     )
// }
export default UsersList 