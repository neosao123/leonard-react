const Search = () => {
  return (
    <form action="#" className="search ">
      <div className="input-group serch-box">
        <input
          id="search"
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Product Here..."
          required
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
          className="btn theme text-white"
          type="submit"
          aria-label="Search"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};
export default Search;
