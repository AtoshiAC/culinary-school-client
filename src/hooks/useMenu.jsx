import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://culinary-server-almahmudsarker.vercel.app/menu');
            return res.json();
        }
    })

    return [menu, loading, refetch]
}

export default useMenu;