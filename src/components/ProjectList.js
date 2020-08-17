import React from 'react';
import Project from './Project';

export default function ProjectList({projects}) {
    return (
        <div>
            {
                projects.map((project, i) => {
                return ( 
                <Project 
                    key={i} 
                    title={projects[i].title} 
                    description={projects[i].description} 
                    id={projects[i].id}
                    tools={projects[i].tools}
                    image={projects[i].image}
                    code={projects[i].code}
                    view={projects[i].view}
                 />
                )
            })
            }
        </div>
    )
}
