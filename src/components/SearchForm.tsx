import { useProduct } from "./Products";

const SearchForm = () => {
  const { search, setSearch } = useProduct();
  return (
    <>
      <form className="d-flex mx-auto">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for the product you want.."
            aria-label="Search"
            size={70}
            arial-aria-describedby="searchIcon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <button className="btn btn-outline-dark" type="submit">
          Search
        </button> */}
        </div>
      </form>
    </>
  );
};

export default SearchForm;
