import React from 'react';
import "./Images.scss";

export default function Images({images}){
    return(
        <div style={{overflow:"auto"}}>
            <div className="prow">
                {/*{*/}
                {/*    images.map((item,i)=>{*/}
                {/*       return(*/}
                {/*           <div className="pcloumn"*/}
                {/*                key={i}>*/}
                {/*               <img*/}
                {/*                   src={item.image}*/}
                {/*                   className="g-img"*/}
                {/*               />*/}
                {/*               <div className="mt-1">*/}
                {/*                   <p style="font-weight: 500">{item.title}</p>*/}
                {/*               </div>*/}
                {/*           </div>*/}
                {/*       );*/}
                {/*    })*/}
                {/*}*/}
            </div>
            <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="modalImg"/>
                <div id="caption"></div>
            </div>
        </div>
    )
}