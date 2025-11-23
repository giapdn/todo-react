
type Props = {
  count: number;
  onClick: () => void;
}

function Button({ count, onClick }: Props) {
  return (
    <>
      <h1 className="font-bold underline">Number: {count}</h1>
      <button onClick={onClick}>Click here</button>
    </>
  )
}


export default Button