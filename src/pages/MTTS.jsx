import ChapterPage from '../components/ChapterPage'

export default function MTTS() {
  return (
    <ChapterPage
      kicker="MTT-S Student Chapter"
      title="Microwave Theory and Techniques"
      description="Technical talks, workshops, and networking around microwave engineering, wireless communications, and RF circuit design."
      actions={
        <>
          <a
            href="https://mailman.stanford.edu/mailman/listinfo/ieee-mtts-list"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Mailing list
          </a>
          <a href="https://www.mtt.org/" className="btn btn-secondary" target="_blank" rel="noreferrer">
            IEEE MTT-S
          </a>
        </>
      }
    >
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Board</h3>
          <p>
            <strong>Chair:</strong> Geneva Ecola —{' '}
            <a href="mailto:gecola@stanford.edu">gecola@stanford.edu</a>
            <br />
            <strong>Vice Chair:</strong> Austin Rothschild —{' '}
            <a href="mailto:austinxr@stanford.edu">austinxr@stanford.edu</a>
            <br />
            <strong>Treasurer:</strong> Tejus Rao
            <br />
            <strong>Secretary:</strong> Faris Alghamdi
          </p>
        </div>
        <div className="contact-card">
          <h3>Get involved</h3>
          <p>We welcome speakers from industry and academia.</p>
          <a href="mailto:gecola@stanford.edu" className="btn btn-secondary">Contact the chair</a>
        </div>
      </div>
    </ChapterPage>
  )
}
