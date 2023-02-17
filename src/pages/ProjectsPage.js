import { useParams } from "react-router-dom";

const ProjectsPage = () => {
    const {id} = useParams();
    console.log(id)
    return <p>Welcome to projects page</p>
}

export default ProjectsPage;