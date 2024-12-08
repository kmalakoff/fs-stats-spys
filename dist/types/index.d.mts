export default function statsSpys(): {
    (stats: any): void;
    dir: {
        (): void;
        callCount: number;
    };
    file: {
        (): void;
        callCount: number;
    };
    link: {
        (): void;
        callCount: number;
    };
    callCount: number;
};
