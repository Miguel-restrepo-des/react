
export const Screen = ({title, children }) => {
  return (
    <main className="screen">
        <h1 classname="screen__title">{title}</h1>
        {children}
    </main>
  )
}
