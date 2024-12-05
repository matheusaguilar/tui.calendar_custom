import { Fragment, h } from 'preact';

import { useTheme } from '@src/contexts/themeStore';
import { cls } from '@src/helpers/css';
import { weekDayGridLeftSelector } from '@src/selectors/theme';
import type { CalendarInfo } from '@src/types/options';

interface HorizontalGridRowProps {
  calendars: CalendarInfo[];
}

export function HorizontalGridRow({ calendars }: HorizontalGridRowProps) {
  const dayGridLeftTheme = useTheme(weekDayGridLeftSelector);
  const widthSize = window.innerWidth;

  return (
    <Fragment>
      <div className={cls('panel-title')} style={dayGridLeftTheme}></div>
      <div className={cls('allday-panel')}>
        <div className={cls('panel-grid-wrapper')}>
          <div style={{ display: 'flex', height: '100%' }}>
            {calendars.map((calendar) => (
              <div
                key={calendar.id}
                style={{
                  display: 'flex',
                  width: `100%`,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {calendar.avatarIcon && (
                  <div style={{ marginRight: '6px' }}>{calendar.avatarIcon}</div>
                )}
                <span style={{ fontSize: widthSize > 900 ? '14px' : '12px' }}>{calendar.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
