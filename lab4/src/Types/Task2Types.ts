export interface Task2Types {
    Clicked?: boolean,
    name?: string,
    email?: string,
    phone?: string | number,
    password?: string | number,
    updateState?: (newState: boolean) => void
}