import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AddReview from "./pages/AddReview/AddReview";
import AddProduct from "./pages/AddProduct/AddProduct";
import ManageProducts from "./pages/ManageProducts/ManageProducts";
import PhoneDetails from "./pages/ProductDetails/PhoneDetails";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import PostTeam from "./pages/PostTeam/PostTeam";
import Team from "./pages/Team/Team";
import ManageTeam from "./pages/ManageTeam/ManageTeam";
import TeamMate  from "./pages/Team/TeamMate";
import UpdateTeam from "./pages/Team/UpdateTeam";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: function () {
        return fetch(`http://localhost:3000/all-phones`);
      },
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/manage-products",
      element: <ManageProducts />,
      loader: function () {
        return fetch(`http://localhost:3000/all-phones`);
      },
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    
    {
      path: "/add-review",
      element: <AddReview />,
    },
    {
      path: "/phone/:id",
      element: <PhoneDetails></PhoneDetails>,
      loader: function({params}){
        
        return fetch(`http://localhost:3000/phone/${params.id}`)
      }
    },
    {
      path: "/update-phone/:id",
      element: <UpdateProduct></UpdateProduct>,
      loader: function({params}){
        return fetch(`http://localhost:3000/phone/${params.id}`);
      }
    },

    {
      path: "/add-teammate",
      element: <PostTeam />,
    },
    {
      path: "/team",
      element: <Team />,
      loader: function(){
        return fetch(`http://localhost:3000/all-teammates`);
      }
    },
    {
      path: "/manage-team",
      element: <ManageTeam />,
      loader: function () {
        return fetch(`http://localhost:3000/all-teammates`);
      }
    },
    {
      path: "/team/:id",
      element: <TeamMate></TeamMate>,
      loader: function({params}){
        
        return fetch(`http://localhost:3000/team/${params.id}`)
      }
    },
    {
      path: "/update-team/:id",
      element: <UpdateTeam></UpdateTeam>,
      loader: function({params}){
        return fetch(`http://localhost:3000/team/${params.id}`);
      }
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;