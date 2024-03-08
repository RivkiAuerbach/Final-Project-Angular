enum LearningMode {
    Frontal = 'פרונטלי',
    Zoom = 'זום'
}

export class Course {
    code: number;
    name: string;
    categoryCode: string;
    lessonCount: string;
    startDate: string;
    syllabus: string[];
    learningMode: LearningMode;
    instructorCode: string;
    image: string;

    constructor(
        code: number,
        name: string,
        categoryCode: string,
        lessonCount: string,
        startDate: string,
        syllabus: string[],
        learningMode: LearningMode,
        instructorCode: string,
        image: string
    ) {
        this.code = code;
        this.name = name;
        this.categoryCode = categoryCode;
        this.lessonCount = lessonCount;
        this.startDate = startDate;
        this.syllabus = syllabus;
        this.learningMode = learningMode;
        this.instructorCode = instructorCode;
        this.image = image;
    }
}
