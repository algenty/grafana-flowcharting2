import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme2 } from '@grafana/ui';

interface FlowchartingPanelOptions extends PanelProps<FlowchartingOptions> {}

export const FlowchartingPanel: React.FC<FlowchartingPanelOptions> = ({
  id,
  data,
  timeZone,
  width,
  height,
  options,
  fieldConfig,
  replaceVariables,
  onOptionsChange,
  onChangeTimeRange,
}) => {
  const theme = useTheme2();
  const styles = getStyles();

  if (!data) {
    return (
      <div className="panel-empty">
        <p>No data found in response</p>
      </div>
    );
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <FlowchartingPanelController
        theme={theme}
        id={id}
        data={diagramModels}
        timeZone={timeZone}
        width={width}
        height={height}
        options={options}
        fieldConfig={fieldConfig}
        replaceVariables={replaceVariables}
        onOptionsChange={onOptionsChange}
        onChangeTimeRange={onChangeTimeRange}
      ></FlowchartingPanelController>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
