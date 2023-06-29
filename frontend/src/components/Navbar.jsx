import { useUserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { logout } = useUserContext();
  return (
    <div>
      <button type="button" onClick={() => logout()}>
        Disconnect
      </button>
    </div>
  );
}
