
import { Col } from "react-bootstrap";
import { TbBrandGithub, } from "react-icons/tb";
export const ProjectCard = ({ Title, description, imgUrl, repoUrl }) => {
    return (
        < Col sm={6} md={4} >
            <div className="proj-imgbx">
                <img className="project-Img img-fluid" width={380} height={380} src={imgUrl} alt="projectImg" />
                <div className="proj-txtx">
                    <h4>{Title}</h4>
                    <span className="txt-desc">{description}</span>
                    <div className="card-icon">
                        <a href={repoUrl}> <TbBrandGithub size={40} /></a>
                    </div>
                </div>
            </div>
        </Col >
    )
}