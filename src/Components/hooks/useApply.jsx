import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../AuthContext/UserContext";

const useApply = () => {
    const { user } = useContext(UserContext);

    const { refetch, data = [], isError, isLoading } = useQuery({
        queryKey: ['applied', user?.email],
        queryFn: async () => {
            if (!user?.email) return [];

            try {
                const response = await fetch(`https://hirely-job-portal-server.vercel.app/applied?email=${user.email}`);
                
                if (!response.ok) {
                    throw new Error("Failed to fetch applied data");
                }

                const data = await response.json();
                return data;
            } catch (error) {
                console.error("Error fetching applied data:", error);
                return []; 
            }
        },
        enabled: !!user?.email, 
    });

    return { cart: data, refetch, isError, isLoading };
};

export default useApply;
