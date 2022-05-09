type SeriesSize = 'sm' | 'md' | 'lg';

/********************************/
/******  INTERFACES DATAS  ******/
/********************************/

interface FlowchartingOptions {
  newFlag: boolean;
  format: string;
  valueName: string;
  rulesData: RulesHandlerOptions;
  // flowchartsData: FlowchartHandlerOptions;
  version: string;
}

interface RulesHandlerOptions {
  rulesData: RuleOptions[];
}

interface RuleOptions {
  order: number; // Index of rule
  pattern: string;
  metricType: MetricTypeKeys;
  alias: string;
  refId: string;
  column: string;
  aggregation: AggregationKeys;
  unit: string;
  type: string;
  hidden: boolean;
  decimals: number;
  reduce: boolean;
  dateColumn: string;
  dateFormat: DateFormatKeys;
  invert: boolean;
  gradient: boolean;
  overlayIcon: boolean;
  tooltip: boolean;
  tooltipLabel: string;
  tooltipColors: boolean;
  tooltipOn: TooltipOnKeys;
  tpDirection: DirectionKeys;
  tpMetadata: boolean;
  tpGraph: boolean;
  tpGraphSize: GraphSizeKeys;
  tpGraphType: GraphTypeKeys;
  tpGraphLow: number | null;
  tpGraphHigh: number | null;
  tpGraphScale: GraphScaleKeys;
  mapsDat: {
    shapes: RuleShapeMapData;
    texts: RuleTextMapData;
    links: RuleLinkMapData;
    events: RuleEventMapData;
  };
  numberTHData: TTHNumberData[];
  stringTHData: TTHStringData[];
  dateTHData: TTHDateData[];
  mappingType: number;
  valueData: TValueMapData[];
  rangeData: TRangeMapData[];
  sanitize: boolean;
  newRule: boolean;
}

interface RuleMapOptions {
  identByProp: PropertieKey;
  metadata: string;
  enableRegEx: boolean;
}

interface RuleMapData {
  options: RuleMapOptions;
  dataList: MapDataArray;
}

interface RuleShapeMapData extends RuleMapData {
  dataList: ShapeMapData[];
}

interface TextMapData extends GFMapData {
  textReplace: TextMethodKeys;
  textPattern: string;
  textOn: TextOnKeys;
}

interface RuleTextMapData extends RuleMapData {
  dataList: TextMapData[];
}

interface GFMapData {
  pattern: string;
  hidden: boolean;
}

interface ShapeMapData extends GFMapData {
  style: StyleColorKeys;
  colorOn: ColorOnKeys;
}

interface LinkMapData extends GFMapData {
  linkUrl: string;
  linkParams: boolean;
  linkOn: LinkOnKeys;
}

/********************************/
/*******  Simple Types **********/
/********************************/

type MetricTypeKeys = 'table' | 'serie';
type AggregationKeys =
  | 'first'
  | 'first_notnull'
  | 'current'
  | 'current_notnull'
  | 'min'
  | 'max'
  | 'total'
  | 'avg'
  | 'count'
  | 'delta'
  | 'range'
  | 'diff'
  | 'last_time'
  | 'graph-hover';
type DateFormatKeys =
  | 'YYYY-MM-DD HH:mm:ss'
  | 'YYYY-MM-DD HH:mm:ss.SSS'
  | 'MM/DD/YY h:mm:ss a'
  | 'MMMM D, YYYY LT'
  | 'YYYY-MM-DD';
type TooltipOnKeys = 'wc' | 'a';
type DirectionKeys = 'v' | 'h';
type GraphSizeKeys = '100%' | '100px' | '200px' | '400px';
type GraphTypeKeys = 'line' | 'bar';
type GraphScaleKeys = 'linear' | 'log';
type PropertieKey = 'id' | 'value' | 'metadata';
type MapDataArray = ShapeMapData[] | TextMapData[] | LinkMapData[] | EventMapData[];
type StyleColorKeys =
  | 'fillColor'
  | 'strokeColor'
  | 'gradientColor'
  | 'fontColor'
  | 'labelBackgroundColor'
  | 'labelBorderColor'
  | 'imageBorder'
  | 'imageBackground';
type ColorOnKeys = 'n' | 'wc' | 'a';
type TextMethodKeys = 'content' | 'pattern' | 'as' | 'anl';
type TextOnKeys = 'n' | 'wmd' | 'wc' | 'co';
type LinkOnKeys = 'wc' | 'a';
