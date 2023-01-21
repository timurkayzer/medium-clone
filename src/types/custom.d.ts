declare namespace Express {
    export interface Request {
        userEmail: string;
        userModel: {
            id: number;
            login: string;
        };
    }
}
