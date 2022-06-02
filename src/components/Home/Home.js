import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Unlimites from "../Unlimites/Unlimites";
import Buttons from "./Buttons";
import Artical from "./Artical/Artical";

function Home({
  filterItems,
  type,
  menuItems,
  save,
  setSave,
  countRange,
  AddCategory,
  Count,
  setCount,
  setnewsave,
  newsave,
  nameinput,
  lastname,
  email,
  name,
}) {
  return (
    <div className="home">
      <div className="home__header">
        <Header nameinput={nameinput} lastname={lastname} email={email} />
      </div>
      <div className="home__right">
        <div>
          <Buttons filterItems={filterItems} type={type} />
        </div>
        <div className="home__following d-flex align-item-center">
          <p className="home__follow-p">Following</p>
          <p className="home__follow-p">Recommended</p>
        </div>
        <hr className="home__-follow-hr" />
        <Artical
          menuItems={menuItems}
          save={save}
          setSave={setSave}
          countRange={countRange}
          AddCategory={AddCategory}
          Count={Count}
          setCount={setCount}
          setnewsave={setnewsave}
          newsave={newsave}
          name={name}
        />
      </div>
      <div className="home__ultimat">
        <Unlimites />
      </div>
    </div>
  );
}

export default Home;
