import readingTestsData from '@/data/reading-tests.json'

export interface Paragraph {
    id: string
    content: string
}

export interface Passage {
    id: string
    title: string
    paragraphs: Paragraph[]
}

export interface Question {
    id: number
    passageId: string
    type: 'true-false-not-given' | 'multiple-choice' | 'matching-paragraph'
    text: string
    options?: string[]
    correctAnswer: string
    explanation: string
}

export interface ReadingTest {
    id: string
    title: string
    type: 'full_mock' | 'practice'
    durationMinutes: number
    description: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    passages: Passage[]
    questions: Question[]
}

// Computed property for question count
export function getQuestionCount(test: ReadingTest): number {
    return test.questions.length
}

interface ReadingTestsData {
    tests: ReadingTest[]
}

const data = readingTestsData as ReadingTestsData

export function getAllTests(): ReadingTest[] {
    return data.tests
}

export function getTestById(id: string): ReadingTest | undefined {
    return data.tests.find(test => test.id === id)
}

export function getFullMockTests(): ReadingTest[] {
    return data.tests.filter(test => test.type === 'full_mock')
}

export function getPracticeTests(): ReadingTest[] {
    return data.tests.filter(test => test.type === 'practice')
}
