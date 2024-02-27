export default class Element{
  constructor(id, nom, qte, photo){
    this._id = id
    this._nom = nom
    this._qte = qte
    this._photo = photo
  }

  get id() {
    return this._id
  }
  get nom(){
    return this._nom
  }
  get qte(){
    return this._qte
  }
  get photo(){
    return this._photo
  }

  setqte(value){
    this._qte += value;
  }

}
