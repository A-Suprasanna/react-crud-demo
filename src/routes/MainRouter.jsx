/*
/ - home page -> <CityList />
/create - Create a new City -> <CreateCity />

/:id - (useParams) -> View City by Id -> TBD 
*/

import CityList from "../components/CityList";
import CreateCity from "../components/CreateCity";
import Landing from "../pages/Landing";

const MainRoutes = {
  path: "",
  element: <Landing />,
  children: [
    {
      path: "/create",
      element: <CreateCity />,
    },
    {
      path: "/cities",
      element: <CityList />,
    },
  ],
};

export default MainRoutes;
