
import { Col } from "react-bootstrap";

export const ProjectCard = ({ Title, description, imgUrl }) => {
    return (
        < Col sm={6} md={4} >
            <div className="proj-imgbx">
                <img width={380} height={380} src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{Title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col >
    )
}