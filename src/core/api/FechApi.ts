
export const fetchData = async <T>(endpoint: string): Promise<T> => {
    const res = await fetch(`https://fakestoreapi.com/${endpoint}`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json()
}