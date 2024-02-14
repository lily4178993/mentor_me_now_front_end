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
  <div className="flex flex-col border-blue-500 justify-center gap-4 items-center">
    <h1 className="capitalize text-4xl text-center text-[#111111] font-bold">Find your perfect mentor</h1>
    <p className="text-xs text-gray-400">Unlock our potential</p>
    <div className="w-1/6 mx-auto mt-4 border-0 border-t-[2px] border-t-primary-gray/50 border-dotted" />
  </div>
);

export default Header;
