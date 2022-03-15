import "./Reference.mjs"

export default {
  title: 'Komponenten/Reference',
  argTypes: {
    author: { control: "text"},
    year: { control: "number"},
    url: { control: "text"},
    title: { control: "text"}
  },
};

const Template = (args) => {
    return `<reference-source author='${args.author}' url='${args.url}' year='${args.year}'>${args.title}</reference-source>`
};

export const web = Template.bind({});
web.args = {
    author : "Perficent",
    year: 2022,
    url: "https://www.perficient.com/insights/research-hub/mobile-vs-desktop-usage",
    title: "Mobile vs. Desktop Usage in 2020"
};

export const book = Template.bind({});
book.args = {
    author : "Paul Fuchs",
    year: 2021,
    title: "JavaScript Programmieren für Einsteiger"
};