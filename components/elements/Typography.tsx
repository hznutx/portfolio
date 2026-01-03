interface ITextProps {
  title?: string
  text?: string
  subtitle?: string
  className?: string
}

export const TextHeader: React.FC<ITextProps> = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h1 className='text-4xl font-bold sm:text-6xl'>{title}</h1>
      <p className='text-gray-400 md:text-xl font-thin'>{subtitle}</p></div>)
}

export const Typography: React.FC<ITextProps> = ({ text, className }) => {
  return (
    <p className={`${className} text-xs sm:text-md font-thin`}>{text}</p>
  )
}