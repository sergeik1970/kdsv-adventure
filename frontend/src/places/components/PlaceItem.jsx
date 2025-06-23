import { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceItem.css"
import Modal from "../../shared/components/UIElements/Modal";
import PlaceList from "./PlaceList";


const PlaceItem = props => {

    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true)

    const closeMapHandler = () => setShowMap(false)

    const {lat, lng} = props.location
    return (

        <>
            <Modal show={showMap} header={props.address} footer={<Button onClick={closeMapHandler}>Закрыть</Button>} onCancel={closeMapHandler}>
                <div className="map__container">
                    <iframe src={`https://yandex.ru/map-widget/v1/?ll=${lng}%2C${lat}&z=15`} width="100%" height="400" frameborder="0" allowfullscreen="true"></iframe>
                </div>
            </Modal>

            <Card className="place-item__content">
                <li className="place-item">
                    <div className="place-item__image">
                        <img src={props.image} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <address>{props.address}</address>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>Посмотреть на карте</Button>
                        <Button to={`/places/${props.id}`}>Изменить</Button>
                        <Button danger>Удалить</Button>
                    </div>
                </li>
            </Card>
        </>
    );
}

export default PlaceItem;