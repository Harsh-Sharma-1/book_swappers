import { useEffect, useState } from "react";

type UseApiProps<T> = {
    fn: () => Promise<T>;
};

export function useApi<T>({ fn }: UseApiProps<T>) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                setData(await fn());
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {
        data,
        loading,
        error,
    };
}
