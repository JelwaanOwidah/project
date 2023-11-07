import "./CompoSECheader.css" 


const CompoSECheader = (props) => {
    return(
        <div className = 'sctions-header'>
            <h4>{props.children}</h4>
        </div>
    )
}


export default CompoSECheader ;