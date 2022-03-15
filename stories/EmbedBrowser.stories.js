import "./EmbedBrowser.mjs"

export default {
  title: 'Komponenten/LiveBrowser',
  argTypes: {
    src: { control: "text"},
    oprientation: {
      options: ['landscape', 'portrait'],
      control: { type: 'radio' },
    }
  },
};

const Template = (args) => {
    return `<embed-browser src='${args.src}' orientation='${args.oprientation}'></embed-browser>`
};


export const landscape = Template.bind({});
landscape.args = {
  src: 'https://moritzbalg.github.io/WS21-Web-Engineering-Master/tasks/u6/a3.html',
  orientation: "landscape"
};


export const portrait = Template.bind({});
portrait.args = {
  src: 'https://moritzbalg.github.io/WS21-Web-Engineering-Master/tasks/u6/a3.html',
  orientation: "portrait"
};