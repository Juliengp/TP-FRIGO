export default class Element{
  constructor(id, nom, qte, photo){
    this._id = id
    this._nom = nom
    this._qte = qte
    this._photo = photo ?? ""
    this._actual_qte = 1
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

  get actual_qte(){
    return this._actual_qte
  }

  set actual_qte(value){
    this._actual_qte = value;
  }

}
