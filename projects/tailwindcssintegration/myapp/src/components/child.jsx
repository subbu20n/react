import SubChild from "./Subchild"

function Child(props){
    console.log(props.child_snacks,"child snacks") 
    return (
        <h1>
            <SubChild subchild_snacks={props.child_snacks}/> 
        </h1>
    )
}

export default Child  