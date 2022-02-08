import { Story, Meta } from '@storybook/angular/types-6-0';
import { UiComponent } from '../../projects/ui/src/lib/ui.component';

export default {
  title: 'UI/Button',
  component: UiComponent,
} as Meta;

const Template: Story<UiComponent> = (args: UiComponent) => ({
  props: args,
  template: `
    <vss-ui>
      {{ ngContent }}
    </vss-ui>
  `
});

export const Primary = Template.bind({});
Primary.args = {
  'ngContent': 'Click me!'
};
