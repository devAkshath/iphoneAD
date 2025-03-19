const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 right-0  bg-white  shadow-md z-.5 h-17">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="text-4xl font-bold text-red-300">Pack Help</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-red-600">Home</a>
              <a href="#" className="hover:text-red-600">About</a>
              <a href="#" className="hover:text-red-600">Services</a>
              <a href="#" className="hover:text-red-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;