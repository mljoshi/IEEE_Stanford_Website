import React from 'react'

export default function OfficerCard({ img, name, role, bio, href }) {
  return (
    <article className="officer-card hover-zoom">
          <div className="officer-photo-wrap">
            <img src={img} className="officer-photo" alt=""/>
          </div>
          <div className="officer-info">
            <div className="officer-name">{name}</div>
            <div className="officer-role">{role}</div>
            <div className="officer-bio">{bio}</div>
            <a target="_blank" href={href} className="officer-linkedin">LinkedIn →</a>
          </div>
        </article>
  )
}
