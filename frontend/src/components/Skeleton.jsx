const Skeleton = ({ className = '', count = 1, type = 'text' }) => {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg'

  const types = {
    text: 'h-4 w-full',
    title: 'h-6 w-3/4',
    avatar: 'w-10 h-10 rounded-full',
    card: 'h-48 w-full',
    button: 'h-10 w-24',
  }

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`${baseClasses} ${types[type]} ${className}`} />
      ))}
    </>
  )
}

export default Skeleton
