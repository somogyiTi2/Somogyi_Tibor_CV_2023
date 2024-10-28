import Module from './TimelineComponent.module.css'

const TimelineComponent = (props) => {
    return (
        <div className={Module.content}>
            <h1>{props.data.title}</h1>
            {props.data.time !== undefined && <p>{props.data.time}</p>}
            {props.data.text !== undefined && <p>{props.data.text}</p>}
            {props.data.img !== undefined && <p><img src={props.data.img}></img></p>}
            {props.data.link !== undefined && <a href={props.data.link}>Link</a>}
   
        </div>

    )
}

export default TimelineComponent