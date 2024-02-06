import { Outlet } from 'react-router-dom';

const Root = () => (
  <section className="border w-full h-[100vh] flex justify-start items-center">
    <div className="w-1/3 h-full border">Your navigation</div>
    <div id="detail" className="w-2/3 border border-orange-500 h-full">
      <Outlet />
    </div>
  </section>
);

export default Root;
