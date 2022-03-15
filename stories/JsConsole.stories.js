import "./JsConsole.mjs"

export default {
  title: 'Komponenten/JSConsole',
  argTypes: {
    src: { control: "text"},
  },
};

const Template = (args) => {
    return `<js-console src='${args.src}'></js-console>`
};


export const test = Template.bind({});
test.args = {
  src: 'https://moritzbalg.github.io/WS21-Web-Engineering-Master/tasks/u3/js-files/a1_8.js'
};