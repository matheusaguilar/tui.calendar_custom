import { Fragment, h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import { useTheme } from '@src/contexts/themeStore';
import { cls } from '@src/helpers/css';
import { weekDayGridLeftSelector } from '@src/selectors/theme';
import type { TimeGridData } from '@src/types/grid';
import type { CalendarInfo } from '@src/types/options';

interface HorizontalGridRowProps {
  calendars: CalendarInfo[];
  timeGridData: TimeGridData;
}

export function HorizontalGridRow({ calendars, timeGridData }: HorizontalGridRowProps) {
  const dayGridLeftTheme = useTheme(weekDayGridLeftSelector);
  const widthSize = window.innerWidth;

  const panelRef = useRef<HTMLDivElement | null>(null);
  const [panelWidth, setPanelWidth] = useState(150);

  useEffect(() => {
    if (panelRef.current && timeGridData.columns.length > 0) {
      const maxWidth = panelRef.current.offsetWidth / timeGridData.columns.length;
      setPanelWidth(Math.max(maxWidth, 150));
    }
  }, [timeGridData]);

  return (
    <Fragment>
      <div className={cls('panel-title')} style={dayGridLeftTheme}></div>
      <div ref={panelRef} className={cls('allday-panel')}>
        <div className={cls('panel-grid-wrapper')}>
          <div style={{ display: 'flex', height: '100%' }}>
            {calendars.map((calendar) => (
              <div
                key={calendar.id}
                style={{
                  display: 'flex',
                  width: `100%`,
                  maxWidth: `${panelWidth}px`,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '1px solid rgb(229, 229, 229)',
                  padding: '2px',
                }}
              >
                <div
                  className={cls('avatar-icon')}
                  style={{
                    width: calendar.avatarIcon ? '36px' : '32px',
                    height: calendar.avatarIcon ? '36px' : '32px',
                    backgroundImage: calendar.avatarIcon ? `url(${calendar.avatarIcon})` : null,
                  }}
                />
                <span
                  style={{
                    fontSize: widthSize > 900 ? '14px' : '12px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: 'calc(100% - 46px)',
                  }}
                >
                  {calendar.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
