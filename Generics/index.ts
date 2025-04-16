function identify<T>(value: T): T {
    return value;
}

const str = identify<string>("Hello");
const num = identify<number>(10);


interface IApiResponse<T> {
    success: boolean;
    data: T
}

const userResponse: IApiResponse<{name: string}> = {
    success: true,
    data: {name: 'Alice'}
}