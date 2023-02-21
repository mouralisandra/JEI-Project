export interface LoginDTO {
    email: string;
    password: string;
}

export interface RegisterDTO {
    nom: string;
    email: string;
    password: string;
    commercant?: boolean;
}