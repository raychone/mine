import { useEffect } from "react";
import { useState } from "react";

const searchObj = [
  {
    name: "one",
    city: "bucharest",
  },
  {
    name: "two",
    city: "budapest",
  },
  {
    name: "three",
    city: "dubai",
  },
  {
    name: "four",
    city: "istambul",
  },
  {
    name: "five",
    city: "iasi",
  },
  {
    name: "six",
    city: "chisinau",
  },
  {
    name: "seven",
    city: "predeal",
  },
  {
    name: "eight",
    city: "constanta",
  },
  {
    name: "nine",
    city: "bucharest",
  },
  {
    name: "ten",
    city: "brasov",
  },
  {
    name: "ten2",
    city: "bucharest",
  },
];

const Search = () => {
  const [nameSearching, setNameSearching] = useState("");
  const [citySearching, setCitySearching] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(searchObj);
  }, []);

  const handleSearch = (nameQuery, cityQuery) => {
    if (!nameQuery && !cityQuery) {
      setSearchResults(searchObj);
      return;
    }
    const filteredResults = searchObj.filter(
      (item) =>
        item.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
        item.city.toLowerCase().includes(cityQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setNameSearching(value);

      handleSearch(value, citySearching);
    } else if (name === "city") {
      setCitySearching(value);

      handleSearch(nameSearching, value);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-[500px] mx-auto my-5 flex gap-5 text-black"
      >
        <input
          className="px-2 rounded-lg"
          type="text"
          placeholder="Search..."
          value={nameSearching}
          onChange={handleChange}
          name="name"
        />
        <input
          className="px-2 rounded-lg"
          type="text"
          placeholder="City"
          name="city"
          value={citySearching}
          onChange={handleChange}
        />
        <button className="rounded-lg py-1 px-2 text-white/80 border-2">
          Search
        </button>
      </form>
      <div className="searchingResult">
        {searchResults.map((result, i) => (
          <p
            className="text-white text-5xl"
            key={i}
          >
            {result.name} - {result.city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Search;
