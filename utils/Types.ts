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
    year: Date
    id: number
    name: string
    description: string
    href: URL
    src: string
    tags: string[]
    images: string[]
    role?: string
}

export type PreferedSubject = {
    name: string
    description: string
}

export type Work = {
    name: string
    description: string
    year: Date
}