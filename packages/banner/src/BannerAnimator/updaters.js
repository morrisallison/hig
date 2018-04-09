import statuses from "./statuses";

export function startExpand() {
  return { status: statuses.EXPANDING };
}

export function startCollapse() {
  return { status: statuses.COLLAPSING };
}

export function endExpand() {
  return {
    status: statuses.EXPANDED,
    wrapperStyle: {
      transition: "",
      overflow: "",
      height: ""
    },
    innerWrapperStyle: {
      transform: ""
    }
  };
}

export function endCollapse({ innerWrapper }) {
  const innerWrapperHeight = innerWrapper.offsetHeight;

  return {
    status: statuses.COLLAPSED,
    wrapperStyle: {
      transition: "",
      overflow: "hidden",
      height: "0"
    },
    innerWrapperStyle: {
      transition: "",
      transform: `translateY(-${innerWrapperHeight}px)`
    }
  };
}

export function prepareCollapse({ innerWrapper }) {
  const innerWrapperHeight = innerWrapper.offsetHeight;

  return {
    wrapperStyle: {
      transition: "",
      overflow: "hidden",
      height: `${innerWrapperHeight}px`
    },
    innerWrapperStyle: {
      transition: "",
      transform: ""
    }
  };
}

export function animateCollapse({ innerWrapper }) {
  const innerWrapperHeight = innerWrapper.offsetHeight;

  return {
    wrapperStyle: {
      transition: "500ms height ease",
      overflow: "hidden",
      height: "0"
    },
    innerWrapperStyle: {
      transition: "500ms transform ease",
      transform: `translateY(-${innerWrapperHeight}px)`
    }
  };
}

export function animateExpand({ innerWrapper }) {
  const innerWrapperHeight = innerWrapper.offsetHeight;

  return {
    wrapperStyle: {
      transition: "500ms height ease",
      overflow: "hidden",
      height: `${innerWrapperHeight}px`
    },
    innerWrapperStyle: {
      transition: "500ms transform ease",
      transform: ""
    }
  };
}
