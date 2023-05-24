let about = document.querySelector('section#About .row:last-child')

let aboutContent = [
    "Hello there My name is Mihlali Matrose.I went Isiphiwo Public Primary school, i started and finished my high school education. I then went to start my high school education at COSAT. Then i was introduced to IT in grade 10 and i gained persion for it. Then during school holidays i did a junior biologist course with the aquarium and got my Diamond status certificate. Recently i Matriculated from COSAT(Centre Of Science And Technology). I am currently attending Life Choices Academy where i'm upskilling my self as a developer.",
    "I volunteer to work at a guarden when i was sixteen. I also volunteered to work at at the Two Oceans Aquarium. The i dealed with tourist explaining aquatic life to them. I also got the chance to work Behind The Scenes in the aquarium. I assisted in taking care of the animals, feeding them and i was responsible for cleaning the tanks in the morning before the aquarium opens."
]

//loop through the content

aboutContent.forEach(
    (content,i)=>{
        about.innerHTML += `<p class='lead'>${i+1} ${content}</p>`
    }
)

//education
let education = [
    {
        id: 1,
        year: 2020,
        description: 'I got my certificates on Data science',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2019,
        description: 'I got my certificates on Advanced to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I got my certificates on Intro to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2015,
        description: 'I got my certificate on Intro to Android Developer',
        place: 'Study Jams',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2014,
        description: 'I got my diploma on Software Engineering',
        place: 'Tshwane University of Technology',
        type: 'Diploma',
        certificate: ''
    },
    {
        id: 6,
        year: 2005,
        description: 'Completed my course on PC Engineering',
        place: 'Havatech',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 7,
        year: 2000,
        description: 'Grade 12',
        place: '',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})
