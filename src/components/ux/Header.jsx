/**
 * `Header` is a functional component that renders the header section of the application.
 * It includes a title, a subtitle, and a styled horizontal line.
 *
 * @component
 * @example
 * // It can be used like this:
 * <Header />
 */
const Header = () => (
  <div>
    <h1 className="uppercase font-extrabold">Our Best Mentors</h1>
    <p className="text-xs">Please select a Mentor</p>
    <div className="w-1/6 mx-auto mt-8 border-0 border-t-[2px] border-t-primary-gray/50 border-dotted" />
  </div>
);

export default Header;
