import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./layout/Layout.tsx";
import { QuestionPage, QuestionsPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/questions" replace/>
  },
  {
    path: "questions",
    element: <Layout/>,
    children: [
      { index: true, element: <QuestionsPage/> },
      { path: "/questions/:id", element: <QuestionPage/> }
    ]
  }
])