export type TokenData = {
    userId: number;
    roleName: string;
};

declare global {
    // express
    namespace Express {
        export interface Request {
            tokenData: TokenData;
        }
    }
}