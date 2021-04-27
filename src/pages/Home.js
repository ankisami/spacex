import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Cards from "../components/Cards";

const Home = () => {
  const [data, setData] = useState([]);
  const [listRocket, setListRockets] = useState([]);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/launches/upcoming").then((res) => {
      setData(res.data);
    });

    axios.get("  https://api.spacexdata.com/v4/rockets").then((res2) => {
      setListRockets(res2.data);
    });
  }, []);

  
  console.log("API result", data);
  if (data.length > 1) console.log("mission", data[0].name)
  if (data.length > 1) console.log("img", data[0].links.patch.small)

  return (
    <div>
      <h1>Page Home</h1>

      {
        data.map((item, index) => {
          const image = (item.links.patch.small != null) ? item.links.patch.small : "https://i.imgur.com/BrW201S.png";
          const rocketName = (listRocket.filter(rocket => rocket.id === item.rocket));

          console.log("RocketName", rocketName)
          return (
            <Cards
              key={`${item.name}${index}`}
              img={image}
              mission={item.name}
              rocket={rocketName[0].name} />
          )
        })
      }
    </div>
  );
};

export default Home;
