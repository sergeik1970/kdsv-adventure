import PlaceItem from "./PlaceItem";

const PlaceList = props => {
    return (
        <ul className="place-list">
            {props.items.map(place => 
                <PlaceItem />
            )}
        </ul>
    );
}

export default PlaceList;