
interface  Student{
    name:string;
    age:number;
    grades:number[];

}

const student1: Student = {     
    name: "Bob",     
    age: 17,     
    grades: [75, 80, 82, 88, 90]
};

const student2: Student = {     
    name: "Shakil",     
    age: 20,     
    grades: [75, 63, 57, 88, 85]
};

const calculateAverageGrade = (arr:number[]):number => {

    const gradeSum:number = arr.reduce((acc, cur) => acc + cur);
    return gradeSum / arr.length;

}


const averageGradeForBob = calculateAverageGrade(student1.grades);
const averageGradeForShakil = calculateAverageGrade(student2.grades);
console.log(averageGradeForBob);
console.log(averageGradeForShakil);