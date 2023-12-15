export type APIResponse<T> = {
    status: number,
    error?: string,
    message?: string,
    data?: T
}
