export default function OfficerCard({ img, name, role, major = '', href, index = 0 }) {
  return (
    <article
      className="officer-card officer-card--interactive"
      style={{ '--reveal-delay': `${index * 40}ms` }}
    >
      <div className="officer-photo-wrap">
        <img src={img} className="officer-photo" alt={name} loading="lazy" />
      </div>
      <div className="officer-name">{name}</div>
      <div className="officer-role">{role}</div>
      {major && <div className="officer-major">{major}</div>}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="officer-linkedin"
        aria-label={`${name} on LinkedIn`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.357V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </article>
  )
}
