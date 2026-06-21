// class ahmed {
    
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }}
    
//     let ali=new ahmed('3',45)
//     console.log(ali.age,ali.name)

class Person{
    #name
    #age
    constructor(name,age){
        this.#name=name
        this.#age=age
        
    }
    get name(){
        return this.#name

    }
    get age(){
        return this.#age
    }
    set name(name){
        this.#name=name
    }
    set age(age){
        this.#age=age
    }


}
    // let ali=new Person("ahmed",45)
    // console.log(ali.name)
    // ali.name="ali"
    // console.log()

class Student extends Person{
    #gpa
    #crty
    constructor (name,age,gpa,crty){
        super(name,age)
        this.#gpa=gpa
        this.#crty=crty

    }
    get gpa(){
        return this.#gpa
    }
    get crty(){
        return this.#crty
    }
    set gpa(gpa){
        this.#gpa=gpa
    }
    set crty(crty){
       this.#crty=crty
    }
    getinfo(){
        console.log(`${this.name} has ${this.age} and ${this.#gpa} in ${this.#crty}`)
    }
}
let student=new Student("ali",12,3.14,2020)
student.getinfo()
student.name="ahmed"
student.gpa=4
student.getinfo()

