export default function OfficerCard({ img, name, role, major = "", bio, href }) {
  return (
    <article className="officer-card hover-zoom">
          <div className="officer-photo-wrap">
            <img src={img} className="officer-photo" alt=""/>
          </div>
          <div className="officer-info">
            <div className="officer-name">{name}</div>
            <div className="officer-role">{role}</div>
            {major.length > 0 && 
              <div className="text-xs font-semibold text-fuchsia-700">{major}</div>
            }
            <div className="officer-bio">{bio}</div>
            <a target="_blank" href={href} className="officer-linkedin">LinkedIn →</a>
          </div>
        </article>
  )
}
