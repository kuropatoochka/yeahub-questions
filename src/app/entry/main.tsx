import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/app/layout";
import { MainPage } from "@/pages/main";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <MainPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)