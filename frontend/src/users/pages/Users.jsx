import UsersList from "../components/UsersList";
const Users = () => {

    const USERS = [
        {
            id: "u1",
            name: "Дмитрий",
            image: "https://randomuser.me/api/portraits/men/89.jpg",
            places: 3
        },
        {
            id: "u2",
            name: "Василий",
            image: "https://randomuser.me/api/portraits/men/90.jpg",
            places: 5
        },
        {
            id: "u3",
            name: "Степан",
            image: "https://randomuser.me/api/portraits/men/91.jpg",
            places: 4
        }, {
            id: "u4",
            name: "Евгений",
            image: "https://randomuser.me/api/portraits/med/men/75.jpg",
            places: 4
        }
    ]
    return (
        // Компонент список пользователей
        <UsersList items={USERS} />
    );
}

export default Users;