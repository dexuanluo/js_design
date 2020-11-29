class Person{
    constructor(name){
        this.name = name
    }

    get_name(){
        return this.name
    }
}

let p = Person("haha")

alert(p.get_name())


