import { motion } from 'framer-motion'

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="flex min-h-screen items-center justify-center bg-[var(--bg)]"
    >
      <div className="glass-panel gradient-border flex flex-col items-center gap-5 rounded-[28px] px-10 py-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
          className="h-16 w-16 rounded-full border-2 border-b-blue-500 border-l-transparent border-r-fuchsia-400 border-t-cyan-300"
        />
        <div className="text-center">
          <p className="font-display text-2xl font-semibold tracking-tight">Kavinya Karthikeyan</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Crafting modern web experiences...</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
