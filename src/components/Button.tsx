import { ReactNode } from "react"

interface IProps{
  children:ReactNode;
  className?:string;
}

const Button = ({children,className,...reset}:IProps) => {
  return (
    <button className={className} {...reset}>{children}</button>
  )
}

export default Button