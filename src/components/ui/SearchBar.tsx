
const SearchInput = () => {
  const SearchInputStyle = {
    padding: '20px',
    paddingLeft: '35px',
    width: '100%',
    height: '10px',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-search\'%3E%3Ccircle cx=\'11\' cy=\'11\' r=\'8\'/%3E%3Cline x1=\'21\' y1=\'21\' x2=\'16.65\' y2=\'16.65\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '97% 50%',
    borderRadius: '25px',
    backgroundSize: '20px 20px',
    backgroundColor: "#F4F4F4", 
    border: '1px solid #e6e6e6',
  };
  return (
    <div style={{ width: "50%" }} className="hidden md:block">
      <input
        type="text"
        style={SearchInputStyle}
        placeholder={"Search"}
      />
    </div>
  );
};

export default SearchInput;