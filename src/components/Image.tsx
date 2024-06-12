interface IProps{
  imageSrc:string;
  alt:string;
  className?:string;
}

const Image = ({imageSrc,alt,className}:IProps) => {
  return (
    <img src={imageSrc} alt={alt} className={className}/>
  )
}


export default Image