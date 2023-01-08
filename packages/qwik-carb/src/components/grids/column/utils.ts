import { CssGridSpanShape, SpanProp, SpanShape } from "./css-grid/model";

export const breakpoint_names = ['sm', 'md', 'lg', 'xlg', 'max'];

export const getClassNameForBreakpoints = (
  breakpoints: Array<SpanProp | undefined>,
  prefix: string
) => {
  const classNames = [];
  // const breakpoints = Object.values(breakpoints_arg) as Array<SpanProp>;

    for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    if (breakpoint === undefined || breakpoint === null) {
      continue;
    }

    const name = breakpoint_names[i];

    // If our breakpoint is a boolean, the user has specified that the column
    // should be "auto" at this size
    if (breakpoint === true) {
      classNames.push(`${prefix}--${name}:col-span-auto`);
      continue;
    }

    // If our breakpoint is a string, the user has specified a percent
    // they'd like this column to span.
    if (typeof breakpoint === "string") {
      classNames.push(`${prefix}--${name}:col-span-${breakpoint.slice(0, -1)}`);
      continue;
    }

    // If our breakpoint is a number, the user has specified the number of
    // columns they'd like this column to span
    if (typeof breakpoint === "number") {
      classNames.push(`${prefix}--${name}:col-span-${breakpoint}`);
      continue;
    }

    const { span, offset /* , start, end  */ } = breakpoint as CssGridSpanShape;

    if (typeof offset === "number" && offset > 0) {
      classNames.push(`${prefix}--${name}:col-start-${offset + 1}`);
    }

	/*
	  if (typeof start === "number") {
	  classNames.push(`${prefix}--${name}:col-start-${start}`);
	  }
	  
	  if (typeof end === "number") {
	  classNames.push(`${prefix}--${name}:col-end-${end}`);
	  }
	*/
	
    if (typeof span === "number") {
      classNames.push(`${prefix}--${name}:col-span-${span}`);
    } else if (typeof span === "string") {
      classNames.push(`${prefix}--${name}:col-span-${span.slice(0, -1)}`);
      continue;
    }
  }

  return classNames.join(" ");
};

export const getClassNameForSpan = (value: any, prefix: string) => {
  const classNames = [];

  if (typeof value === "number" || typeof value === "string") {
    classNames.push(`${prefix}--col-span-${value}`);
  } else if (typeof value === "object") {
    const { span, start, end } = value;

    if (span !== undefined && span !== null) {
      classNames.push(`${prefix}--col-span-${span}`);
    }

    if (start !== undefined && start !== null) {
      classNames.push(`${prefix}--col-start-${start}`);
    }

    if (end !== undefined && end !== null) {
      classNames.push(`${prefix}--col-end-${end}`);
    }
  }

  return classNames.join("");
};

export const getClassNameForFlexGridBreakpoints = (breakpoints: Array<SpanProp | undefined>, prefix: string) => {
  const classNames = [];
  // const breakpoints = Object.values(breakpoints_arg) as Array<SpanProp>;
  // const breakpoint_names = Object.keys(breakpoints_arg);

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    if (breakpoint === undefined || breakpoint === null) {
      continue;
    }

    const name = breakpoint_names[i];

    // If our breakpoint is a boolean, the user has specified that the column
    // should be "auto" at this size
    if (breakpoint === true) {
      classNames.push(`${prefix}--col-${name}`);
      continue;
    }

    // If our breakpoint is a number, the user has specified the number of
    // columns they'd like this column to span
    if (typeof breakpoint === 'number') {
      classNames.push(`${prefix}--col-${name}-${breakpoint}`);
      continue;
    }

    const { span, offset } = breakpoint as SpanShape;
    if (typeof span === 'number') {
      classNames.push(`${prefix}--col-${name}-${span}`);
    }
      
      /*
	if (span === true) {
	classNames.push(`${prefix}--col-${name}`);
	}
      */
      
    if (typeof offset === 'number') {
      classNames.push(`${prefix}--offset-${name}-${offset}`);
    }
  }

  return classNames.join(' ');
}
