import Button from "./Button"
import Image from "./Image"

const ProductCard = () => {
  return (
    <div className="flex flex-col border rounded-md p-2 m-4 md:m-0">
      <Image imageSrc="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="car image"/>
      <h3>car name</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quis. Est explicabo, minus dicta accusantium sequi adipisci sed dignissimos. Modi?</p>
      <div className="flex items-center gap-1 my-4">
        <span className="w-5 h-5 bg-indigo-500 rounded-full"/>
        <span className="w-5 h-5 bg-yellow-500 rounded-full"/>
        <span className="w-5 h-5 bg-orange-500 rounded-full"/>
        <span className="w-5 h-5 bg-blue-500 rounded-full"/>
        <span className="w-5 h-5 bg-red-500 rounded-full"/>
      </div>
      <div className="flex justify-end items-center gap-3">
        <span>$500,000</span>
        <Image imageSrc="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="car image" className="w-10 h-10 rounded-full object-cotain"/>
      </div>
      <div className="flex justify-center items-center gap-3 mt-5">
        <Button className="outline-none py-2 bg-indigo-500 flex-1 text-white rounded-md">Edit</Button>
        <Button className="outline-none py-2 bg-red-500 flex-1 text-white rounded-md">Delete</Button>
      </div>
    </div>
  )
}

export default ProductCard