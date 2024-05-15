
export class UserRepository {

    private endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    public Get(page: number = 1, count: number = 10): Promise<Response> {
        return fetch(`${this.endpoint}?page=${page}&results=${count}`);
    }
}