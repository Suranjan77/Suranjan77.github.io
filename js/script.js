const headerStickyObserver = new IntersectionObserver(
    ([e]) => {
        e.target.classList.toggle('isSticky', e.intersectionRatio < 1);
        const navLogo = document.getElementById('nav-logo');
        if (e.intersectionRatio < 1) {
            navLogo.style.height = "30px";
            navLogo.style.width = "30px";
        } else {
            navLogo.style.height = "100px";
            navLogo.style.width = "100px";
        }
    },
    { threshold: [1] }
)

headerStickyObserver.observe(document.querySelector('header'))

const buildSkills = () => {
    const skillsDiv = document.getElementById('skills');
    categorizedSkills.map(buildSkillBlock)
        .forEach(block => skillsDiv.appendChild(block))
}

const buildSkillBlock = category => {
    let skillDiv = document.createElement('div')
    skillDiv.setAttribute('id', category.category.replace(/ /g, '-').toLowerCase())

    let ulDiv = document.createElement('ul')

    category.skills
        .forEach(content => appendSkills(ulDiv, content))

    skillDiv.appendChild(ulDiv)

    return skillDiv
}

const appendSkills = (parent, skill) => {
    let pBlock = document.createElement('p')
    pBlock.innerHTML = skill.name
    parent.appendChild(pBlock)

    let liBlock = document.createElement('li')

    let barBlock = document.createElement('span')
    barBlock.setAttribute('class', 'bar')

    let skillSpan = document.createElement('span')
    skillSpan.setAttribute('id', 'skill-' + skill.index)
    skillSpan.style.width = skill.level

    barBlock.appendChild(skillSpan)

    liBlock.appendChild(barBlock)

    parent.appendChild(liBlock)

}

const categorizedSkills = [
    {
        category: "Programming Languages",
        skills: [
            {
                name: "JDK 11",
                level: "95%",
                index: 0
            },
            {
                name: "Rust",
                level: "40%",
                index: 1
            },
            {
                name: "JavaScript",
                level: "60%",
                index: 2
            }
        ]
    },
    {
        category: "Frameworks",
        skills: [
            {
                name: "Spring Boot",
                level: "80%",
                index: 3
            },
            {
                name: "C++",
                level: "50%",
                index: 4
            },
            {
                name: "Node JS",
                level: "40%",
                index: 5
            }
        ]
    },
    {
        category: "Technologies",
        skills: [
            {
                name: "Rabbit MQ",
                level: "70%",
                index: 6
            },
            {
                name: "Kubernetes",
                level: "60%",
                index: 7
            },
            {
                name: "Jenkins",
                level: "30%",
                index: 8
            }
        ]
    },
    {
        category: "Platforms",
        skills: [
            {
                name: "AWS",
                level: "30%",
                index: 9
            },
            {
                name: "GCP",
                level: "15%",
                index: 10
            },
            {
                name: "Azure",
                level: "15%",
                index: 11
            }
        ]
    },
    {
        category: "Others",
        skills: [
            {
                name: "GraphQL",
                level: "30%",
                index: 12
            },
            {
                name: "Leadership",
                level: "60%",
                index: 13
            },
            {
                name: "Communication",
                level: "80%",
                index: 14
            }
        ]
    }
]

buildSkills()
