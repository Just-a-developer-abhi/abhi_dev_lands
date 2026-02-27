import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-6">
      <div className="text-center">
        <p className="font-mono text-xs text-accent-cyan tracking-widest mb-4">404 ERROR</p>
        <h1 className="font-heading font-bold text-8xl text-text-primary mb-4 glow-text">VOID</h1>
        <p className="text-text-muted text-lg">This page has been consumed by the void.</p>
      </div>
      <Link
        href="/"
        className="px-8 py-3 border border-accent-cyan text-accent-cyan font-mono text-sm hover:bg-accent-cyan hover:text-void transition-all"
      >
        RETURN HOME
      </Link>
    </div>
  )
}
