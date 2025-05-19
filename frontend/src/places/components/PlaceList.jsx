import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = props => {

    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>Места не найдены</h2>
                    <button>Добавить место</button>
                </Card>
            </div>
        );
    }
    return (
        <ul className="place-list">
            {props.items.map(place =>
                <PlaceItem
                    key={place.id}
                    title={place.title}
                    id={place.id}
                    description={place.description}
                    image={place.image}
                    address={place.address}
                    location={place.location}
                    creator={place.creator} />
            )}
        </ul>
    );
}

export default PlaceList;