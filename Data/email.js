const liftOff = {
    young_professionals: [
    { name: "Aldalali, Malek", email: "malda0001@launchpadphilly.org" },
    { name: "Archer, Antonio", email: "aarch0004@launchpadphilly.org" },
    { name: "Blocker, Jennifer", email: "jbloc0008@launchpadphilly.org" },
    { name: "Gillespie, Keith", email: "kgill0013@launchpadphilly.org" },
    { name: "Godinez, Kristian", email: "kgodi0015@launchpadphilly.org" },
    { name: "Jones, Willisam", email: "wjone0021@launchpadphilly.org" },
    { name: "Moore, Kareem", email: "kmoor0031@launchpadphilly.org" },
    { name: "Nixon, Jaylen", email: "jnixo0033@launchpadphilly.org" },
    { name: "Solomon, Nasirah", email: "nsolo0039@launchpadphilly.org" },
    { name: "Souare, Mohamed", email: "msoua0040@launchpadphilly.org" },
    { name: "Strickland, Sianni", email: "sstri0041@launchpadphilly.org" },
    { name: "Watts, Christian", email: "cwatt0046@launchpadphilly.org" },
    { name: "Wright, Isaiah", email: "iwrig0048@launchpadphilly.org" },
    { name: "Gunawan, Bryan", email: "bguna0050@launchpadphilly.org" },
    { name: "DeLuca-Lyons, Demitri", email: "ddelu0068@launchpadphilly.org" },
    { name: "Gunawan, James", email: "jguna0076@launchpadphilly.org" },
    { name: "Ong, Jamir", email: "jong0102@launchpadphilly.org" },
    { name: "Santos-Martinez, Pedro", email: "psant0109@launchpadphilly.org" },
    { name: "Tellez-Torres, Kevin", email: "ktell0112@launchpadphilly.org" }
    ]
};


function showProfiles() {
    const container = document.getElementById('container');

    const sortedUsers = liftOff.young_professionals.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    sortedUsers.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
        `;

        container.appendChild(userCard);
    });
}

showProfiles();

