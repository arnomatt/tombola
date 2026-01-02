import { useNavigate } from "react-router";

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>Landing</div>
            <div>
                <button onClick={() => navigate('/cartelle')}>Cartelle</button>
                <button onClick={() => navigate('/tabellone')}>Tabellone</button>
            </div>
        </>
    )
}