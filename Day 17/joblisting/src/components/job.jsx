import React, { useEffect, useState } from "react"

const Job = (props) => {
   const {
      id,
      company,
      logo,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
   } = props.data

   let keywords = [role,level,...languages, ...tools]
   const [icon, setIcon] = useState("")

   const importSvg = () =>{
      const logoSvg = import(`${logo}`).then(d => {
         setIcon(d.default)
      })
    }
      useEffect( ()=>{
         importSvg();
      }, {logo});
  
   return ( 
   <div class={
      featured ? " job-container borderLeft" : "job-container"
      }>
      <div className="logo">
      <img src={icon} alt="logo" />
      </div>
      <div className="part1">
      <div className="company">
         <span><div className="cname">{company}</div></span>
            {props.data.new && <span className="new">New!</span>}
            {props.data.featured && <span className="featured">featured</span>}
         </div>
         <div className="position">{position}</div>
         <div className="details">
            <span>{postedAt}</span>
            <span>&<nbsp>.</nbsp></span>
            <span>{contract}</span>
            <span>&<nbsp>.</nbsp></span>
            <span>{location}</span>
         </div>
      </div>
       <div className="part2">
         {
            keywords.map((key, id) =>(
               <span className="jobs-list" onClick= {() => props.setKeywords(key)} key={id}>
                  {key}
               </span>
            ))}
         </div>     
   </div>
   );
};  

export default Job;
