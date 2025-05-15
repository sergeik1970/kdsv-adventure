import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

// Тестовые данные
const PLACES = [
    {
        id: "p1",
        title: "Крепость Орешек",
        description: "Крепость, расположеная в окрестностях Орешек, построенная в 1857 году",
        image: "....",
        address: "Остров Ореховый, Шлиссельбург, Ленинградская область",
        location: {
            lat: 59.954780,
            lng: 30.286296
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: "Сахалинский залив",
        description: "Самый большой залив России, расположеный в Сахалинском заливе",
        image: "https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=u2wDIeAFuriXKPbEotH&image_size=XXL",
        address: "Сахалин, Россия",
        location: {
            lat: 45.580460,
            lng: 145.129860
        },
        creator: "u2"
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    return (
        <PlaceList items={PLACES} />
    );
}
 
export default UserPlaces;