interface DirectorInterface{
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
};
interface TeacherInterface{
    workFromHome():string;
    getCoffeeBreak():string;
    workTeacherTasks():string;
};

class Director implements DirectorInterface{
    workFromHome(): string{
        return "orking From Home";
    }
    getCoffeeBreak(): string{
        return "Getting a Coffee Break";
    }
    workDirectorTasks(): string{
        return "Getting to Director Tasks";
    }
};
class Teacher implements TeacherInterface{
    workFromHome(): string{
        return "Cannot Work from home";
    }
    getCoffeeBreak(): string{
        return "Cannot have a Break";
    }
    workTeacherTasks(): string{
        return "Getting to Work";
    }
};

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}


function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}



type Subjects = 'Math' | 'History';


function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Test cases
console.log(teachClass('Math'));     
console.log(teachClass('History'));  