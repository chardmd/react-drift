import React from "react";

export interface DriftProps {
  appId: string;
  attributes?: any;
  eventHandlers?: { event: string; function: () => void }[];
  style?: any;
}

export default class Drift extends React.Component {
  props: DriftProps;
  insertScript: (scriptText: string) => void;
  addMainScript: () => void;
  addAttributes: () => void;
  addEventHandlers: () => void;
  createStyleString: () => void;
  addCustomStyle: () => void;
}
