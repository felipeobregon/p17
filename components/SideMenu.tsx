export default function SideMenu() {
    const menuItems = Array(10).fill('Hello world!')

    return (
        <>
            <ul className="fixed border-r-2 border-ltop-0 left-0">
                {menuItems.map(x => <li className="rounded-lg hover:bg-gray-100 p-5">{x}</li>)}
            </ul>
        </>
    )
}