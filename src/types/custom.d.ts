declare namespace Express {
    export interface Request {
        user: string;
        userModel: {
            id: number;
            login: string;
        };
    }
}
