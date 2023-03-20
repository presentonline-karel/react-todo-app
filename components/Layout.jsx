import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="mx-8">
      <Nav />

      <main>{children}</main>
    </div>
  );
};

export default Layout;