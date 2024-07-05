namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
        experienceTeachingJava?: number;
        experienceTeachingReact?: number;
    }

    export class Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}

// Exporting the Subjects namespace
export { Subjects };
