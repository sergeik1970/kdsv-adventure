import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const apiUrl = import.meta.env.VITE_API_URL;
const App = () => {
  // Получим сообщение с сервера
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json().then((data) => setMessage(data.message)))
  })
  return (

    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/places/new" element={<NewPlace />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
          {/* Передаем параметр */}
          <Route path="/:userId/places" element={<UserPlaces />}></Route>
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;