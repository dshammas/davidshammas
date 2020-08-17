import React from 'react';
import Skill from './Skill';

export default function SkillList({ skills  }) {
    return (
        <div>
            {
                skills.map((skill, i) => {
                return ( 
                <Skill 
                    key={i} 
                    title={skills[i].title} 
                    image={skills[i].image} 
                    id={skills[i].id}
                 />
                )
            })
            }
        </div>
    )
}
