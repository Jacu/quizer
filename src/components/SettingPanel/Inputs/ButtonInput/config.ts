import { faQuestion, faList, faCheckSquare, faBaby, faCrown, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const icons = {
    "Any": faQuestion,
    "ABCD": faList, "True/False": faCheckSquare,
    "Easy": faBaby, "Medium": faGraduationCap, "Hard": faCrown,
}

export const getIcon = (option: string) => {
    return icons[option] || faQuestion;
}