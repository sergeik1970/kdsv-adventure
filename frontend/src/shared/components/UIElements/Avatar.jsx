import "./Avatar.css"

const Avatar = props => {
    return (
        <div className={`avatar ${props.className}`}>
            <img
                src={props.image}
                alt={props.alt}
                style={{ width: props.width, height: props.height }}
            />
        </div>
    );

}

export default Avatar;