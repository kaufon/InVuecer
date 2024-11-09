import { Chip } from "@nextui-org/react"
import { renderToStaticMarkup } from "react-dom/server"

type TagProps = {
  type: 'sucess' | 'danger'
  children: string
}
export const Tag = ({type,children}:TagProps) =>{
  switch (type){
    case 'sucess':{
      return <Chip color="success" className="bg-opacity-20 text-green-600">
        {children}
      </Chip>
    }
    case "danger":{
      return <Chip color="danger" className="bg-opacity-20 text-red-600">
        {children}
      </Chip>
    }
    default:{
      return <Chip color="success" className="bg-opacity-20 text-green-600">
        {children}
      </Chip>
    }
  }
}
