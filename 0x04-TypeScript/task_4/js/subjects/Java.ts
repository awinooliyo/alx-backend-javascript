import { Subjects } from './Subject';

namespace Subjects {
    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingJava > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}

// Exporting the Subjects namespace
export { Subjects };
