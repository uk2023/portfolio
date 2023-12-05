const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/uk2023/portfolio',
  title: 'UK',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ujjwal Kumar',
  role: 'Full Stack Web Developer',
  description: "Versatile Full Stack Web Developer proficient in both front-end and back-end technologies. Specializing in crafting intuitive user interfaces with HTML, CSS, and JavaScript, while also building robust server-side applications using technologies like Node.js and Express.", 
  resume: 'https://example.com',
  social: {
    linkedin: 'www.linkedin.com/in/uk2023',
    github: 'https://github.com/uk2023',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Resume Builder Project',
    description: 'Showcasing a dynamic and responsive resume building application built with key technologies: React, Redux, and Material UI.',
    stack: ['React', 'Redux', 'Material UI'],
    sourceCode: 'https://github.com/uk2023/resumebuilder.io',
    livePreview: 'https://uk2023.github.io/resumebuilder.io/',
  },
  {
      name: 'Portfolio Project',
      description: 'Crafted a personal portfolio website with a modern and sleek design. Key Technologies: HTML, CSS, JS and React Framework',
      stack: ['HTML', 'CSS', 'ReactJS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Landing Page',
    description: 'Showcasing expertise in creating captivating web layouts, incorporating intricate design elements, and ensuring a user-friendly experience.',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/uk2023/Landing-Page',
    livePreview: 'https://uk2023.github.io/Landing-Page',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Material UI',
  'Next',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ujjwal.rob11@mail.com',
}

export { header, about, projects, skills, contact }
