const descriptions = {
    1: "I have a solid foundation in Python, which is my favorite tool for problem-solving, and I know JavaScript basics, enabling me to work interactively on web pages.",
    2: "I possess knowledge in HTML, CSS, Django, and SQL databases, which allows me to create efficient and aesthetically pleasing web applications.",
    3: "Creativity is my secret weapon. I can think outside the box, allowing me to create innovative solutions and turn ideas into reality.",
    4: "I am a quick learner. My ability to absorb new information allows me to adapt swiftly to new technologies and trends.",
    5: "My power lies in combining Python with HTML, CSS, and Django, allowing me to create complex web applications that not only work but also delight users.",
    6: "My creativity combined with programming skills in Python and JavaScript enables me to find unconventional solutions and execute innovative projects.",
    7: "I quickly learn new programming languages, which allows me to swiftly adapt to new technologies and solve problems in the latest projects.",
    8: "My skills in HTML, CSS, and Django align with my creativity, allowing me to create solutions that are not only functional but also aesthetically pleasing.",
    9: "I learn and apply new technologies in HTML, CSS, and databases quickly, enabling me to introduce innovations into my projects efficiently.",
    10: "My creativity and quick learning ability allow me to bring fresh ideas to life and implement them immediately.",
    11: "Combining my programming skills in Python with frameworks and technologies empowers me to design unique and advanced web applications.",
    12: "My programming skills and knowledge of HTML, CSS, and databases, combined with my ability to learn quickly, allow me to implement effective solutions rapidly.",
    13: "Creativity in programming enables me to absorb new techniques quickly, allowing me to create innovative solutions that adapt to changing needs.",
    14: "My technical knowledge, creativity, and quick learning skills work together, enabling me to develop projects that are both functional and rich in fresh ideas.",
    15: "By combining my programming skills, knowledge of IT resources, creativity, and quick learning ability, I can create innovative projects that amaze and meet user expectations.",
    16: "Sometimes it's good to pause and reflect on my skills. I'm gathering knowledge and experience to fully unleash my potential.",

    '1,2': "Combining my programming skills in Python with frameworks like Django allows me to create web applications that are not only functional but also aesthetically pleasing.",
    '1,3': "My creativity combined with programming skills enables me to find unconventional solutions and execute innovative projects.",
    '1,4': "I quickly learn new programming languages, which allows me to adapt to new technologies and solve problems.",
    '2,3': "My HTML, CSS, and Django skills align with my creativity, allowing me to create functional and visually appealing solutions.",
    '2,4': "I apply new technologies in HTML, CSS, and databases quickly, enabling me to introduce innovations into my projects efficiently.",
    '3,4': "My creativity and quick learning ability allow me to bring fresh ideas to life and implement them immediately.",
    '1,2,3': "By combining programming, creativity, and frameworks, I design unique and advanced web applications.",
    '1,2,4': "My programming skills and quick learning allow me to implement effective solutions rapidly.",
    '1,3,4': "Creativity in programming enables me to absorb new techniques quickly, creating innovative solutions.",
    '2,3,4': "My technical knowledge, creativity, and quick learning skills work together, enabling me to develop functional and creative projects.",
    '1,2,3,4': "Combining programming skills, knowledge of IT resources, creativity, and quick learning ability allows me to create innovative projects."
};

const skillIds = {
    programming: 1,
    frameworks: 2,
    creativity: 3,
    learning: 4
};

const buttons = document.querySelectorAll('.skill-button');
const descriptionDiv = document.getElementById('description');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
        const selectedSkills = Array.from(buttons)
            .filter(btn => btn.classList.contains('selected'))
            .map(btn => btn.getAttribute('data-skill'));

        let descriptionText;

        if (selectedSkills.length === 0) {
            descriptionText = descriptions[16];
        } else if (selectedSkills.length === 1) {
            descriptionText = descriptions[skillIds[selectedSkills[0]]];
        } else {
            const keys = selectedSkills.map(skill => skillIds[skill]);
            keys.sort();
            const combinedKey = keys.join(',');

            descriptionText = descriptions[combinedKey];
        }

        descriptionDiv.innerHTML = `<p>${descriptionText}</p>`;
    });
});
