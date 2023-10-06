export enum Theme {
    DARK = "DARK",
    LIGHT = "THEME-LIGHT",
}

export enum View {
    PROJECTS = "PROJECTS",
    ABOUT = "ABOUT",
    CONTACT = "CONTACT",
}

export type Project = {
    id: number
    name: string
    description: string
    descriptionShort: string
    href: URL
    src: string
    tags: string[]
    images: string[]
    role?: string
    locked: boolean
}

export type PreferedSubject = {
    name: string
    description: string
}

export type Work = {
    name: string
    description: string
    from: Date
    to?: Date
}

export type Message = {
    id: string
    message: string
    from: MessageAuthor
}

export enum MessageAuthor {
    USER="USER",
    AI="AI"

}