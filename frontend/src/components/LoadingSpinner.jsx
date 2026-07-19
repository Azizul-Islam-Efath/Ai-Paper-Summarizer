const LoadingSpinner = ({ fullScreen = false, size = 'md' }) => {
  const sizes = { sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-12 h-12' }

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer ring */}
        <div
          className={`${sizes[size]} rounded-full animate-spin`}
          style={{
            background: 'conic-gradient(from 0deg, rgba(124,77,255,0.0) 0%, #7c4dff 100%)',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
          }}
        />
        {/* Inner glow dot */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'translateY(-50%) translateX(50%)' }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: '#c44ef0',
              boxShadow: '0 0 8px rgba(196,78,240,0.9)',
            }}
          />
        </div>
      </div>
      {fullScreen && (
        <p
          className="text-sm font-medium animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #7c4dff, #c44ef0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Loading…
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{
          background: 'rgba(15,10,30,0.6)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {spinner}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8">
      {spinner}
    </div>
  )
}

export default LoadingSpinner
