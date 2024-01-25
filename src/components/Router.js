import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import MusicUploadForm from './MusicUploadForm';
import SongList from "./SongList";
const Routers = () => {
  return useRoutes([
    {
      path: "*",
      element: <h1>Page not found</h1>,
    },
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <SongList /> },
        { path: "/addsong", element: <MusicUploadForm /> },
      ],
    },
  ]);
};

export default Routers;
