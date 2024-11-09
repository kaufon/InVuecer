export abstract class Entity<Props>{
  readonly id:string
  protected readonly props:Props
  protected constructor(props:Props,id?:string){
    this.id = id ?? crypto.randomUUID()
    this.props = props
  }
  isEqualTo(entity:Entity<Props>){
    return this.id === entity.id
  }
}
