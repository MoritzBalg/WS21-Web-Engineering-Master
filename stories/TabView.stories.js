import "./tab-element.mjs"
import "./tab-view.mjs"

export default {
  title: 'Komponenten/TabView',
  argTypes: {
    content: { control: "text"}
  },
};

const Template = (args) => {
    return `<tab-view>${args.content}</tab-view>`
};

export const twoTabs = Template.bind({});
twoTabs.args = {
content: `
  <tab-element tab-title="Tab1">
      <h1>Hallo Welt</h1>
  </tab-element>
  <tab-element tab-title="Coole Liste">
    <ul>
      <li>Hallo</li>
      <li>Welt</li>
    </ul>
  </tab-element> 
`
};

export const fourTabs = Template.bind({});
fourTabs.args = {
content: `
  <tab-element tab-title="Tab1">
      <img src="https://www.aquatop-aachen.de/Content/files/56197/Katze-langweilt-sich-Was-zu-tun_-_-Aquatop-950x950-proportionalbiggest.webp">
  </tab-element>
  <tab-element tab-title="Coole Liste">
    <ul>
      <li>Hallo</li>
      <li>Welt</li>
    </ul>
  </tab-element>
  <tab-element tab-title="Tab3">
  <h1>Hallo Welt</h1>
  </tab-element>
  <tab-element tab-title="Tab Nummer 4">
    Hier Könnte Ihre Werbung stehen!
  </tab-element> 
`
};
