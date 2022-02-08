import { Story, Meta } from '@storybook/angular/types-6-0';
import { UiComponent } from '../../projects/ui/src/lib/ui.component';

export default {
  title: 'VSS-UI/Button',
  component: UiComponent,
  argTypes: {
    slot: {
      description: 'CTA label',
    }
  }
} as Meta;

const Template: Story<UiComponent> = (args: UiComponent) => ({
  props: args,
  template: `
    <vss-ui>
      {{ slot }}
    </vss-ui>
  `
});

export const Default = Template.bind({});
Default.args = {
  slot: 'Click me!'
};
