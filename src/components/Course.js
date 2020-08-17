import React from 'react';
import './css/Course.css';

export default function Course({ title }) {
    return (
        <div className="list-group col-md-6 col-sm-12 m-auto text-center" style={{display:'inline-block'}} data-aos="fade-up">
              <p className="list-group-item list-group-item-action list-group-item-light cust-course">{title}</p>
        </div>
    )
}
