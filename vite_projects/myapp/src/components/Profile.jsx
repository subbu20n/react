// component rules  

// in react component means functions  

// component must be starts with capital letter  
// it will return  jsx 
// component must  have single parent  
// you must need to export  

// babel - is a transpiler which is used to convert from jsx to react understanding lanuage mode  

// what is react? 

// it is a js library which is used to build UI 

// large community 
// spa 
// it is  fast due to VDOM(algorithms) 
// developed by facebook community 
// component based architecture 

// how to create ReactApp? 
// npx create-react-app my-app -->(slow) 
// npx create vite@latest -->(recomond) 

// component  
// component must have starts with capital letter 
// single parent 
// return jsx 
// you must need to export  
// export are two ways : 
//        default export  
//        named export 
// import are two ways: 
//         default imports   
//         named imports  

// types of components  

// classBased components(2013-2018) 
// FunctionalBased components(2018-present) currently using this one  


// jsx  --rules 

// must have single parent 
// html like structure 
// jsx--babel---react  

// props---> properties are immutable (we cannot change the properties)


let students_data = [
    {name:"user1",salary:"10lpa",role:"SDE"},
    {name:"user1",salary:"10lpa",role:"SDE"},
    {name:"user1",salary:"10lpa",role:"SDE"},
    {name:"user1",salary:"10lpa",role:"SDE"},
]
function Profile(){
    return (
        // <div> 
        //     <h1>Developer</h1> 
        //     <p>i have 2 years experience in aws devsecops</p> 
        //     <button>view more</button> 
        // </div>
        <div>
            {students_data.map(each=>
                <div>
                    <h1>{each.name}</h1>
                    <p>{each.salary}</p>
                    <p>{each.role}</p>
                </div>
            )}
        </div>
    ) 
}
export default Profile