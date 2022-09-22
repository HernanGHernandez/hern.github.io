
import { Col } from "react-bootstrap";
import { TbBrandGithub, } from "react-icons/tb";
export const ProjectCard = ({ Title, description, imgUrl, repoUrl }) => {
    return (
        < Col sm={6} md={4} >
            <div className="proj-imgbx">
                <img className="project-Img" width={380} height={380} src={imgUrl} alt="projectImg" />
                <div className="proj-txtx">
                    <h4>{Title}</h4>
                    <span>{description}</span>
                    <div className="card-icon">
                        <a href={repoUrl}> <TbBrandGithub size={30} /></a>
                    </div>
                </div>
            </div>
        </Col >
    )
}