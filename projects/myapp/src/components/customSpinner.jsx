import { DNA } from 'react-loader-spinner'

export class CustomSpinner extends React.Component {
    componentWillUnmount(){
        console.log("spinner is expired")  // component unmount ayinappudu it will trigger 
    }

    render(){
       return (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
    )
    
    }
 
  
}
