import { h } from 'preact';

import type { Story } from '@storybook/preact';

import { Day } from '@src/components/view/day';
import EventModel from '@src/model/eventModel';
import TZDate from '@src/time/date';
import { addDate, addHours } from '@src/time/datetime';

import { ProviderWrapper } from '@stories/util/providerWrapper';
import { createRandomEventModelsForMonth, createRandomEvents } from '@stories/util/randomEvents';

import type { EventObject } from '@t/events';

import { mockCalendars } from './mocks/mockCalendars';

export default { title: 'Views/DayView', component: Day };

function createTimeGridEvents() {
  const today = new TZDate();
  const start = addDate(new TZDate(), -today.getDay());
  const end = addDate(start, 6);

  return createRandomEvents('week', start, end).map((event) => new EventModel(event));
}

function createTimeGridDayEvents() {
  const start = new TZDate();
  const end = addHours(start, 1);

  const events: EventObject[] = [];

  mockCalendars.forEach((calendar, index) => {
    let event: EventObject = {};
    event.id = index.toString();
    event.calendarId = calendar.id;
    event.category = 'time';
    event.title = `Test - ${calendar.name}`;
    event.start = start;
    event.end = end;
    event = new EventModel(event);

    events.push(event);
  });

  return events;
}

const Template: Story = (args) => (
  <ProviderWrapper options={{ ...args.options, calendars: mockCalendars }} events={args.events}>
    <Day />
  </ProviderWrapper>
);

export const basic = Template.bind({});

export const randomEvents = Template.bind({});
randomEvents.args = {
  events: [...createRandomEventModelsForMonth(40), ...createTimeGridEvents()],
  options: { useFormPopup: true, useDetailPopup: true },
};

export const horizontalView = Template.bind({});
horizontalView.args = {
  events: [...createTimeGridDayEvents()],
  options: { week: { horizontalDayView: true }, defaultView: 'day' },
};
