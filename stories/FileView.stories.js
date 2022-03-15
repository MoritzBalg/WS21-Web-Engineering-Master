import "./FileView.mjs"

export default {
  title: 'Komponenten/FileView',
  argTypes: {
    src: { control: "text"},
    title: {control: "text"}
  },
};

const Template = (args) => {
    return `<file-viewer src='${args.src}''>${args.title}</file-viewer>`
};


export const html = Template.bind({});
html.args = {
  src: 'https://moritzbalg.github.io/WS21-Web-Engineering-Master/tasks/u6/a3.html',
  title: "Aufgabe X"
};


