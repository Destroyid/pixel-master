export interface Page<T> {
    totalPages: number,
    content: T[],
    number: number,
}