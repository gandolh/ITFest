import { Button, Group, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";


type AuthGroupMobileProps = {
    authenticatedUser: User | null;
}
const AuthGroupMobile = ({ authenticatedUser }: AuthGroupMobileProps) => {
    const navigate = useNavigate();

    const HandleRedirectMyInfo = () => {
        navigate('/myinfo')
    }

    const HandleLogout = () => {
        localStorage.removeItem('authenticatedUser');
        navigate('/');
    }

    return (
        <>
            {(authenticatedUser === null) && (
                <Group justify="center" grow pb="xl" px="md">
                    <Button variant="default">Log in</Button>
                    <Button>Sign up</Button>
                </Group>
            )}
            {(authenticatedUser !== null) && (
                <Stack>
                    <Button variant="default" className="w-full" onClick={HandleRedirectMyInfo}>My info</Button>
                    <Button variant="default" className="w-full"> Others 🙂 </Button>
                    <Button variant="default" onClick={HandleLogout}>Log out</Button>
                </Stack>
            )}
        </>
    );
}

export default AuthGroupMobile;