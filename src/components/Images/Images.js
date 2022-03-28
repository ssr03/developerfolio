import React from 'react';
import "./Images.scss";

export default function Images({images}){
    return(
        <>
        <hr/>
        <div>
            {
                images.map((item,i)=>{
                   return(
                       <div key={i} style={{overflow:"auto"}}>
                           <div className="prow">
                               <div className="pcolumn"
                                    key={i}>
                                   <div className="img-title">
                                       <span style={{fontWeight: 500}}>{item.title}</span>
                                   </div>
                                   <img
                                       src={item.img}
                                       className="g-img"
                                   />
                               </div>
                           </div>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                               <img className="modal-content" id="modalImg"/>
                               <div id="caption"></div>
                           </div>
                       </div>
                   );
                })
            }
        </div>
        </>
    )
}