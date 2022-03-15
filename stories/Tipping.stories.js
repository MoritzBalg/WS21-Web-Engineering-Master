import "./typing-field.js"


export default {
  title: 'Komponenten/TippingHeadline',
  argTypes: {
    text: { control: "text"}
  },
};

const Template = (args) => {
    return `<typing-field>${args.text}</typing-field>`
};

export const simpleText = Template.bind({});
simpleText.args = {
    text: "Katzen" 
};