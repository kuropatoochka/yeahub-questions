import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { Layout } from "@/app/layout/Layout.tsx";

import { QuestionPageLazy } from "@/pages/ui/QuestionPage/ui/QuestionPage.lazy.tsx";
import { QuestionsPageLazy } from "@/pages/ui/QuestionsPage/ui/QuestionsPage/QuestionsPage.lazy.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`/questions`} replace/>
  },
  {
    path: "/questions",
    element: <Layout/>,
    children: [
      { index: true, element: <QuestionsPageLazy/> },
      { path: "/questions/:id", element: <QuestionPageLazy/> }
    ]
  },
  {
    path: '*',
    element: <Navigate to={`/questions`} replace/>
  }
]

export const router = createBrowserRouter(routes)