export class User {

    name: string;
    age: string;
    phone: string;
    email: string;

    constructor(name, age, phone, email) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

    getAge(): string{
        return this.age;
    }

    setAge(age: string){
        this.age = age;
    }

    getNumberPhone(): string{
        return this.phone;
    }

    setNumberPhone(phone: string){
        this.phone = phone;
    }

    getEmail(): string{
        return this.email;
    }

    setEmail(email: string){
        this.email = email;
    }



}