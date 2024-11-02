import Part from "./Part"

const Content = function (props) {
    console.log(props)
    return (
        <div>
            <Part partName={props.parts[0].name} exercise={props.parts[0].exercises}/>
            <Part partName={props.parts[1].name} exercise={props.parts[1].exercises}/>
            <Part partName={props.parts[2].name} exercise={props.parts[2].exercises}/>
        </div>
    )
}

export default Content