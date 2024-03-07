enum LearningMode {
    Frontal = 'פרונטלי',
    Zoom = 'זום'
}

export class Course {
    code: string;
    name: string;
    categoryCode: string;
    lessonCount: number;
    startDate: Date;
    syllabus: string[];
    learningMode: LearningMode;
    instructorCode: string;
    image: string;

    constructor(
        code: string,
        name: string,
        categoryCode: string,
        lessonCount: number,
        startDate: Date,
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
