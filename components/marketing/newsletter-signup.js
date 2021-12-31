export default function NewsletterSignup({ ctaLabel, subtitle, title }) {
  return (
    <div>
      <div>
        {title}
        {subtitle}
        <div>
          <button>{ctaLabel || 'Submit'}</button>
        </div>
      </div>
    </div>
  )
}
