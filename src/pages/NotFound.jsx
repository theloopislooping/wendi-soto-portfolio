import { Link } from 'react-router'
import { motion } from 'motion/react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="font-serif text-8xl font-medium text-sage mb-4">404</h1>
        <p className="text-foreground-muted text-lg mb-8">This page doesn't exist.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </motion.div>
    </div>
  )
}
