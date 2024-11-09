

export default function Button(props) {
  return (
    <div >
       <button className="py-2 px-8 bg-black text-white  rounded hover:bg-white hover:text-black duration-300 hover:border hover:border-black">{props.text}</button>
    </div>
  )
}
