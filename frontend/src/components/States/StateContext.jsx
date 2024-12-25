import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const API_URL = "https://poke-dex-dfe6.onrender.com/api/auth";
  const [pokemon, setPokemon] = useState([]);
  const [user, setUser] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=50");
  const [searchBarVisibility, setSearchBarVisibility] = useState(false);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [displayedPokemonCount, setDisplayedPokemonCount] = useState(50);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [isShiny, setIsShiny] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [speciesData, setSpeciesData] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [abilityDetailBox, setAbilityDetailBox] = useState(false);
  const [abilityEffect, setAbilityEffect] = useState(null);
  const [currentAbilityIndex, setCurrentAbilityIndex] = useState(null);
  const [movesData, setMovesData] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  const navigate = useNavigate();

  /**
   * The `signup` function is an asynchronous function that handles user sign up by sending a POST
   * request to the server with user details and updating the user state based on the response.
   * @returns The `signup` function is returning the response object `res` from the axios POST request.
   */
  const signup = async (name, email, password) => {
    setAuthLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/signup`,
        { name, email, password },
        { withCredentials: true }
      );
      setUser(res.data.user);
      setIsGuest(false);
      setIsAuthenticated(true);
      return res;
    } catch (error) {
      console.log("Error during signup", error);
      const errorMessage = error.response?.data?.message || "Error signing up";
      throw new Error(errorMessage);
    } finally {
      setAuthLoading(false);
    }
  };

  /**
   * The `login` function is an asynchronous function that handles user login by sending a POST request
   * to the API with the provided email and password, setting user authentication status based on the
   * response, and handling errors appropriately.
   * @returns The `login` function is returning the `response` object from the axios POST request.
   */
  const login = async (email, password) => {
    setAuthLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true }
      );
      setUser(response?.data?.user);
      setIsAuthenticated(true);
      setIsGuest(false);
      return response;
    } catch (error) {
      console.log("Error during signup", error);
      const errorMessage = error.response?.data?.message || "Error logging in";
      throw new Error(errorMessage);
    } finally {
      setAuthLoading(false);
    }
  };

  /**
   * The `logout` function asynchronously logs out a user by sending a POST request to the logout
   * endpoint and handling any errors that may occur.
   * @returns The `logout` function is returning the `response` object from the axios POST request.
   */
  const logout = async () => {
    setAuthLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/logout`,
        {},
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      setUser(null);
      return response;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error logging out";
      throw new Error(errorMessage);
    } finally {
      setAuthLoading(false);
    }
  };

  /**
   * The `forgotPassword` function is an asynchronous function that sends a POST request to a specified
   * API endpoint to handle a forgot password request, updating loading state accordingly.
   * @returns The `forgotPassword` function returns the response from the POST request made to the API
   * endpoint for resetting a password.
   */
  const forgotPassword = async (email) => {
    setAuthLoading(true);

    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      setIsGuest(false);
      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error sending email";
      throw new Error(errorMessage);
    } finally {
      setAuthLoading(false);
    }
  };

  /**
   * The function `resetPassword` asynchronously resets a user's password using a provided token and
   * updates the loading state accordingly.
   * @returns The `resetPassword` function is returning the response from the axios POST request if
   * successful. If there is an error during the POST request, it will throw an error with the error
   * message received from the response data or a default error message.
   */
  const resetPassword = async (token, password) => {
    setAuthLoading(true);

    try {
      const response = await axios.post(`${API_URL}/resetpassword/${token}`, {
        password,
      });
      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error resetting password";
      throw new Error(errorMessage);
    } finally {
      setAuthLoading(false);
    }
  };

  /**
   * The function `checkAuth` is an asynchronous function that checks user authentication by making a
   * GET request to a specified API endpoint and updating the authentication status based on the
   * response.
   */
  const checkAuth = async () => {
    setIsAuthChecking(true);
    try {
      const response = await axios.get(`${API_URL}/pokedex`, {
        withCredentials: true,
      });
      if (response?.data?.success) {
        setUser(response?.data?.user);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log("Error checking auth ", error);
    } finally {
      setIsAuthChecking(false);
      setIsAuthChecked(true);
    }
  };

  /**
   * The `GuestAccount` function sets the user as authenticated and a guest, navigates to the
   * "/pokedex" page, and displays a success toast message for guest login.
   */
  const GuestAccount = () => {
    setIsAuthenticated(true);
    setIsGuest(true);
    navigate("/pokedex");
    toast.success("Guest login: Sign up anytime!");
  };

  /**
   * The function `verifyEmail` is an asynchronous function that sends a POST request to verify an email
   * using a provided code and handles errors accordingly.
   * @returns The `verifyEmail` function is returning the response from the API call if successful. If
   * there is an error during the API call, it will throw an error with the error message received from
   * the API response or a default "Error verifying email" message.
   */
  const verifyEmail = async (code) => {
    setAuthLoading(true);

    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      setIsAuthenticated(true);
      setIsGuest(false);
      return response;
    } catch (error) {
      console.log(error.message);
      const errorMessage =
        error.response?.data?.message || "Error verifying email";
      throw new Error(errorMessage);
    } finally {
      setAuthLoading(false);
    }
  };

  /**
   * The function `resendVerificationEmail` sends a POST request to a specified API endpoint to resend
   * a verification email for a given email address.
   * @returns The `resendVerificationEmail` function returns the response from the POST request made to
   * the `/resend-verification` endpoint.
   */
  const resendVerificationEmail = async (email) => {
    try {
      const response = await axios.post(`${API_URL}/resend-verification`, {
        email,
      });
      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error resending email";
      throw new Error(errorMessage);
    }
  };

  /**
   * The `addFavorite` function asynchronously sends a POST request to add a Pokemon to favorites with
   * the provided ID, name, and sprite URL.
   * @returns The `addFavorite` function returns the response object from the POST request made to
   * `/favorite/add` after adding the specified Pokemon to favorites. If successful, the
   * function also updates the user state with the data received in the response. If an error occurs
   * during the process, an error message is thrown.
   */
  const addFavorite = async (pokemonId, name, spriteUrl) => {
    try {
      const response = await axios.post(
        `${API_URL}/favorite/add`,
        { pokemonId, name, spriteUrl },
        { withCredentials: true }
      );
      setUser(response?.data?.user);
      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error adding to favorites";
      throw new Error(errorMessage);
    }
  };

  /**
   * The function `removeFavorite` asynchronously sends a DELETE request to remove a favorite item using
   * Axios in a React application.
   * @returns The `removeFavorite` function is returning the response from the axios delete request.
   */
  const removeFavorite = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/favorite/remove`, {
        data: { id },
        withCredentials: true,
      });
      setUser(response?.data?.user);
      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error removing from favorites";
      throw new Error(errorMessage);
    }
  };
  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        user,
        signup,
        authLoading,
        isAuthenticated,
        allPokemons,
        setAllPokemons,
        pokemonInfo,
        setPokemonInfo,
        loading,
        setLoading,
        nextUrl,
        setNextUrl,
        previousUrl,
        setPreviousUrl,
        url,
        setUrl,
        isAuthChecked,
        isAuthChecking,
        searchBarVisibility,
        setSearchBarVisibility,
        totalPokemonCount,
        setTotalPokemonCount,
        isLogoutOpen,
        setLogoutOpen,
        displayedPokemonCount,
        setDisplayedPokemonCount,
        searchInput,
        setSearchInput,
        filteredSearch,
        setFilteredSearch,
        isShiny,
        setIsShiny,
        favorite,
        setFavorite,
        isFavorite,
        setIsFavorite,
        speciesData,
        setSpeciesData,
        evolutionChain,
        setEvolutionChain,
        abilityDetailBox,
        setAbilityDetailBox,
        abilityEffect,
        setAbilityEffect,
        currentAbilityIndex,
        setCurrentAbilityIndex,
        movesData,
        setMovesData,
        verifyEmail,
        resendVerificationEmail,
        login,
        forgotPassword,
        resetPassword,
        checkAuth,
        addFavorite,
        removeFavorite,
        logout,
        isGuest,
        GuestAccount,
        setFetching,
        fetching
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
