export interface Course {
    courseId:              number;
    name:                  string;
    originalPrice:         string;
    discountPercentage:    string;
    priceWithDiscount:     string;
    averageRating:         string;
    totalRatings:          number;
    durationInSeconds:     number;
    mainImage:             string;
    createdAt:             Date;
    experienceLevel:       ValidLevel;
    mainVideoUploadStatus: string;
    status:                string;
    numberOfStudents:      number;
    user: string;
}

export type ValidLevel = 'junior'|'mid'|'senior';
