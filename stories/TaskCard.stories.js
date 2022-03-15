import "./task-card.mjs"


export default {
  title: 'Komponenten/TaskCard',
  argTypes: {
    titel: { control: "text"},
    image: { control: "text"},
    tags: { control: "text"}
  },
};

const Template = (args) => {
    return `<task-card img='${args.image}' tags='${args.tags}'>${args.titel}</task-card>`
};

export const singleCard = Template.bind({});
singleCard.args = {
    titel: "Katzen",
    image: "https://www.aquatop-aachen.de/Content/files/56197/Katze-langweilt-sich-Was-zu-tun_-_-Aquatop-950x950-proportionalbiggest.webp",
    tags: "Katzen, Süß, Cool" 
};
