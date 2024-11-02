const Total = function (props){
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises 
    return (
        <p>Number of exercises {total}</p>
    )

}

export default Total