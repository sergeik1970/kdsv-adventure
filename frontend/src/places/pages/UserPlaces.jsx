import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

// Тестовые данные
const PLACES = [
    {
        id: "p1",
        title: "Крепость Орешек",
        description: "Крепость, расположеная в окрестностях Орешек, построенная в 1857 году",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr-mUKXH_NZ6xY5zYXddCP13i9vj8_hIaAQqBxLsEbeZ1nGnqYSZjaDnhaeLFt_l1PvwzkgAAsHk4t9EEED1UCUhe5oFFPm_JmdRcwwrwqjD5zrxWyCndaXFtZv-g3ArAX-4sypHw=s1360-w1360-h1020-rw",
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
    },
    {
        id: "p3",
        title: "Эрмитаж",
        description: "Российский государственный художественный и культурно-исторический музей в Санкт-Петербурге, одно из крупнейших в мире учреждений подобного рода.",
        image: "https://images.unsplash.com/photo-1559683907-5e9549adad37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        address: "Санкт-Петербург, Россия",
        location: {
            lat: 45.580460,
            lng: 145.129860
        },
        creator: "u3"
    },
    {
        id: "p4",
        title: "Перевал Дятлова",
        description: "Перевал Дятлова — перевал на Северном Урале между горой Холатчахль (1096,7 м) и безымянной высотой 905 м, стоящей несколько особняком к востоку от Главного Уральского хребта.",
        image: "https://rgo.ru/upload/content_block/images/0093196787b21e3185fbc8816e7c2ebe/c1f84065d922b5e79312f48b3719f41d.jpg?itok=1JrrrC7h",
        address: "Свердловская область, Россия",
        location: {
            lat: 61.756585,
            lng: 59.470532
        },
        creator: "u4"
    },
    {
        id: "p5",
        title: "Пролив Дрейка",
        description: "Проли́в Дрейка — межконтинентальный пролив, соединяющий южные части Атлантического и Тихого океанов.",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR9d5N7WS4x1extGU2xlrCmjw0mFzhv-4eD5ysfXL7uy--zUfcNFbIRqrj4YQwM7nb11QNkRSVg_2_JxnwikLEMV0wGmd_lFQ3gFFjEaA",
        address: "Мыс Горн",
        location: {
            lat: -60.795062,
            lng: -65.265175
        },
        creator: "u4"
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const places = PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={places} />
    );
}
 
export default UserPlaces;