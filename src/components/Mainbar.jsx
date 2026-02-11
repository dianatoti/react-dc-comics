export default function Mainbar() {

    const items = [
        {label: "DIGITAL COMICS", icon: "/img/buy-comics-digital-comics-png"},
        {label: "DC MERCHANDISE", icon: "/img/buy-comics-merchandise.png"},
        {label: "SUBSCRIPTION", icon: "/img/buy-comics-subscriptions.png"},
        {label: "COMIC SHOP LOCATOR", icon: "/img/buy-comics-shop-locator.png"},
        {label: "DC POWER VISA", icon: "/img/buy-dc-power-visa.svg"}
    ];
    return (
        <nav className="mainbar">
            <ul className="main-list">
                {items.map((item) => (
                    <li key={item.label}>
                        <img src={item.icon} alt={item.label} />
                        <span>{item.label}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}