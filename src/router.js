import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "./Layout";
import PostDetails from "./components/PostDetails";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    children: [
        {
        path: '/home',
        element: <div>HOME</div>,
      }, 
      {
        path: '/about',
        element: <div>About Us</div>
      },
      {
        path: '/post/:postId',
        element: (<div style={{color:'red'}}>
            <h3>id post</h3>
        </div>)
    },
    {
        path: '/post/:Abc',
        element: <PostDetails />
      }]
    },
    {
        path: '/user-details-v3',
        element: <div>User detail v3</div>,
        loader: () => {
          const isLoggedIn = false;
          if (!isLoggedIn) {
            return redirect("/")
          }
        }
      }
  ]);

  export default router;