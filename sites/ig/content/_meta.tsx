export default {
    // Pages
    index: {},
    inspiration: {},
    faq: {},
    kurse: {},
    '--': {
        type: 'separator',
        title: 'Grundjahr'
    },
    adder: {
        title: (
            <span className="menuicon pink">
                <span>A</span>Bau eines Addierers
            </span>
        )
    },
    aufbau: {
        title: (
            <span className="menuicon pink">
                <span>B</span>Computer & OS
            </span>
        )
    },
    code: {
        title: (
            <span className="menuicon pink">
                <span>C</span>Programmieren 1
            </span>
        )
    },
    data: {
        title: (
            <span className="menuicon pink">
                <span>D</span>Daten & Information
            </span>
        )
    },
    code2: {
        title: (
            <span className="menuicon pink">
                <span>E</span>Programmieren 2
            </span>
        )
    },
    net: {
        title: (
            <span className="menuicon pink">
                <span>F</span>Netzwerke & Internet
            </span>
        )
    },
    // Weitere Inhalte
    '---': {
        type: 'separator',
        title: 'Weitere Inhalte'
    },
    crypto: {
        title: (
            <span className="menuicon blue">
                <span>F</span>Kryptologie
            </span>
        )
    },
    microbit: {
        title: (
            <span className="menuicon blue">
                <span>G</span>Robotik
            </span>
        )
    },
    didactics: {
        title: (
            <span className="menuicon blue">
                <span>H</span>Didaktik
            </span>
        )
    },
    sql: {
        title: (
            <span className="menuicon blue">
                <span>I</span>Datenbanken
            </span>
        )
    },
    privacy: {
        display: 'hidden'
    },
    turtleinvaders: {
        title: (
            <span className="menuicon blue">
                <span>J</span>Turtle Invaders
            </span>
        )
    },
    webdev: {
        title: (
            <span className="menuicon blue">
                <span>K</span>Web-Dev
            </span>
        )
    },
    IKT: {
        title: (
            <span className="menuicon blue">
                <span>L</span>IKT
            </span>
        )
    },
    // -- Hidden stuff ---
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
