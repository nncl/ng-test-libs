import { Story, Meta } from '@storybook/angular/types-6-0';
import { UiComponent } from '../../projects/ui/src/lib/ui.component';

export default {
  title: 'VSS-UI/Button',
  component: UiComponent,
  argTypes: {
    slot: {
      description: 'CTA content label. There\'s only one slot within.',
      table: {
        type: {
          // summary: 'There\'s only one slot within',
          // detail: 'something really really long'
        },
      },
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

// TODO Describe slot type: if default, or has its name
// TODO Page module import UI
// TODO Page module import Core
// TODO Page how to use Core services
