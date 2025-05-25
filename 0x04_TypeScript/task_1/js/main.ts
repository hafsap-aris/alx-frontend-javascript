interface Teachers {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsofExperience: number;
    location: string;
    [attrName: string]: any;
};

//2

interface Directors extends Teachers{
    numberofReports: number;
}

//3


interface printTeacherFunction{
    (firstName:string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`; 
};

//3
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}


interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;


constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


interface DirectorInterface{
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
};

interface TeacherInterface{
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
};

