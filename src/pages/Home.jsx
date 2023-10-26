import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(e.target.trainerName.value));
    navigate("/pokedex");
  };

  return (
    <main className="h-screen grid grid-rows-[1fr_auto]">
      <section className="grid place-content-center text-center">
        <div>
          <div>
            <img src="/images/logo.png" alt="" />
          </div>
          <h2 className="text-red-500 text-4xl pt-6 font-bold">¡Hello Coach!</h2>
          <p className="font-semibold pb-6">To start give me your name</p>
          <form onSubmit={handleSubmit}>
            <input className="border w-48 h-12 " name="trainerName" type="text" placeholder="Your name ..." />
            <button className="border border-red-500 bg-red-500 text-white w-48 h-12">Start</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="bg-red-600 h-16"></div>
        <div className="bg-black h-12 relative">
          <div className="h-16 w-16 bg-white border-8 border-black rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-content-center">
            <div className="w-9 h-9 rounded-full bg-slate-700 border-black border-[6px]"></div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
