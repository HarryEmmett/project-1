import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Data {
  name: string;
  abilities: { ability: { name: string } }[];
}

const Main: React.FC = () => {
  const nav = useNavigate();
  const [data, setData] = useState<Data | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      if (response.ok) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve("resolved");
          }, 2000);
        });
        const json = await response.json() as Data;
        const { name, abilities } = json;
        setData({ name, abilities });
      }
      setLoading(false);
    };

    load();
  }, []);

  if (loading) {
    return <p>...loading</p>;
  }

  return (
    <>
      {data ? (
        <>
          <button onClick={() => nav("/second")}>/second</button>
          <p>{data.name}</p>
          {data.abilities.map((a) => {
            return <p>{a.ability.name}</p>;
          })}
        </>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
};

export default Main;
