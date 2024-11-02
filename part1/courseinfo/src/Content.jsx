import Part from "./Part"

const Content = function (props) {
    return (
        <div>
            <Part partName={props.parts[0]} exercise={props.parts[1]}/>
            <Part partName={props.parts[2]} exercise={props.parts[3]}/>
            <Part partName={props.parts[4]} exercise={props.parts[5]}/>
        </div>
    )
}

export default Content