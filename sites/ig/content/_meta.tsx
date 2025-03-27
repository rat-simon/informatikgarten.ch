export default {
    // Pages
    index: {},
    inspiration: {},
    faq: {},
    aufbau: {
        title: (
            <span className="menuicon pink">
                <span>A</span>Aufbau von Computern
            </span>
        )
    },
    code: {
        title: (
            <span className="menuicon pink">
                <span>B</span>Programmieren
            </span>
        )
    },
    data: {
        title: (
            <span className="menuicon pink">
                <span>C</span>Daten & Information
            </span>
        )
    },
    net: {
        title: (
            <span className="menuicon pink">
                <span>D</span>Netzwerke & Internet
            </span>
        )
    },
    crypto: {
        title: (
            <span className="menuicon pink">
                <span>E</span>Kryptologie
            </span>
        )
    },
    microbit: {
        title: (
            <span className="menuicon pink">
                <span>F</span>Robotik
            </span>
        )
    },
    didactics: {
        title: (
            <span className="menuicon pink">
                <span>G</span>Didaktik
            </span>
        )
    },
    sql: {
        title: (
            <span className="menuicon pink">
                <span>H</span>Datenbanken
            </span>
        )
    },
    privacy: {
        display: 'hidden'
    },
    // Weitere Inhalte
    '--': {
        type: 'separator',
        title: 'Weitere Inhalte'
    },
    IKT: {
        title: (
            <span className="menuicon blue">
                <span>A</span>IKT
            </span>
        )
    },
    turtleinvaders: {
        title: (
            <span className="menuicon blue">
                <span>B</span>Turtle Invaders
            </span>
        )
    },
    webdev: {
        title: (
            <span className="menuicon blue">
                <span>C</span>Web-Dev
            </span>
        )
    },
    kurse: {},
    // Navbar items
    dashboard: {
        display: 'hidden'
    },
    404: {
        type: 'page',
        display: 'hidden',
        theme: {
            timestamp: false,
            typesetting: 'article'
        }
    },
    // -- Hidden stuff ---
    attachments: {
        display: 'hidden'
    },
    algo: {
        display: 'hidden'
    },
    graph: {
        display: 'hidden'
    },
    snake: {
        display: 'hidden'
    },
};
