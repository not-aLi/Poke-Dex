import React, { useContext } from "react";
import { PokemonContext } from "../States/StateContext";
import Button from "../User Authentication/Button";
import normal from "../../assets/farfetch.gif";
import fire from "../../assets/scorbunny.gif";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Loader from "../User Authentication/Loader";

const DisplayCount = () => {
  const {
    displayedPokemonCount,
    totalPokemonCount,
    loading,
    user,
    isLogoutOpen,
    logout,
    authLoading,
    isGuest,
  } = useContext(PokemonContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logout();
      toast.success(response?.data?.message || "Logout successfully");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      {!loading ? (
        <>
          <div className="flex justify-center items-center text-white bg-gray-800 bg-opacity-75 p-2 border-t-2 border-gray-800 border-opacity-90 overflow-x-hidden">
            <p>
              Showing{" "}
              <span className="text-yellow-400">{displayedPokemonCount}</span>{" "}
              out of{" "}
              <span className="text-yellow-400">{totalPokemonCount}</span>{" "}
              Pokémon
            </p>
          </div>

          {/* Logout and Name dropdown */}
          {isLogoutOpen && (
            <div className="hidden w-52 min-h-[130px] z-20 bg-gradient-to-b from-gray-800 to-gray-950 border border-gray-700 rounded-lg shadow-lg absolute right-[45px] top-20 p-4 md:flex flex-col justify-between items-start gap-4">
              <div className="text-white font-medium ">
                <span className="font-semibold text-gray-400">Account: </span>
                {isGuest ? "Guest" : user.name}
              </div>

              {authLoading ? (
                <div className="w-full">
                  <Button
                    loading={<Loader img={fire} />}
                    img={normal}
                    color={"normal"}
                  />
                </div>
              ) : (
                <button
                  disabled={isGuest}
                  onClick={handleLogout}
                  className="w-full"
                >
                  <Button text={"Logout"} img={normal} color={"normal"} />
                </button>
              )}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default DisplayCount;
