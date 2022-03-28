import React, {useContext, useEffect, useState} from "react";
import "./Modal.scss";
import StyleContext from "../../contexts/StyleContext";
import ReactMarkdown from "markdown-to-jsx";
import Images from "../Images/Images";

export default function Modal(props){
    const {project, closeModal} = props;
    const {isDark} = useContext(StyleContext);

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        import(`../../components/markdown/${project.detail}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    },[]);

    return(
        <div>
           <div className="modal-mask">
               <div className="modal-wrapper">
                   <div className={isDark?"dark-mode modal-container": "modal-container"}>
                       <div className="title">
                           <span>
                               <a>{project.projectName}</a>
                           </span>
                           <a className="pull-right"
                              style={{fontSize: "18px"}}
                              onClick={closeModal}
                           >
                               <i className="fas fa-times"/>
                           </a>
                           <hr className="grey-line"/>
                       </div>
                       <div className="modal-body">
                           <div className= "date">
                               <span>{project.duration}</span>
                           </div>
                           <div className="bheight">
                               {project.tags.map((item, i) => {
                                   return (
                                           <span
                                               key={i}
                                               className={
                                                   isDark ? "dark-mode badge" : "badge"
                                               }>
                                               {item}
                                           </span>
                                       );
                               })}
                               <div style={{textAlign:"justify"}}>
                                   <span>{project.projectDesc}</span>
                               </div>

                               <div className="detail-main" id="detail">
                                   <div className="container">
                                   <ReactMarkdown>
                                       {markdown}
                                   </ReactMarkdown>
                                   </div>
                               </div>
                               {/*<hr/>*/}
                               <div>
                               {project.pictures&&<Images images={project.pictures}/> }
                               </div>

                           </div>
                       </div>
                       <div className="text-center">
                           <hr className="grey-line"/>
                           <button className="main-button btn-close" onClick={closeModal}>close</button>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
