import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Adding from "./components/Adding/Adding";
import Forum from "./components/Forum/Forum";
import Home from "./components/Home/Home";
import NewSave from "./components/NewSave/NewSave";
import Save from "./components/Save/Save";
import Stories from "./components/Stories/Stories";
import User from "./components/User/User";
import Notification from "./components/Notifigation/Notifigation";
import obj from "./Object";
import { v4 as uuidv4 } from "uuid";
import NewSaveList from "./components/NewSaveList/NewSaveList";

const allCategories = ["All", ...new Set(obj.map((item) => item.type))];

function App() {
  let [newsave, setnewsave] = useState([]);

  const [stories, setstories] = useState([]);

  const [nameinput, setnameinput] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");

  let [save, setSave] = useState([]);
  const [Count, setCount] = useState(0);
  const [name, setName] = useState("");

  const countRange = (e) => {
    setName(e.target.value);
    setCount(e.target.value.length);
  };

  const AddCategory = () => {
    setSave([...save, { name: name, id: uuidv4() }]);
    console.log(save);
  };

  useEffect(() => {
    setSave([]);
  }, []);

  let [menuItems, setMenuItems] = useState(obj);
  let [type, setCategories] = useState(allCategories);

  const filterItems = (type) => {
    if (type === "All") {
      setMenuItems(obj);
      return;
    }
    const newitems = obj.filter((item) => {
      return item.type === type;
    });
    setMenuItems(newitems);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Forum
              setnameinput={setnameinput}
              setlastname={setlastname}
              setemail={setemail}
              nameinput={nameinput}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              filterItems={filterItems}
              type={type}
              menuItems={menuItems}
              countRange={countRange}
              AddCategory={AddCategory}
              Count={Count}
              setCount={setCount}
              save={save}
              setSave={setSave}
              newsave={newsave}
              setnewsave={setnewsave}
              nameinput={nameinput}
              lastname={lastname}
              email={email}
              name={name}
            />
          }
        />
        <Route
          path="home/save"
          element={
            <Save
              countRange={countRange}
              AddCategory={AddCategory}
              Count={Count}
              setCount={setCount}
              save={save}
              setSave={setSave}
              name={name}
            />
          }
        />
        <Route
          path="home/add"
          element={
            <Adding
              menuItems={menuItems}
              setMenuItems={setMenuItems}
              stories={stories}
              setstories={setstories}
            />
          }
        />
        <Route
          path="home/stories"
          element={
            <Stories
              menuItems={menuItems}
              setMenuItems={setMenuItems}
              stories={stories}
              setstories={setstories}
            />
          }
        />
        <Route path="user/:id" element={<User menuItems={menuItems} />} />
        <Route path="home/notifigation" element={<Notification />} />
        <Route path="newsave" element={<NewSave newsave={newsave} />} />
        <Route
          path="newsavelist/:id"
          element={
            <NewSaveList save={save} setSave={setSave} newsave={newsave} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
