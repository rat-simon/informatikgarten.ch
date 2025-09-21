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
        title: <span className="menuicon pink">Bau eines Addierers</span>
    },
    aufbau: {
        title: <span className="menuicon pink">Computer & OS</span>
    },
    code: {
        title: <span className="menuicon pink">Programmieren 1</span>
    },
    data: {
        title: <span className="menuicon pink">Daten & Information</span>
    },
    code2: {
        title: <span className="menuicon pink">Programmieren 2</span>
    },
    net: {
        title: <span className="menuicon pink">Netzwerke & Internet</span>
    },
    // Weitere Inhalte
    '---': {
        type: 'separator',
        title: 'Weitere Inhalte'
    },
    blender: {
        title: <span className="menuicon blue">Blender & VFX</span>
    },
    crypto: {
        title: <span className="menuicon blue">Kryptologie</span>
    },
    microbit: {
        title: <span className="menuicon blue">Robotik</span>
    },
    didactics: {
        title: <span className="menuicon blue">Didaktik</span>
    },
    sql: {
        title: <span className="menuicon blue">Datenbanken</span>
    },
    privacy: {
        display: 'hidden'
    },
    turtleinvaders: {
        title: <span className="menuicon blue">Turtle Invaders</span>
    },
    webdev: {
        title: <span className="menuicon blue">Web-Dev</span>
    },
    IKT: {
        title: <span className="menuicon blue">IKT</span>
    },
    population: {
        title: <span className="menuicon blue">Populationsdynamik</span>
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
