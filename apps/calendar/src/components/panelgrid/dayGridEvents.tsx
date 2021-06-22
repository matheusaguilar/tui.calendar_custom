import { Fragment, FunctionComponent, h } from 'preact';
import range from 'tui-code-snippet/array/range';

import { cls } from '@src/util/cssHelper';
import { addDate, getGridLeftAndWidth, toEndOfDay, toStartOfDay } from '@src/time/datetime';
import { PanelGrid } from '@src/components/panelgrid/panelgrid';
import { PanelTitle } from '@src/components/panelgrid/panelTitle';
import TZDate from '@src/time/date';
import GridEvents from '@src/components/daygrid/gridEvents';
import { DEFAULT_PANEL_HEIGHT } from '@src/controller/panel';
import ScheduleViewModel from '@src/model/scheduleViewModel';
import { useCreationGuide } from '@src/components/hooks/creationGuide';
import GridWithMouse from '@src/components/daygrid/gridWithMouse';
import { CreationGuide } from '@src/components/daygrid/creationGuide';
import { useStore } from '@src/components/hooks/store';
import { convertPxToNum } from '@src/util/units';
import { WeekOption } from '@src/model';
import { createMousePositionDataGrabber } from '@src/util/weekViewHelper';
import { useDOMNode } from '@src/components/hooks/domNode';

import type { Cells, DayGridEventType } from '@t/panel';
import type { GridGuideInfo } from '@t/components/daygrid/creationGuide';

const defaultPanelInfoList: TZDate[] = range(0, 7).map((day) => {
  const now = new TZDate();

  return addDate(now, day - now.getDay());
});

interface Props {
  type: DayGridEventType;
  events: ScheduleViewModel[];
  cells?: Cells;
  timesWidth?: number;
  timezonesCount?: number;
  height?: number;
  options?: WeekOption;
  shouldRenderDefaultPopup?: boolean;
}

function getGridInfoList(cells: Cells): GridGuideInfo[][] {
  return [
    cells.map<GridGuideInfo>((cell) => {
      const start = toStartOfDay(cell);
      const end = toEndOfDay(cell);

      return { start, end };
    }),
  ];
}

export const DayGridEvents: FunctionComponent<Props> = ({
  type = 'milestone',
  events,
  cells = defaultPanelInfoList,
  timesWidth = 120,
  timezonesCount = 1,
  height = DEFAULT_PANEL_HEIGHT,
  options = {},
  shouldRenderDefaultPopup = false,
}) => {
  const {
    state: {
      week: { dayGridSchedule },
    },
  } = useStore('theme');
  const [panelContainer, setPanelContainerRef] = useDOMNode<HTMLDivElement>();
  const columnWidth = timesWidth * timezonesCount;
  const { narrowWeekend = false, startDayOfWeek = 0, workweek = false } = options;
  const grids = getGridLeftAndWidth(cells.length, narrowWeekend, startDayOfWeek, workweek);
  const getMousePositionData =
    type === 'allday' && panelContainer
      ? createMousePositionDataGrabber(cells, grids, panelContainer)
      : () => null;

  const { creationGuide, onGuideChange, onGuideEnd, onGuideCancel } = useCreationGuide(
    shouldRenderDefaultPopup
  );
  const gridInfoList = getGridInfoList(cells);

  return (
    <Fragment>
      <PanelTitle width={columnWidth} template={type} model={type} />
      <GridWithMouse
        gridInfoList={gridInfoList}
        onGuideEnd={onGuideEnd}
        onGuideChange={onGuideChange}
        onGuideCancel={onGuideCancel}
        getMousePositionData={getMousePositionData}
      >
        <div className={cls('allday-panel')} ref={setPanelContainerRef}>
          <PanelGrid
            name={type}
            cells={cells}
            events={events}
            height={height}
            options={{ narrowWeekend }}
          />
          <GridEvents
            name={type}
            cells={cells}
            height={height}
            events={events}
            narrowWeekend={narrowWeekend}
            className={cls(`panel-${type}-events`)}
            headerHeight={0}
            eventTopMargin={convertPxToNum(dayGridSchedule.marginTop)}
          />
          <CreationGuide
            creationGuide={creationGuide}
            cells={cells}
            narrowWeekend={narrowWeekend}
          />
        </div>
      </GridWithMouse>
    </Fragment>
  );
};
