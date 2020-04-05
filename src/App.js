import React from "react";

import Layout from "./layout";

const ListItem = () => {
  return (
    <li
      className="w-full flex px-8 py-4 align-center items-center border-b border-blue-600 text-gray-500 hover:bg-blue-400"
      style={{ color: "#f1dfdd" }}
    >
      <div className="flex-1 font-semibold">Mika-Grace Kelly</div>
      <div className="flex-1 font-semibold">jada</div>
      <div>03:80</div>
      <div>03:80</div>
    </li>
  );
};

const List = () => {
  return (
    <ol className="counter-list m-0 p-0">
      {[...Array(20).keys()].map(
        (item) => (
          <ListItem />
        )
      )}
    </ol>
  );
};

function App() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-screen">
        <header
          className="w-full p-6 flex align-start items-center"
          style={{ height: "35vh" }}
        >
          <div className="flex align-center items-center">
            <div className="w-32 h-32 bg-pink-300 flex rounded-md mr-6 shadow-2xl" />
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold leading-tight">
                February 2018
              </h2>
              <div className="flex flex-col text-sm font-semibold leading-tight">
                <span>Duration 2:52:11</span>
                <span>24 tracks</span>
                <span>2017.02.02 00:27:45</span>
              </div>
            </div>
          </div>
        </header>
        <article
          className="w-full text-white pt-12 overflow-scroll"
          style={{ height: "65vh" }}
        >
          <List />
        </article>
      </div>
    </Layout>
  );
}

export default App;
