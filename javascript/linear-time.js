const sections = [
  {
    title: 'Getting started',
    reset_lesson_position: false,
    lessons: [{ name: 'Welcome' }, { name: 'Installation' }],
  },
  {
    title: 'Basic operator',
    reset_lesson_position: false,
    lessons: [
      { name: 'Addition / Subtraction' },
      { name: 'Multiplication / Division' },
    ],
  },
  {
    title: 'Advanced topics',
    reset_lesson_position: true,
    lessons: [{ name: 'Mutability' }, { name: 'Immutability' }],
  },
]

const { directory } = sections.reduce(({counter, directory}, {title, lessons, reset_lesson_position}) => {
  const updatedCounter = reset_lesson_position ? 1 : counter
  const updatedDirectory = {
    ...directory,
    [title]: lessons.map((lesson, index) => {
      return { ...lesson, position: updatedCounter + index }
    })
  }

  return { counter: updatedCounter + lessons.length, directory: updatedDirectory }
}, {counter: 1, directory: {}})

const result = sections.map((section, index) => {
  const { title } = section

  return {
    ...section,
    position: index + 1,
    lessons: directory[title]
  }
})

console.log(JSON.stringify(result, null, 4))
