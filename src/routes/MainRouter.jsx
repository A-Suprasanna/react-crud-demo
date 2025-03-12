/*
/ - home page -> <CityList />
/create - Create a new City -> <CreateCity />
/:id - (useParams) -> View City by Id -> TBD 
*/

import CityList from "../components/CityList";
import CreateCity from "../components/CreateCity";
import Landing from "../pages/Landing";
import ViewCity from "../components/ViewCity";

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
    {
      path: "/cities/view/:id",
      element: <ViewCity />,
    },
  ],
};

export default MainRoutes;
