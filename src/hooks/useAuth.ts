import { useAppSelector } from "../store/hooks";

const useAuth = () => {
    const { email, token, id } = useAppSelector((state) => state.users);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
};

export default useAuth;
