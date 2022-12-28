export default function Home({name}) {
    const vname = name || "Guest";
    return (
        <>
            <h1>Hello {vname}</h1>
            <p>This is my Another Element</p>
            <button>Click Me</button>
        </>
    )
}