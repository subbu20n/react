import style from './components/birthday.module.css'

let birthdaycandidates = ["subbu","supriya","arun","sahithi"] 

function BirthdayList(){
    return (
        <>
           {birthdaycandidates.map((val,index)=><h1 key={index}><BirthdayWishes birthdaycandidate={val}/></h1>)}
        </>
    )
}

export default BirthdayList 

// function BirthdayWishes(props) {
//     return(
//         <>Happy Bitrhday {props.birthdaycandidate}</>
//     ) 
// }  

// destructing

// function BirthdayWishes(props){
//     let {birthdaycandidate}=props 
//     return (
//         <div style={{color:"blue"}}>Happy birthday {birthdaycandidate}</div>
//     )
// } 

function BirthdayWishes(props){
    let {birthdaycandidate}=props 
  
    return (
        // <div style={theme}>Happy bday {birthdaycandidate}</div>  // inline css  
        <div className={style.Theme}>Happy bday {birthdaycandidate} </div>  // external css  

    )
} 


//    ----------styles---------- 
// inline==> style={{}} 
// external ==> .css-->import ".filename.css"  
// module.css ==> .module --> import style from "./file.module.css" 

