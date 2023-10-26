import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderPokeball from "../components/layouts/HeaderPokeball";
import { bgByType } from "../constans/pokemon";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);

  const { pokemonId } = useParams();

  const getPercentStat = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percentStat = ((statValue * 100) / MAX_STAT_VALUE).toFixed(1);
    return `${percentStat}%`;
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="text-center capitalize">
      <HeaderPokeball />
      <article className="max-w-[500px] py-10 px-2 mx-auto">
        <header
          className={`${bgByType[pokemon?.types[0].type.name]} h-[140px] rounded-md`}
        >
          <div className="relative pt-14">
            <div className="absolute w-full top-0 -translate-y-12">
              <img
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
                className="max-w-[200px] mx-auto"
              />
            </div>
          </div>
        </header>
        <div className="pt-4">
          <h3 className="border w-8 h-8 mx-auto font-bold">#{pokemon?.id}</h3>
        </div>

        <h2 className="font-bold">{pokemon?.name}</h2>
        <h6 className="font-thin">peso: {pokemon?.weight} Altura:{pokemon?.height}</h6>
        {/* Stats */}
        <section>
          <h3 className="text-start font-bold">Stats</h3>
          <ul className="grid gap-4">
            {pokemon?.stats.map((stat) => (
              <li className="capitalize" key={stat.stat.name}>
                <div className="flex justify-between items-center">
                  <h5>{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                {/* Total Bar */}
                <div className="bg-slate-200 rounded-md h-6 overflow-hidden">
                  {/* Bar progress */}
                  <div
                    style={{ width: getPercentStat(stat.base_stat) }}
                    className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-full rounded-md"
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
