type H1Props = {
  children: React.ReactNode
}

const H1 = ({children}: H1Props) => {
  return (
    <h1 className="text-4xl lg:text-6xl font-bold">
      {children}
    </h1>
  )
}

export default H1