import type { Meta, StoryObj } from '@storybook/vue3';
import type { Props } from '../ResultCard';

import { default as ResultCard } from '../ResultCard.vue';

const manifest: Meta<Props> = {
  title: 'ResultCard/Card',
  component: ResultCard,
  argTypes: {},
  args: {},
  parameters: {

  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    () => ({
      template: `
      <div style="">
        <story />
      </div>`,
    }),
  ],
} satisfies Meta<typeof ResultCard>;

export default manifest;
type Story = StoryObj<typeof manifest>;

export const Default: Story = {
  render: (args, context) => ({
    components: { ResultCard },
    setup() {
      return { args, context };
    },
    template: `
    <ResultCard v-bind="args">

    </ResultCard>`,
  }),
  args: {},
};

export const LogoProps: Story = {
  render: (args, context) => ({
    components: { ResultCard },
    setup() {
      return { args, context };
    },
    template: `
    <ResultCard v-bind="args">

    </ResultCard>`,
  }),
  args: {
    result: {
      id: '1',
      name: 'some name',
      description: 'some desc'
    },
  },
};
