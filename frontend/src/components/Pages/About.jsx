import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";

const About = () => {
  return (
    <div>
      <DefaultLayout>
        <div className="p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">About</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Concerning</h2>
            <p className="leading-relaxed">
              With thorough information on every known Pokémon species, the
              Pokedex is an extensive database. It comes from the Pokémon video
              games and is a vital tool for trainers and fans alike.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Our Objective</h2>
            <p className="leading-relaxed">
              The passion for web development and Pokémon led to the creation of
              this website. Our objective is to offer a Pokedex that is easy to
              use and accessible, improving the Pokémon experience for players
              worldwide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside leading-relaxed">
              <li>
                <strong>Search Capabilities</strong>: Quickly locate your
                preferred Pokémon by name.
              </li>
              <li>
                <strong>Complete Details</strong>: Get access to each Pokémon's
                types, evolutions, stats, and more.
              </li>
              <li>
                <strong>Favorites</strong>: Arrange and store your preferred
                Pokémon for easy access.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">References</h2>
            <p className="leading-relaxed">
              The{" "}
              <a
                href="https://pokeapi.co/"
                className="text-blue-400 hover:text-blue-300"
              >
                PokéAPI
              </a>{" "}
              was used to create this website. Thank you so much to the Pokémon
              community for your ongoing support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Prospective Initiatives
            </h2>
            <p className="leading-relaxed">
              We intend to include additional interactive elements, such as a
              Pokémon team builder and comparison tools. Watch this space for
              updates!
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">About the Author</h2>
            <p className="leading-relaxed">
              Greetings, I'm Mohammad Ali, a web developer who also loves
              Pokémon. My passion for both is combined in this initiative, which
              also seeks to support the Pokémon fandom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="leading-relaxed">
              Please contact boya0350@gmail.com with any comments, questions, or
              recommendations.
            </p>
          </section>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default About;
