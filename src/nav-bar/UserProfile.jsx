import { useUserContext } from "../user-context/UserProvider";

export default function UserProfile(props) {
    const user = useUserContext();
    return (
        <div>
            Username: {user.name}
        </div>
    )
}